import { defineStore } from "pinia";

export const useExampleStore = defineStore("ExampleStore", {
  // Define a store with a unique name and a function that returns a fresh state object (the store)
  state: () => ({ count: 0 as number, name: "Eduardo" as string }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
