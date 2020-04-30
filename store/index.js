import Vue from 'vue';
import Vuex from 'vuex';
import {home} from './home.js';
import {cart} from './cart.js';
import {details} from './details.js';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        home,
        cart,
				details
      }
})
export default store