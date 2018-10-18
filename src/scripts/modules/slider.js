import Vue from 'vue';

const info = {
  template: '#slider-info',
  props: {
    work: Object
  }
}

const display = {
  template: '#slider-display',
  props: {
    work: Object
  }
}

const btns = {
  template: '#slider-btns',
  methods: {
    slide(direction){
      this.$emit('slide', direction)
    }
  }
}

new Vue({
  el: '#slider-component',
  components: {
    info, display, btns
  },
  data(){
    return {
      works: [],
      currentIndex: 0
    }
  },
  computed: {
    currenWork(){
      return this.works[this.currentIndex]
    }
  },
  watch: {
    currentIndex(value) {
      const workNumCountedFromZero = this.works.length -1;
      if (value > workNumCountedFromZero) this.currentIndex = 0
      if (value < 0) this.currentIndex = workNumCountedFromZero
    }
  },
  created(){
    const data = require('../../../data/works.json');
    this.works = data;
  },
  methods: {
    handleSlide(direction){
     switch(direction){
       case 'prev':
        this.currentIndex = this.currentIndex -1;
        break;
        case 'next':
          this.currentIndex = this.currentIndex +1;
          break;
     }
      
    }
  },
  template: '#slider-root'
})