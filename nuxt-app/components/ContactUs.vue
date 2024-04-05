<template>
  <div>
    <v-row justify="center">
      <form ref="form" style="max-width: 500px;" @submit.prevent="sendEmail">
        <p class="container">{{ $t('contact.connect') }}</p>
        <v-text-field label type="text" v-model="name" name="name" :placeholder='$t("name")'
          required></v-text-field>
        <v-text-field label type="email" v-model="email" name="email" :placeholder='$t("email")'
          required></v-text-field>
        <v-text-field label type="tel" v-model="number" name="number" :placeholder='$t("number")'
          required></v-text-field>
        <v-textarea type="message" v-model="message" name="message" :placeholder='$t("message")' rows="5" required>
        </v-textarea>

        <v-btn block variant="outlined" type="submit">{{ $t('send') }}</v-btn>
      </form>
    </v-row>
  </div>
</template>
<script>
import emailjs from "@emailjs/browser";

export default {
  name: 'contactUs',
  data: () => ({
    name:'',
    email:'',
    number:'',
    message:''
  }),

  methods: {
    sendEmail() {
        emailjs.sendForm('service_x7ngj0a', 'template_4bpbioh', this.$refs.form, {
          publicKey: "NSZEBHfiZaxwmvPVq",
        })
        .then(
          () => {
            console.log('success');
          },
          (error) => {
            console.log(error.text);
          },
        );
        this.name = '',
        this.email = '',
        this.number = '',
        this.message = ''
      },
  },
};


</script>
