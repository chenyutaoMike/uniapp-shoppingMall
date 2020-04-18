import Vue from 'vue';
import Vuex from 'vuex';
import {home} from './home.js';
import {cart} from './cart.js';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        home,
        cart
      }
})
export default store