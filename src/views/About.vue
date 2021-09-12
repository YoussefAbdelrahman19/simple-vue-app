<template>
  <div class="about">
    <h1>This is an about page and the counter is {{counter}}</h1>

  </div>

   
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      user: "",
      name:'hassan mohamed',
      arr:['moh','ahm','hassan'],
      age: 20,
      users: [
        { id: 1, name: "ali", age: 20 },
        { id: 1, name: "hassan", age: 30 },
        { id: 3, name: "mohamed", age: 40 },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    };
  },
  methods: {
    getUserData() {
      return "Youssef Abd ELrahman";
    },
    showUserAge(age) {
      this.age = age;
      return age;
    },
  },
};
</script>
