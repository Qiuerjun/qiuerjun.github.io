var posts=["2025/08/11/hello-world/","2025/09/27/“我的大学生活初期”/","2025/08/13/我的第一篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };