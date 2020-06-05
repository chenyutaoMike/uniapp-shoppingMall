import Vue from 'vue';
import Vuex from 'vuex';
import {home} from './home.js';
import {cart} from './cart.js';
import {details} from './details.js';
import {goodList} from './good-list.js';
import {user} from './user.js';
import {address} from './address.js';
import {buy} from './buy.js';
import {integral} from './integral.js';
import {openVip} from './openVip.js';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        home,
        cart,
				details,
				goodList,
				user,
				address,
				buy,
				integral,
				openVip
      }
})
export default store