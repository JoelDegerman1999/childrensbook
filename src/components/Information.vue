<template>
  <div class="book-info">
    <h1>{{book.title}}</h1>
    <h4>By {{book.author}}</h4>
    <p>{{book.plot}}</p>
    <div class="book-info-box">
      <div class="left">
        <p>Audience: {{book.audience}}</p>
        <p>First published: {{book.year}}</p>
      </div>
      <div class="right">
        <p>Pages: {{book.pages}}</p>
        <p>Publisher: {{book.publisher}}</p>
      </div>
    </div>
    <a :href="book.buyUrl" target="_blank">
      <button>Oh, I want to read it</button>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    book: Object
  }
};
</script>

<style lang="scss" scoped>
.book-info {
  color: rgb(219, 219, 219);
  box-sizing: border-box;
  margin-left: 1rem;
  padding-top: 1rem;
  grid-column: span 5;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    color: rgb(5, 5, 5);
    font-weight: 700;
    cursor: pointer;
    border: none;
    background: rgb(224, 224, 224);
    outline: none;

    margin-top: 2rem;

    width: 200px;
    height: 50px;
    border-radius: 10px;
  }

  h1 {
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 2rem;
    text-align: left;
    width: 70%;
  }

  .book-info-box {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;

    .left {
      padding: 1rem 1rem 0;
      background: rgb(63, 63, 63);
      width: 60%;
      display: flex;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      justify-content: space-between;
    }
    .right {
      width: 60%;
      padding: 0.5rem 1rem 1rem;
      background: rgb(63, 63, 63);
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      display: flex;
      justify-content: space-between;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }
}


@media screen and (max-width: 800px) {
 .book-info {
   margin: 0;
   p {
     width: 100%;
   }
   .book-info-box {
     .left {
       box-sizing: border-box;
       width: 100%;

     }
     .right {
       box-sizing: border-box;
       width: 100%;
     }
   }
 }
}
  
</style>>
