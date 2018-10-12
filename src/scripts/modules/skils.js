import Vue from 'vue';


const skil = {
  template: "#skil"
}

const skilsItem = {
  components: {
    skil
  },
  prop: {
    skils: Object
  },
  template: "#skils-item"
}

new Vue({
  el: "#skils-component",
  components: {
    skilsItem
  },
  data(){
    return{
      skils: []
    }
  },
  created() {
    const data = require('../../../data/skils.json');
    this.skils = data;
  },
  template: "#skils-list"
});
