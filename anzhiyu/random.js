var posts=["2025/08/13/我的第一篇文章/","2025/08/11/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };