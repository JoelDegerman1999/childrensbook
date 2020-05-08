<template>
  <div class="container">
    <router-link v-for="book in bookArray" :key="book.id" :to="'/book/'+ book.id">
      <Book :book="book" />
    </router-link>
  </div>
</template>

<script>
import Book from "../components/Book";

export default {
  name: "Books",
  components: {
    Book
  },
  data() {
    return {
      bookArray: this.$root.bookArray
    };
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.container {
  padding: 2rem;
  margin: 0 auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  grid-auto-rows: 450px;
}
</style>
