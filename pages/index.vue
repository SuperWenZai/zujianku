<template>
    <div class="index">
      <h1>CSS Components</h1>
      <m-cell :newitems="items"></m-cell>
    </div>
</template>
<style lang="less" scoped>
h1{
  text-align: center;
  font-size: 2rem;
  margin:1rem 0;
}
</style>
<script>
  import mCell from '@/components/awcomponents/Cell.vue'
    export default {
        name: 'index',
        data() {
            return {
              selectID : '',
              items : [
                {toptittle : 'Header'},
                {toptittle : 'Navbar'},
                {toptittle : 'Cell'},
                {toptittle : 'Button'},
                {toptittle : 'Search'},
              ]
            }
        },
      components : {
        mCell
      },
      watch : {
        selectID (newselectID){
          switch (newselectID){
            case 0 :
              this.$router.push('/Header');
              break;
            case 1 :
              this.$router.push('/Navbar');
              break;
            case 2 :
              this.$router.push('/Cell');
              break;
            case 3 :
              this.$router.push('/Button');
              break;
            case 4 :
              this.$router.push('/Search');
              break;
          }
        }
      }
    }
</script>
