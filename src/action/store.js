import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  note: {},
  activeNote: {},
  cz:  []
}

const mutations = {
  ADD_NOTE (state, text) {
    state.cz = text
  },

  EDIT_NOTE (state, text) {
    text={a:'a',b:'b'}
    state.note = text
  },

  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}

export default new Vuex.Store({
  state,
  mutations
})