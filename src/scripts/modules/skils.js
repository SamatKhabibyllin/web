import Vue from 'vue';

const skill = {
  template: '#skill',
  props: {
    title: String,
    percentage: Number
  },
  methods: {
    drawCircleDependOnPercentage(){
      const circle = this.$refs.circle;
      const currentPercent = parseInt(
      getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const requireDashoffset = (currentPercent / 100) * (100 - this.percentage);

      circle.style.strokeDashoffset = requireDashoffset;
    }
  },
  mounted(){
    this.drawCircleDependOnPercentage();
  }
}

const skillsRow = {
  template: '#skills-list__item',
  props: {
    skills: Object
  },
  components: {
    skill: skill
  }
}

new Vue({
  el: '#skills-components',
  components: {
    skillsRow: skillsRow
  },
  data(){
    return{
      skills: []
    }
  },
  created(){
    const data  = require('../../../data/skills.json');
    this.skills = data;
  },
  template: '#skills-list'
})