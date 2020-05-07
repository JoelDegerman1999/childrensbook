<template>
  <section>
    <BookInfo :getBook="getBook"/>
  </section>
</template>

<script>
  import BookInfo from '../components/BookInformation'

export default {
  name: 'Book',
  components: {
    BookInfo
  },
  computed: {
    getBook(){
      return this.$root.getBook( this.$route.params.id )
    }
  }
}
</script>

<style lang="scss" scoped>
  section {
    height: 100vh;
    background: rgb(27, 27, 27);
  }
</style>


