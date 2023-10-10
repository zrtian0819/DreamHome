var app = new Vue({
    // 標題按鈕的Vue
    el: '#linkList',
    data:{
      text:'testing',
      linkButton:
      [
        {
            title:'找租屋',
            link:'#bottom'
        },
        {
            title:'找房子',
            link:'#bottom'
        },
        {
            title:'找土地',
            link:'#bottom'
        },
        {
            title:'關於我',
            link:'contact_me.html'
        }
      ],

    }
  })



  var app = new Vue({
    // 標題按鈕的Vue
    el: '#bottom',
    data:{
      linkPressWords:'想看更多?',
      Icon:
      [
        {
          name:'Facebook',
          link:'https://www.facebook.com/groups/330793587320368',
          src:'materials/icons/facebook_1384021.png',
          display:true
        },
        {
          name:'Instagram',
          link:'',
          src:'materials/icons/instagram_1384031.png',
          display:false
        },
        {
          name:'Youtube',
          link:'https://www.youtube.com/channel/UCj9u9U6SbGLZZRZ86q3ZEhA',
          src:'materials/icons/youtube_1384028.png',
          display:true
        },
        {
          name:'Tiktok',
          link:'https://vt.tiktok.com/ZSNYAyfW3/',
          src:'materials/icons/tik-tok_3046120.png',
          display:true
        },
      ]

    }
  })

