<template>
  <div id="app">
    <Header></Header>
    <A></A>
    <B></B>
    <C></C>
  </div>
</template>
<script>
import axios from "axios";
import Header from "@/components/Header";
import A from "@/views/A";
import B from "@/views/B";
import C from "@/views/C";
export default {
  components: {
    Header,
    A,
    B,
    C
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
