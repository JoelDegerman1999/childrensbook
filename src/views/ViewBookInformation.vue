<template>
  <section class="viewBookSect">
    <router-link to="/">
      <div class="back-icon-div">
        <img src="../assets/keyboard_backspace-24px.svg" alt />
      </div>
    </router-link>
    <BookInfo :book="getBookById()" />
  </section>
</template>

<script>
import BookInfo from "../components/BookInformation";

export default {
  name: "Book",
  components: {
    BookInfo,
  },
  methods: {
    getBookById() {
      return this.$store.getters.getBookById(
        Number.parseInt(this.$route.params.id)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.viewBookSect {
  box-sizing: border-box;
  padding: 3rem;
  background: rgb(27, 27, 27);
  height: 100%;

  a {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: gray;
    .back-icon-div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 70px;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .viewBookSect {
    padding: 1rem;
    a {
      display: inline-block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: gray;
      margin-bottom: 1rem;
      .back-icon-div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 50px;
        }
      }
    }
  }
}
</style>
