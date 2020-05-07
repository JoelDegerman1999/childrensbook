<template>
  <section class="container">
    <router-link
      v-for="book in bookList"
      :key="book.id"
      :to="'/book/'+ book.id"
    >
      <article class="book" :style="{backgroundColor: book.color}">
        <div class="vl"></div>
        <div class="book-info">
          <h1>{{ book.title }}</h1>
          <h5>{{ book.author }}</h5>
        </div>
      </article>
    </router-link>
  </section>
</template>

<script>
export default {
  props: {
    bookList: Array
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.container {
  margin: 0 auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  grid-auto-rows: 450px;
}

.book {
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: orange;
  border-radius: 5px;
  padding-left: 1rem;
  display: flex;
  align-items: flex-end;

  .vl {
    border-left: 2px solid black;
    margin-right: 1rem;
    height: 100%;
  }

  .book-info {
    color: #fff;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    text-align: left;

    h1 {
      font-size: 1.5rem;
    }
  }
}
</style>