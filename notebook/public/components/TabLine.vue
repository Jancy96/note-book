<template>
  <div class="container index">
    <div id="list-container">
      <ul class="note-list" infinite-scroll-url="/">
        <li id="note-40430612" data-note-id="40430612" class>
          <div class="content">
            <a class="title" target="_blank" href="/p/76f8522de131">《三生三世十里桃花》东凤续写三――花楼调情</a>
            <p class="abstract">花楼调情 然后东华拿了桌上的书本走出去了。女夫子邪魅一笑也跟着出去了。 凤九浅笑着把灰狼弟弟的爪子拿下去了，眼神黯然，：“老弟，姐...</p>
            <div class="meta">
              <a target="_blank" href="/u/b84d2ab3ecf9" class="nickname">轻相思</a>
              <a target="_blank" href="/p/76f8522de131#comments" class="comments">
                <i class="iconfont ic-list-comments">&#xe629;</i>
                <span class="comments-num">15</span>
              </a>
              <span class="like">
                <i class="iconfont ic-list-like">&#xe611;</i>
                <span class="like-num">17</span>
              </span>
            </div>
          </div>
        </li>
        <li id="note-40430612" data-note-id="40430612" class>
          <div class="content">
            <a class="title" target="_blank" href="/p/76f8522de131">《三生三世十里桃花》东凤续写三――花楼调情</a>
            <p class="abstract">花楼调情 然后东华拿了桌上的书本走出去了。女夫子邪魅一笑也跟着出去了。 凤九浅笑着把灰狼弟弟的爪子拿下去了，眼神黯然，：“老弟，姐...</p>
            <div class="meta">
              <a target="_blank" href="/u/b84d2ab3ecf9" class="nickname">轻相思</a>
              <a target="_blank" href="/p/76f8522de131#comments" class="comments">
                <i class="iconfont ic-list-comments">&#xe629;</i>
                <span class="comments-num">15</span>
              </a>
              <span class="like">
                <i class="iconfont ic-list-like">&#xe611;</i>
                <span class="like-num">17</span>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <a href="/" class="load-more">阅读更多</a>
  </div>
</template>

<script>
export default {
  name: "tab-line",
  props: {
    // isLogin: Boolean
  }
};
</script>

<style scoped>
.container.index {
  margin: 0 auto;
  text-align: left;
}
#list-container {
  padding-top: 30px;
  padding-right: 0;
}
.note-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.note-list li {
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  line-height: 20px;
}
.note-list .title:visited {
  color: #969696;
}
.note-list .title {
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #000;
}
.note-list .abstract {
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
}
.note-list .meta {
  padding-right: 0 !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
.note-list .meta a,
.note-list .meta a:hover {
  transition: 0.1s ease-in;
  -webkit-transition: 0.1s ease-in;
  -moz-transition: 0.1s ease-in;
  -o-transition: 0.1s ease-in;
  -ms-transition: 0.1s ease-in;
}
.note-list .meta a {
  margin-right: 10px;
  color: #b4b4b4;
}
.note-list .meta span {
  margin-right: 10px;
  color: #b4b4b4;
}
.index .main .load-more {
  width: 100%;
  border-radius: 20px;
  background-color: #a5a5a5;
}
.load-more {
  width: 100%;
  height: 40px;
  line-height: 20px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  color: #fff;
  background-color: #a5a5a5;
  display: block;
}
@font-face {
  font-family: "iconfont"; /* project id 1625496 */
  src: url("//at.alicdn.com/t/font_1625496_o5u8awqeed.eot");
  src: url("//at.alicdn.com/t/font_1625496_o5u8awqeed.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1625496_o5u8awqeed.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1625496_o5u8awqeed.woff") format("woff"),
    url("//at.alicdn.com/t/font_1625496_o5u8awqeed.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1625496_o5u8awqeed.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 12px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.ic-list-comments:hover {
  color: #000;
}
.meta .comments-num,
.meta .like-num {
  font-size: 12px;
}
.ic-list-comments,
.ic-list-like {
  margin-right: 2px;
}
.note-list .meta .nickname {
  margin-right: 20px;
}
a.nickname:hover,
a.comments:hover i,
a.comments:hover span {
  color: #787878;
}
.load-more:hover {
  color: #fff;
  background-color: #9b9b9b;
}
</style>
