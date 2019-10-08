import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments: [],
    url: 'https://jsonplaceholder.typicode.com'
  },
  mutations: {
    ADD_COMMENT: (state, payload) => {
      state.comments.push(...payload)
      state.comments.sort((a, b) => b.date - a.date)
    }
  },
  actions: {
    ADD_COMMENT: (context, payload) => {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: `${context.state.url}/posts`,
          data: payload,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        })
          .then(data => {
            context.commit('ADD_COMMENT', [payload])
            resolve()
          })
          .catch(err => {
            console.error(err)
            reject(err)
          })
      })
    },
    GET_COMMENTS: (context, payload) => {
      axios({
        method: 'GET',
        url: `${context.state.url}/posts`,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
        .then(data => {
        // data example
          const testComments = [
            {
              nickname: 'Meromen',
              comment: 'Отличный товар, но упаковка не очень качественная',
              rating: 4,
              date: new Date(2016, 0, 3)
            },
            {
              nickname: 'Code7unner',
              comment: 'Ужас, никогда не покупайте здесь, кидают!!!!!',
              rating: 1,
              date: new Date(2012, 2, 3)
            },
            {
              nickname: 'Senna_Mart',
              comment: 'Лучший магазин, что я встречала',
              rating: 5,
              date: new Date(2015, 0, 7)
            }
          ]
          context.commit('ADD_COMMENT', testComments)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
})
