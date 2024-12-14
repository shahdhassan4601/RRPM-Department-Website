<template>
  <div>
    <!-- إضافة الـ Navbar -->
    <Navbar /> 
    
    <nav>
      <router-link to="/activity">activity</router-link>
      <router-link to="/research"></router-link>
      <router-link to="/research_admin">research_admin</router-link>
      <router-link to="/units"></router-link>
    </nav>

    <!-- مكان عرض المحتوى الديناميكي -->
    <router-view></router-view>
    
    <!-- إضافة الـ Footer -->
    <Footer />
  </div>
</template>

<script>
// استيراد الـ Navbar و الـ Footer
import Navbar from './components/Navbar.vue';  
import Footer from './components/Footer.vue';  

export default {
  name: "App",
  components: {
    Navbar,  // تسجيل الـ Navbar كمكون في App.vue
    Footer,  // تسجيل الـ Footer كمكون في App.vue
  }
};
</script>

<style>
/* يمكنك إضافة CSS هنا إذا رغبت */
</style>
