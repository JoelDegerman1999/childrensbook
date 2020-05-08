<template>
  <section class="container">
    <Book :book="book" class="book" />
    <Information :book="book" class="information" />
  </section>
</template>

<script>
import Book from "./Book";
import Information from "./Information";

export default {
  components: {
    Book,
    Information
  },
  props: {
    book: Object
  }
};
</script>

<style lang="scss" scoped>
.container {
  line-height: 1.6rem;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 500px;
}

.book {
  grid-column: 2 / span 3;
  cursor: default;
}

.information {
  grid-column: 5/10;
}
</style>