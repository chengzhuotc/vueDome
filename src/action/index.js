// import  * as type from './type.js'
import Api from '../api'

export const addNote = ({ dispatch },params) => {
  Api.getTopics(params).then(response => {
  	dispatch('ADD_NOTE', response.data)
  }, err => {
   
  })
}

export const editNote = ({ dispatch  }, params) => {
  Api.getTopics(params).then(response => {
    dispatch ('EDIT_NOTE', response.data)
  }, err => {
   
  })
  
}

export const deleteNote = ({ dispatch }) => {
  dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({ dispatch }, note) => {
  dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ dispatch }) => {
  dispatch('TOGGLE_FAVORITE')
}


