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
    Information,
  },
  props: {
    book: Object,
  },
};
</script>

<style lang="scss" scoped>
.container {
  line-height: 1.6rem;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 700px;
}

.book {
  grid-column: 2 / span 3;
  cursor: default;
  max-height: 500px;
}

.information {
  grid-column: 5/10;
}

@media screen and (max-width: 800px) {
  .container {
    grid-template-columns: 1fr;
  }
  .book {
    grid-column: 1;
  }

  .information {
    grid-column: 1;
  }
}
</style>
