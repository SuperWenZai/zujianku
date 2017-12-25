<template>
  <div class="hello">
    <h1 v-text="msg"></h1>
    <h2 @click="indexfun" v-text="mas"></h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to My ZuJianKu!',
      mas : '点击进入组件库...'
    }
  },
  methods : {
    indexfun(){
      this.$router.push('/index')
    }
  }
}
</script>

<style scoped>
  h1,h2{
    font-weight: normal;
    text-align: center;
    margin-top: 50%;
    font-size: 2rem;
    color: coral;
  }
  h2{
    cursor:pointer;
    margin-top: 15%;
    font-size: 1.5rem;
  }

</style>
