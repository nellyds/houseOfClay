<template>
  <v-container>
    <v-app-bar
      v-if="$vuetify.breakpoint.mdAndUp"
      v-scroll="onScroll"
      :color="!isScrolling ? 'rgba(0,0,0,0)' : 'rgba(180,20,90,1)'"
      :hide-on-scroll="$vuetify.breakpoint.smAndDown"
      app
      elevate-on-scroll
    >
      <v-spacer />
      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
          class="links"
          :color="!isScrolling ? 'black' : 'white'"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          text
        >
          <span v-text="item.text" />
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    isScrolling: false,
    drawer: false
  }),
  components: {},
  watch: {
    group() {
      this.drawer = false;
    }
  },
  computed: {
    items() {
      return [
        {
          to: "/",
          text: "Home"
        },
        {
          to: "/about",
          text: "About"
        },
        {
          to: "/contact",
          text: "Contact"
        }
      ];
    }
  },
  methods: {
    onScroll() {
      this.isScrolling =
        (window.pageYOffset || document.documentElement.scrollTop || 0) > 25;
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
</style>
