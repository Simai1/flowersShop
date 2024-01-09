import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuth:false,
    Nid:0,
    cart:[
    ],

  },
  getters: {
  },
  mutations: {
    addCard(state, card)
    {
      state.cart.push(card)
    },
    incId(state)
    {
        state.Nid+=1
    },
    deleteCard(state, id)
    {
       state.cart = state.cart.filter(c => c.id !== id);
    },
    DeleteCart(state)
    {
        state.cart = [];
    },
    AuthUser(state)
    {
        state.isAuth = true;
    }

  },
  actions: {
  },
  modules: {
  }
})