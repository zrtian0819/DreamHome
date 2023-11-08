var app = new Vue({
  el: "#app",
  data: {
    welcomeWords: "歡迎來到「夢想家」",
    Homephoto: "materials/photos/IMG_5731.JPG",
    introduction: "我是「亞琴」，讓我來幫您找一個家❤",
    producer: "Ren Tian Zhang",
    GoLink: "AboutMe.html",
  },

  watch: {
    // 监听窗口大小的变化
    $route() {
      this.checkScreenWidth();
    },
  },

  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
  },

  methods: {
    checkScreenWidth() {
      // 根据窗口宽度决定标题内容
      if (window.innerWidth < 860) {
        this.welcomeWords = "「夢想家」";
      } else {
        this.welcomeWords = "歡迎來到「夢想家」";
      }
    },
  },
});
