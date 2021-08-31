import axios from 'axios';
import router from '../router'

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: null,
    error: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {
    // Login action
    async login({commit}, user){
        try {
            commit('auth_request')
            let res = await axios.post('https://api.unknownclub.net/unkservice/sms/api/users/login', user)
            if(res.data.success){
                const token = res.data.token
                const user = res.data.user
                // Set the token to localStorage
                localStorage.setItem('token', token)
                // set default axios header
                axios.defaults.headers.common['Authorization'] = token
                axios.defaults.headers.common['X-Username'] = user.username
                commit('auth_success', token, user)
            }
            return res;
        } catch (error) {
            commit('auth_error', error)
        }
    },
    // Register user
    async register({commit}, userData){
        try {
            commit('register_request')
            let res = await axios.post('https://api.unknownclub.net/unkservice/sms/api/users/register', userData)
            if(res.data.success != undefined){
                commit('register_success')
            }
            
            return res;
        } catch (error) {
            commit('register_error', error)

        }
    },
    // Get the User profile
    async getProfile({commit}){
        commit('profile_request')
        let res = await axios.get('https://api.unknownclub.net/unkservice/sms/api/users/profile')
        commit('user_profile', res.data.user)
        return res

    },
    async logout({commit}){
        await localStorage.removeItem('token')
        commit('logout')
        delete axios.defaults.headers.common['Authorization']
        delete axios.defaults.headers.common['X-Username']
        router.push('/login')
        return 
    },
    async callSms({commit}, data){
        try {
            commit('sms_request')
            let res = await axios.post('https://api.unknownclub.net/unkservice/protected/sms/send', data)
            if(res.data.success){
                commit('sms_success')
            }
            return res;
        } catch (error) {
            commit('sms_error', error)
        }
    }
}

const mutations = {
    auth_request(state){
        state.error = null
        state.status = 'loading'
    },
    auth_success(state, token, user){
        state.token = token
        state.user = user
        state.status = 'Login success'
        state.error = null
    },
    register_request(state){
        state.error = null
        state.status = 'loading'
    },
    register_success(state){
        state.status = 'Register success'
        state.error = null
    },
    logout(state){
        state.error = null
        state.token = ''
        state.user = {}
        state.status = 'Logout success'
    },
    profile_request(/** state */){
        //state.status = 'loading'
    },
    user_profile(state, user){
        state.user = user
        //state.status = 'success'
    },
    register_error(state, error){
        state.error = error.response.data.msg
    },
    auth_error(state, error){
        state.error = error.response.data.msg
    },
    sms_request(state){
        state.error = null
        state.status = 'loading'
    },
    sms_success(state){
        state.status = 'Send Sms success'
        state.error = null
    },
    sms_error(state, error){
        state.error = error.response.data.msg
    },
}

export default {
    state,
    actions,
    mutations,
    getters
}