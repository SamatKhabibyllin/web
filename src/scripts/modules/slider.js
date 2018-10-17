import Vue from 'vue';

const info = {
  template: '#slider-info'
}

const display = {
  template: '#slider-display'
}

const btns = {
  template: '#slider-btns'
}

new Vue({
  el: "#slider-component",
  components: {
    info, display, btns
  },
  template: '#slider-root'
})