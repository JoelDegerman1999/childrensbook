<template>
  <div id="app">
    <router-view/>  
  </div>
</template>

<script>

export default {
  data(){return {
    book: Object
  }},
  methods: {
    test(value) {
      this.book = value
      console.log(this.book)
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

//Vet att detta inte är ok på större projekt men får fungera här
* {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}


@media screen and(max-width:800px){
  #app {
    height: 100%;
  }
}
</style>
