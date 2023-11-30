// 為了讓navbar正常運作的代碼
navLink._data.linkButton[1].style = "btn link-active";

var app = new Vue({
  el: "#objectRegion",
  data: {
    budget: 10000,
    keyWords: "",
    filterMode: false,
    cards: [
      {
        objName: "竹圍海別墅",
        photoLink:
          "https://www.twdreamlife.com/wp-content/uploads/2020/02/%E6%88%BF%E5%AD%901.jpg",
        city: "新屋區",
        address: "",
        objType: "透天別墅",
        spaceDiv: "三房兩廳一衛浴",
        price: 1025,
        discount: false,
        discussion: false,
      },
      {
        objName: "森林系別墅",
        photoLink: "https://cdn2.ettoday.net/images/4211/4211228.jpg",
        city: "觀音區",
        address: "",
        objType: "透天別墅",
        spaceDiv: "三房兩廳一衛浴",
        price: 794,
        discount: false,
        discussion: true,
      },
      {
        objName: "荒郊寧靜別墅",
        photoLink:
          "https://www.howlawyer.com.tw/wp-content/uploads/2019/07/joint-venture-advocate-success-win-the-case-return-s.jpg",
        city: "觀音區",
        address: "",
        objType: "透天別墅",
        spaceDiv: "三房兩廳一衛浴",
        price: 866,
        discount: true,
        discussion: false,
      },
      {
        objName: "荒郊寧靜別墅2",
        photoLink:
          "https://www.howlawyer.com.tw/wp-content/uploads/2019/07/joint-venture-advocate-success-win-the-case-return-s.jpg",
        city: "觀音區",
        address: "",
        objType: "透天別墅",
        spaceDiv: "三房兩廳一衛浴",
        price: 866,
        discount: false,
        discussion: false,
      },
      {
        objName: "荒郊寧靜別墅3",
        photoLink:
          "https://images.homify.com/c_fill,f_auto,q_0,w_740/v1508677797/p/photo/image/2283199/DSC_2122.jpg",
        city: "平鎮區",
        address: "",
        objType: "透天別墅",
        spaceDiv: "五房四廳二衛浴",
        price: 2099,
        discount: true,
        discussion: false,
      },
    ],
  },
  methods: {
    openfilter() {
      filterR = this.$refs.filterRegion;
      // console.log(filterR);
      filterR.classList.add("showFilter");
      // filterR.scrollIntoView();
      window.scrollTo(top);
    },
    closefilter() {
      filterR = this.$refs.filterRegion;
      filterR.classList.remove("showFilter");
    },
  },
});
