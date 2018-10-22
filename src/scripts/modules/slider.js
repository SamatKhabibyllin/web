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
  props: {
    works: Array,
    index: Number
},
  data(){
    return {
      prevButtonWorks: [],
      nextButtonWorks: []
    }
  },
  created(){
    this.prevButtonWorks = this.retransformWorksForButton('prev');
    this.nextButtonWorks = this.retransformWorksForButton('next');
  },
  methods: {
    slide(direction){
      this.$emit('slide', direction)
    },
    retransformWorksForButton(buttonDirection){
      const worksArray = [...this.works];
      const lastItem = worksArray[worksArray.length -1];
      switch(buttonDirection){
        case "prev":
          worksArray.unshift(lastItem);
          worksArray.pop();
          break;
        case "next":
          worksArray.push(worksArray[0]);
          worksArray.shift();
          break;
      }

      return worksArray;
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
    loopCurrentIndex(value){
      const worksNumFromZero = this.works.length -1;
      if (value > worksNumFromZero) this.currentIndex = 0
      if (value < 0) this.currentIndex = worksNumFromZero
    },
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