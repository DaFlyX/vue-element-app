<template>
<el-container>
  <el-footer>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <i class="el-icon-video-camera"></i>
        <p>电影</p>
      </el-menu-item>
      <el-menu-item index="2" icon="el-icon-house">
        <i class="el-icon-house"></i>
        <p>影院</p>
      </el-menu-item>
      <el-menu-item index="3" icon="el-icon-user-solid">
        <i class="el-icon-user-solid"></i>
        <p>我的</p>
      </el-menu-item>
    </el-menu>
  </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
</style>
