<template>
  <div class="home">
    <ShowBooks :bookList="bookArray" />
  </div>
</template>

<script>
import ShowBooks from '../components/ShowAllBooks'

export default {
  name: 'Books',
  components: {
    ShowBooks
  },
  data() {return {
    bookArray: this.$root.bookArray
  }}
}
</script>
