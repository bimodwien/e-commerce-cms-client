import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS (state, dataProducts) {
      state.products = dataProducts
    }
  },
  actions: {
    submitLogin (context, payload) {
      axios({
        method: "POST",
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then(({data}) => {
        console.log(data)
        localStorage.setItem('access_token', data.access_token)
        router.push('/')
      })
      .catch(err => {
        console.log(err)
      })
    },


    fetchProducts (context, payload) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers : {
          access_token : token
        }
      })
      .then(({data}) => {
        context.commit('SET_PRODUCTS', data)
      })
      .catch(err => {
        console.log(err)
      })
    },

    deleteProducts ({dispatch}, payload) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/products/${payload.id}`,
        headers : {
          access_token : token
        }
      })
      .then(({data}) => {
        dispatch('fetchProducts')
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
