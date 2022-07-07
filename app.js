const app = Vue.createApp({
  // data, functions
  //   template: "<h2>I am the template</h2>",

  data() {
    return {
      counter: 0,
      showBooks: true,
      filterBooks: false,
      books: [
        {
          title: "Name of the wind",
          author: "Patrick Rothfuss",
          isFav: false,
        },
        {
          title: "The way of kings",
          author: "Brandon Sanderson",
          isFav: true,
        },
        {
          title: "The final Empire",
          author: "Brandon Sanderson",
          isFav: false,
        },
      ],
      x: 0,
      y: 0,
      url: "https://bmuday.com",
    };
  },
  methods: {
    // changeTitle(title) {
    //   //   this.title = "50 shades of grey";
    //   this.books[0].title = title;
    // },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
      console.log(e);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
    filter_Books() {
      this.filterBooks = !this.filterBooks;
      console.log(this.filterBooks);
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});
app.mount("#app");
