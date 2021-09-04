import Vue from 'vue'
import Vuex from 'vuex'

import { alert } from './alert.module';
import { account } from './account.module';
import { users } from './users.module';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    companyName: "NewWebsite",
    companyCaption: " : Available free for developers"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    alert,
    account,
    users
  }
});

export default store