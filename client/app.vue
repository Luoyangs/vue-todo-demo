<template>
  <div class="test">
    <common-header></common-header>
    {{text}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'this is text'
    }
  },
  components: {
    CommonHeader: () => import('./components/common-header.vue')
  }
}
</script>

 <style lang="scss">
 @import './assets/styles/base.scss';
 @import './assets/styles/test.scss';
 .test{
   color: red;
 }
 </style>
 