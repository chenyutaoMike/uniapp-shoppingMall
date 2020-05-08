import Vue from 'vue';
import Vuex from 'vuex';
import {home} from './home.js';
import {cart} from './cart.js';
import {details} from './details.js';
import {goodList} from './good-list.js';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        home,
        cart,
				details,
				goodList
      }
})
export default store