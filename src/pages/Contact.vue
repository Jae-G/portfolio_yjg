<template>
  <div
    align="center"
    justify="center"
  >
    <v-card>
      <v-container>
        <p class="text-h4">
          Contact
        </p>
        <p>
          +82 010 2957 7409 <br>
          dbswo343434@gmail.com
        </p>
        <v-form>
          <v-row justify="center">
            <v-col cols="6">
              <v-text-field
                v-model="name"
                outlined
                label="Name"
                :rules="nameRules"
              />
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col
              cols="6"
              xs="12"
            >
              <v-text-field
                v-model="email"
                outlined
                label="Email"
                :rules="emailRules"
              />
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col
              cols="6"
              xs="12"
            >
              <v-textarea
                v-model="content"
                outlined
                label="Content"
                :rules="contentRules"
              />
            </v-col>
          </v-row>
          <v-row
            justify="center"
          >
            <v-col
              cols="6"
            >
              <v-btn
                block
                color="primary"
                @click="sendEmail"
              >
                전송
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
export default {
  data : () => ({
    name: '',
    nameRules : [
      v => !!v || '이름을 입력해주세요',
    ],

    email:'',
    emailRules : [
      v => !!v || '이메일을 입력해주세요',
      v => /.+@.+\..+/.test(v) || '이메일 형식을 확인해주세요',
    ],

    content:'',
    contentRules : [
      v => !!v || '내용을 입력해주세요',

    ],
  }),
    methods: {
    sendEmail: () => {
      emailjs.sendForm('service_qdafv6j',
                       'template_olgl2ki', {from_name: this.name, from_email:this.email,cotent:this.content}, 'Jason')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

<style>

</style>
