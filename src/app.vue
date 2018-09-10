<template>
  <div>
    <div v-for="r in routers" v-show="showRouter">
      <router-link :to="r.path">{{r.name}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import routers from './routes';

  export default {
    name: 'home',
    data() {
      return {
        showRouter: true,
        routers
      }
    },
    methods: {
      watchRouter() {
        if (this.$route.path === '/') {
          this.showRouter = true;
        } else {
          this.showRouter = false;
        }
      }
    },
    mounted() {
      window.$main = this;
      this.watchRouter();
    },
    watch: {
      '$route.path'(newPath) {
        this.watchRouter();
      }
    }
  }
</script>

<style src="./icon/ali/iconfont.css"></style>

<style>
  @font-face {
    font-family: 'ali';
    src: url('./icon/ali/iconfont.ttf') format('truetype');
  }
  [class^="icon-custom-"]:before, [class*=" icon-custom-"]:before {
    font-family: 'ali';
  }
</style>
