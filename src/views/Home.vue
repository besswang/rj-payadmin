<template>
  <div class="home" style="height:100%">
    <el-container style="height:100%">
      <el-header class="theme-bg-color">
        <my-head />
      </el-header>
      <el-container style="height:100%;">
        <my-side />
        <el-main>
          <!-- <NuxtChild :key="key"/> -->
          <router-view :key='key'/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// lang="ts"
// import { Component, Vue } from "vue-property-decorator";
import MySide from '@/components/MySide.vue'
import MyHead from '@/components/MyHead.vue'
// @Component({
//   components: {
//     MySide,
//     MyHead
//   }
// })
// export default class Home extends Vue {
//   get time () {
//     return this.$route.name !== undefined? this.$route.name +new Date(): this.$route
//   }
// }
export default {
  components: {
    MySide,
    MyHead
  },
  computed: {
      key() {
          return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
      }
  }
}
</script>
