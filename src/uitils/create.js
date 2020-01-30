import Vue from "vue";

export default function create(Component, props) {
  const vm = new Vue({
    render(h) {
      return h(Component, {
        props
      });
    }
  }).$mount();
  // 手动挂载
  document.body.appendChild(vm.$el);

  var comp = vm.$children[0];
  comp.remove = function() {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };

  return comp;
}
