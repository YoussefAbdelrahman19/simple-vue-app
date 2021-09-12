import { createStore } from "vuex";
const moduleA = {
  state: {
    age: 20
  },
  getters: {
    age(state){
      return state.age;
    }
  },
  mutations: {
    increaseAge(state) {
      state.age++;
    },
    decreaseAge(state) {
      state.age--;
    }
  },
  actions: {
    decreaseAge(context) {
      context.commit('decreaseAge');
    },
    increase({commit}){
      commit('increaseAge');
    }
  }

};
export default createStore({

  state: {
    counter: 2
  },
  getters: {
    //do some methods
    // main purpose of this is reading 
    doubleCounter(state) {
      return state.counter * 2;
    },

    tripleCounter(state) {
      return state.counter * 3;
    }


  },
  //main purpose is to edit the state 
  mutations: {
    //put your methods here and make it receive the state as input
    //الاكشن لازمتها تعدل ع الستيت والموتيشن فايدتها تنفيذ الاكشن 
    // action can be asyc 
    //داخل الاكشن يتم عمل كوميت لميوتشن
    //الميوتشن تعدل ع state ثم يتم عرض ذلك ف الكومبنونت
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
  },
  actions: {
    increaseAfterSecond(context) {
      setTimeout(() => {
        context.commit('increase');
      }, 500);
    }

  },
  modules: {

    a: moduleA
  }
});
