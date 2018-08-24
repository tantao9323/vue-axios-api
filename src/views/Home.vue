<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    userLogin() {
      this.api
        .login("admin", "123456")
        .then(res => {
          if (res.status === 200) {
            this.$store.dispath("login", res.data.token);
          } else {
            // Other Handler
          }
        })
        // eslint-disable-next-line
        .catch(err => {
          // Error Handler
        });
    }
  }
};
</script>
