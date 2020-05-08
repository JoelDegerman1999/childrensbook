<template>
  <div class="wrapper">
    <div class="container">
      <router-link v-for="book in bookArray" :key="book.id" :to="'/book/'+ book.id">
        <Book :book="book" class="book"/>
      </router-link>
    </div>
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

.wrapper {
  background: rgb(27, 27, 27);
  width: 100%;
}

.book {
  min-width: 200px;
}

.container {
  padding: 2rem;
  margin: 0 auto;
  width: 85%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  grid-auto-rows: 430px;
}

@media screen and(max-width: 1300px){
  .container {
    grid-template-columns: repeat(2, 1fr);
  }

  .book {
    max-width: 400px;
  }
}


@media screen and(max-width: 700px){
  .container {
    grid-template-columns: repeat(1, 1fr);
  }

  .book {
    max-width: 400px;
  }
}
</style>
