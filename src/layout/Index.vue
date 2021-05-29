<template>
  <v-app>
    <Header />
    <v-main>
      <Banner />
      <v-container>
        <Profile />
        <Portfolio />
      </v-container>
    </v-main>
    <Contact />
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/layout/Header'
import Banner from '@/pages/Banner'
import Profile from '@/pages/Profile'
import Portfolio from '@/pages/Portfolio'
import Contact from '@/pages/Contact'
import Footer from '@/components/layout/Footer'

export default {
  components : {
    Header,Footer,Profile,
    Portfolio,Banner,Contact
  }
}
</script>

<style>

</style>
