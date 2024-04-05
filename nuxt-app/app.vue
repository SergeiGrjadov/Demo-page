<template>
  <link href="https://fonts.cdnfonts.com/css/public-pixel" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
  <v-app id="body">
    <v-app-bar class="appBar" color="black">
      <v-btn class="drawer" @click="drawer = !drawer">
        <v-icon icon="mdi-menu" color="yellow" style="scale: 1.5" />
      </v-btn>
      <v-toolbar-title class="appBarBtn"><v-btn>Sergei DEMO</v-btn></v-toolbar-title>
      <v-btn class="computerAppBar" v-for="link in links" :key="link" :to="link.href">
        {{ link.name }}
      </v-btn>
      <div v-for="(language, index) in languageOptions">
        <v-btn @click="changeLanguage(language.value)" :key="index + 'languageOption'" v-if="language.value !== $i18n.locale" icon>
          <span class="appBarBtn" :class="'fi fi-' + language.flag"></span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer disable-resize-watcher app color='rgba(253, 236, 67, 255)'
      v-model="drawer">
      <v-list>
        <v-list-item v-for="link in links" :key="link.name" :href="link.href">
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <NuxtPage class="ma-2"/>
      </v-container>
    </v-main>


    <v-footer style="background-color: rgba(253, 236, 67, 255); color: black;">
      <Footer />
    </v-footer>
  </v-app>
</template>


<script>
import Footer from "./components/AppFooter.vue";
import "/node_modules/flag-icons/css/flag-icons.min.css";



export default {
  name: "App",

  components: {
    Footer,
  },

  methods: {
    changeLanguage(langObj) {
      console.log()
      console.log('yes');
      console.log(this.$i18n.locale);
      console.log(JSON.stringify(this.$i18n.locale));

      this.$i18n.locale = langObj;
    }
  },
  data: () => ({
    drawer: false,
    languageOptions: [{
      title: "ET",
      value: "et",
      flag: "ee"
    },
    {
      title: "EN",
      value: "en",
      flag: "us"
    }
    ],
    links: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Snake",
        href: "/about",
      },
      {
        name: "Contact Us",
        href: "/contact",
      },
    ],
  })
};
</script>

<style>
#body {
  background-color: rgba(253, 236, 67, 255);
}

.drawer {
  display: none;
}

.appBarBtn {
  color: rgba(253, 236, 67, 255);
}
@media only screen and (max-width: 600px) {
  .computerAppBar {
    display: none;
  }

  .drawer{
    display: flex;
  }
}

</style>