const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: [],
      email: null,
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((result) => {
        this.email = result.data.response;
        this.emailList.push(this.email);
      });
  },
}).mount("#app");
