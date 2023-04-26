<template>
  <div id="app">
    <!-- <v-btn @click="store.increment"> {{ store.count }} </v-btn>
    <span>{{ store.doubleCount }}</span> -->
    <!-- <v-btn> {{ useExampleStore }} </v-btn> -->
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
          color="secondary"
        >
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item
              prepend-icon="mdi-home-city"
              title="Home"
              value="home"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-account"
              title="My Account"
              value="account"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-account-group-outline"
              title="Users"
              value="users"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
    <div class="d-flex">
      <h1>pruebaaa</h1>
      <v-icon icon="mdi-home" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useExampleStore } from "./stores/exampleStore";

export default defineComponent({
  data() {
    return {
      /* count: 0 as number, */
      drawer: true as boolean,
      rail: true as boolean,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ] as { title: string; icon: string }[],
    };
  },
  setup() {
    const store = useExampleStore();
    return {
      store,
    };
  },
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
