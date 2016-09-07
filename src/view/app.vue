<template>
  <div class='record-none' >
    <div class="recordNo-img cz">
    {{one.a}}
    {{data}}
    </div>
    <div class="addRecord-no">
     <a class="button" >
     </a>
    </div>
    <img src='../image/no.png'/>
  </div>
</template>
<script type="text/ecmascript-6">

import {addNote,editNote} from '../action/index.js'

export default {  
  ready() {
    this.editNote()
    this.addNote()

  },
  vuex:{
    getters: {
      one:(state) => state.note,
      data:(state) => state.cz.data
    },
    actions: {
      addNote,
      editNote
    }
  }
}
</script>

<style>
  body{
    background-color: #000
  }
</style>