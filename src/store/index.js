import { createStore } from 'vuex'
import app from './modules/app.js'
import auth from './modules/auth.js'

export default createStore({
  state: ()=>{
    return{

    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,auth
  }
})
