var app = new Vue({
  // 標題按鈕的Vue
  el: "#linkList",
  data: {
    text: "testing",
    linkButton: [
      {
        title: "關於我",
        link: "AboutMe.html",
        style: "btn link-active",
      },
      {
        title: "找租屋",
        link: "#bottom",
        style: "btn",
      },
      {
        title: "找房子",
        link: "#bottom",
        style: "btn",
      },
      {
        title: "找土地",
        link: "#bottom",
        style: "btn",
      },
    ],
  },
});

var app = new Vue({
  // 標題按鈕的Vue
  el: "#bottom",
  data: {
    linkPressWords: "想看更多嗎?",
    Icon: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/yachin4857?mibextid=9R9pXO",
        src: "materials/icons/facebook_1384021.png",
        display: true,
      },
      {
        name: "Instagram",
        link: "",
        src: "materials/icons/instagram_1384031.png",
        display: false,
      },
      {
        name: "Youtube",
        link: "https://www.youtube.com/channel/UCj9u9U6SbGLZZRZ86q3ZEhA",
        src: "materials/icons/youtube_1384028.png",
        display: true,
      },
      {
        name: "Tiktok",
        link: "https://www.tiktok.com/@yachinchen?_d=secCgYIASAHKAESPgo85u0d3xwkHv7q7lU3fc07YeF7XZk1UNmX9PLUhtMqmlZlO3SYW70CzFjHusjY%2Bln5aKwsSvM2ElmMI6yuGgA%3D&object_id=7177655001404376069&page_open_method=scan_code&schema_type=4&sec_uid=MS4wLjABAAAAiGmyrasyY2_Aj6H50INmY2WIK8EDt-44AWjQ79zZcd7EWIeen21eS_GqhmKPXUgE&share_app_id=1180&share_author_id=7177655001404376069&share_uid=7177655001404376069&tt_from=scan_code&utm_campaign=client_scan_code&utm_medium=1&utm_source=scan_code&_r=1",
        src: "materials/icons/tik-tok_3046120.png",
        display: true,
      },
    ],
  },
});
