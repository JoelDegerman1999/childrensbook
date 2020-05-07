<template>
  <section class="container">
    <article class="book" :style="{backgroundColor: getBook.color}">
      <div class="vl"></div>
      <div class="title-and-author">
        <h1>{{getBook.title}}</h1>
        <h5>{{getBook.author}}</h5>
      </div>
    </article>
    <div class="book-info">
      <h1>{{getBook.title}}</h1>
      <h4>By {{getBook.author}}</h4>
			<p>{{getBook.plot}}</p>
      <div class="book-info-box">
				<div class="left">
					<p>Audience: {{getBook.audience}}</p>
					<p>Pages: {{getBook.pages}}</p>
				</div>
				<div class="right">
					<p>First published: {{getBook.year}}</p>
					<p>Publisher: {{getBook.publisher}}</p>
				</div>
			</div>
      <button>Oh, I want to read it</button>
    </div>
  </section>
</template>

<script>
export default {
	props: {
    getBook: Object
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.container {
	font-family: 'Montserrat', sans-serif;
	height: 90%;
  line-height: 1.6rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
}
.book {
  grid-column: span 4;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: green;
  padding-left: 1rem;
  display: flex;
  align-items: flex-end;

  .vl {
    border-left: 2px solid black;
    margin-right: 1rem;
    height: 100%;
  }
  .title-and-author {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
    h1 {
      font-size: 1.8rem;
    }
  }
}

.book-info {
  color: rgb(219, 219, 219);
  box-sizing: border-box;
  margin-left: 1rem;
  padding-top: 1rem;
  grid-column: span 5;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    color: #fff;
    font-size: 2.5rem;
		margin-bottom: .5rem;
  }

  p {
		margin-top: 2rem;
    text-align: left;
    width: 50%;
  }

	.book-info-box {
		display: flex;
		width: 100%;
		.left {
			width: 25%;
			display: flex;
			flex-direction: column;
		}
		.right {
			width: 50%;
			display: flex;
			flex-direction: column;
		}
		p {
			margin: 0;
			padding: 0;
		}
	}
}
</style>