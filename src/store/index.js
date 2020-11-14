import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    currentProducts: {}
  },
  mutations: {
    SET_PRODUCTS(state, dataProducts) {
      state.products = dataProducts
    },
    SET_CURRENT_PRODUCTS(state, dataProducts) {
      state.currentProducts = dataProducts
    }
  },
  actions: {
    submitLogin(context, payload) {
      axios({
        method: "POST",
        // url: 'http://localhost:3000/login',
        url: 'https://e-commerce-bimodwien.herokuapp.com/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },


    fetchProducts(context, payload) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        // url: 'http://localhost:3000/products',
        url: 'https://e-commerce-bimodwien.herokuapp.com/products',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchProductsId(context, payload) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'GET',
        // url: `http://localhost:3000/products/${payload}`,
        url: `https://e-commerce-bimodwien.herokuapp.com/products/${payload}`,
        headers: {
          access_token: token
        }
      })     
    },


    addProducts(context, payload) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        // url: 'http://localhost:3000/products',
        url: 'https://e-commerce-bimodwien.herokuapp.com/products',
        headers: {
          access_token: token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
      .then(({ data }) => {
        context.dispatch('fetchProducts')
        router.push('/')
      })
      .catch(err => {
        console.log(err)
      })     
    },

    editProducts({dispatch}, payload) {
      console.log(payload);
      const token = localStorage.getItem('access_token')     
      axios({
        method: 'PUT',
        // url: `http://localhost:3000/products/${payload.id}`,
        url: `https://e-commerce-bimodwien.herokuapp.com/products/${payload.id}`,
        headers: {
          access_token: token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
      .then(({data}) => {
        dispatch('fetchProducts')
      })
      .catch(err => {
        console.log(err)
      })
    },

    deleteProducts({ dispatch }, payload) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        // url: `http://localhost:3000/products/${payload.id}`,
        url: `https://e-commerce-bimodwien.herokuapp.com/products/${payload.id}`,
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
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
