<template>
  <div class="header">
    <div class="block">
      <span class="demonstration">A的颜色</span>
      <el-color-picker v-model="color1"></el-color-picker>
      <span class="demonstration">B的颜色</span>
      <el-color-picker v-model="color2"></el-color-picker>
      <span class="demonstration">C的颜色</span>
      <el-color-picker v-model="color3"></el-color-picker>
      <button @click="changeThemeColor">确定更改颜色</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      color1: null,
      color2: null,
      color3: null
    };
  },
  methods: {
    changeThemeColor() {
      let styles = "";
      // 异步获取默认css文件
      axios.get("css/theme.css").then(res => {
        // 定义颜色与关键字的映射
        const colorMap = {
          "#FF0000": "themeColor",
          "#00FF00": "BBBBB",
          "#0000FF": "CCCCC"
        };
        styles = res.data; // 异步获取的主题css文件
        // 将colorMap里面的符合的颜色替换成 themeColor 关键字
        Object.keys(colorMap).forEach(key => {
          const value = colorMap[key];
          styles = styles.replace(new RegExp(key, "ig"), value);
        });
        this.styles = styles;
        this.changeSkin(styles);
        console.log(styles);
      });
    },
    changeSkin(originalStyle) {
      let selectObj = {
        themeColor: this.color1,
        BBBBB: this.color2,
        CCCCC: this.color3
      };
      let oldEl = document.getElementById("theme-style");
      Object.keys(selectObj).forEach(key => {
        originalStyle = originalStyle.replace(
          new RegExp(key, "ig"),
          selectObj[key]
        );
      });
      const style = document.createElement("style");
      style.innerText = originalStyle;
      style.id = "theme-style";
      oldEl
        ? document.head.replaceChild(style, oldEl)
        : document.head.appendChild(style); // 将style写入页面
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.header {
  height: 56px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.7);
}
</style>
