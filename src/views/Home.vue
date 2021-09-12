<template>
  <div class="home">
   <HelloWorld />
    <p>This is home page</p>
    <p>The counter is {{ counter }} and the double counter is {{doubleCounter}}</p>
    <button @click="increaseCounter">Increase value</button>
    <button @click="commit_after_second">Increase value after a second</button>
    <p>The result of the increase counter is:{{counter}}</p>
    <p>Another state from another module {{age}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed:{
    counter(){
      return this.$store.state.counter;
    },
    doubleCounter(){
      return this.$store.getters.doubleCounter;
    },
    age(){
      console.log( 
       this.$store.getters.age

      );
      return this.$store.getters.age;
    }
  
    

    }
    ,methods:{
        increaseCounter(){
      return this.$store.commit("increase");
    },
    commit_after_second(){
    //dispatch is the process of get the action

      this.$store.dispatch('increaseAfterSecond');
    }
    }
    
  }
  
;
</script>
