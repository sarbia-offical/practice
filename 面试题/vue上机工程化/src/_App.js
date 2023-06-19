export default {
  template: `<div>    <h1>{{ count + 1 }}</h1>    <h1>{{ count + 2 }}</h1>    <h2>{{ count }}</h2>    <button @click="plus(1)">+</button>    <button @click="sub(1)">-</button>    <button @click="add100">ADD 100</button></div>`,
  name: "APP",
  data() {
    return { count: 0 };
  },
  methods: {
    plus(num) {
      this.count += num;
    },
    sub(num) {
      this.count -= num;
    },
  },
};
