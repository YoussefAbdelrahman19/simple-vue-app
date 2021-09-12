<template>
  <div class="hello">
    <p>Empty hello</p> 
      </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed:{
    ...mapGetters(['doubleCounter','tripleCounter']),
    counter(){
      return this.$store.state.counter;
    },
    init(){
      return this.$store.state.counter;
    }
    ,addtoCounter(){
      return this.$store.getters.tripleCounter;
    }
  }
};
</script>

<style scoped lang="scss">

</style>
