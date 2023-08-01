const vueCode = `<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>`;

export default vueCode