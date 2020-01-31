import Vue from "vue";
class VuerRouter {
  constructor(option) {
    this.$options = option;
    this.routerMap = {};
    this.app = new Vue({
      data: {
        current: "/"
      }
    });
  }
  init() {
    this.bindEvents();
    this.createRouteMap();
    this.initComponent();
  }
  bindEvents() {
    // 监听load事件
    window.addEventListener("load", this.onHashChange.bind(this), false);
    // 监听hashchange 事件
    window.addEventListener("hashchange", this.onHashChange.bind(this), false);
  }
  onHashChange() {
    this.app.current = window.location.hash.slice(1) || "/";
  }
  createRouteMap() {
    this.$options.routes.forEach(({ path, component }) => {
      this.routerMap[path] = component;
    });
  }
  initComponent() {
    var that = this;
    // 实现router-link 组件
    Vue.component("router-link", {
      props: {
        to: String
      },
      render(h) {
        return h("a", { attrs: { href: "#" + this.to } }, [
          this.$slots.default
        ]);
      }
    });
    // 实现router-view 组件
    Vue.component("router-view", {
      props: {
        to: String
      },
      render(h) {
        var comp = that.routerMap[that.app.current];
        return h(comp);
      }
    });
  }

  static install(Vue) {
    Vue.mixin({
      beforeCreate() {
        // this 是vue实例
        if (this.$options.router) {
          Vue.prototype.$router = this.$options.router;
          this.$options.router.init();
        }
      }
    });
  }
}

export default VuerRouter;
