let Vue;
export default class Kvuex {
  constructor() {}
  static install(_Vue) {
    Vue = _Vue;
  }
  static Store(option) {
    return new Store(option);
  }
}

class Store {
  constructor(option) {
    var { state, mutations, getters, actions } = option;

    this.state = new Vue({
      data: state
    });

    this.$mutations = mutations;
    // this.$getters = getters;
    this.$actions = actions;
    this.handleGetters(getters);
    Vue.prototype.$store = this;
  }

  commit = (type, args) => {
    this.$mutations[type](this.state, args);
  };
  dispatch(type, args) {
    this.$actions[type](
      {
        state: this.state,
        commit: this.commit
      },
      args
    );
  }
  handleGetters(getters) {
    this.getters = {};

    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state);
        }
      });
    });
  }
}
