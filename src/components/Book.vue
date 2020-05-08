<template>
  <article class="book" :style="{backgroundColor: book.color}">
    <div class="vl"></div>
    <div class="book-info">
      <h1>{{ book.title }}</h1>
      <h5>{{ book.author }}</h5>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    book: Object
  }
};
</script>

<style lang="scss" scoped>
.book {
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: orange;
  border-radius: 3px;
  padding-left: 1rem;
  display: flex;
  align-items: flex-end;

  box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.2);

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