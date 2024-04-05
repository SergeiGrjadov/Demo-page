<template>
    <v-col class="date">
      <v-row class="pa-5">
        <v-btn icon="mdi mdi-phone" class="contactBtn" variant="outlined" href="tel:58205405"></v-btn>

        <v-btn icon="mdi mdi-email-outline" class="contactBtn" variant="outlined"
          href="mail-to:sergeigrjadov645@gmail.com"></v-btn>

        <v-btn icon="mdi mdi-skype" class="contactBtn" variant="outlined"
          href="https://join.skype.com/invite/HyAdOLFbRtm6"></v-btn>

        <v-btn icon="mdi mdi-github" class="contactBtn" variant="outlined"></v-btn>
      </v-row>
    </v-col>
    <v-col class="footerButton">
      <v-row v-for="link in links" :key="link" justify="end">
        <v-btn variant="plain" text :href="link.href" class="footerButtons">
          {{ link.name }}
        </v-btn>
      </v-row>
    </v-col>
</template>


<style>
.footer {
  background-color: black;
  color: rgba(253, 236, 67, 255);
}
</style>

<script>

export default {
  data: () => ({
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
        href: "/",
      },
    ],
  }),
};
</script>
