import { userService } from '../_services';
import router from '../router';

const auth = JSON.parse(localStorage.getItem('auth'));

const state = auth
    ? { status: { loggedIn: true }}
    : { status: {}};

const actions = {
    login({ dispatch, commit }, { userIdentity, password }) {
        commit('loginRequest', { userIdentity });
    
        userService.login(userIdentity, password)
            .then(
                () => {
                    commit('loginSuccess');
                    router.push('/');
                },
                error => {
                    commit('loginFailure');
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logout({ commit }) {
        userService.logout();
        commit('logout');
        router.push('/login');
    },
    register({ dispatch, commit }, user) {
        commit('registerRequest', user);
    
        userService.register(user)
            .then(
                message => {
                    commit('registerSuccess', message);
                    router.push('/login');
                    setTimeout(() => {
                        // display success message after route change completes
                        dispatch('alert/success', 'Registration successful', { root: true });
                    })
                },
                error => {
                    commit('registerFailure');
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};

const mutations = {
    loginRequest(state) {
        state.status = { loggingIn: true };
    },
    loginSuccess(state) {
        state.status = { loggedIn: true };
    },
    loginFailure(state) {
        state.status = {};
    },
    logout(state) {
        state.status = {};
    },
    registerRequest(state) {
        state.status = { registering: true };
    },
    registerSuccess(state) {
        state.status = {};
    },
    registerFailure(state) {
        state.status = {};
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};