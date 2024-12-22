<template>
  <div>
    <!-- إضافة الـ Navbar -->
    <Header /> 
    
    <nav>
      <router-link to="/activities"></router-link>
      <router-link to="/aboutus"></router-link>
    </nav>

    <!-- مكان عرض المحتوى الديناميكي -->
    <router-view></router-view>
    
    <!-- إضافة الـ Footer -->
    <Footer />
  </div>
</template>

<script>
// استيراد الـ Navbar و الـ Footer
import Header from './components/Navbar.vue';  
import Footer from './components/Footer.vue';  

export default {
  name: "App",
  components: {
    Header,  // تسجيل الـ Navbar كمكون في App.vue
    Footer,  // تسجيل الـ Footer كمكون في App.vue
  }
};
</script>

<style>
/* يمكنك إضافة CSS هنا إذا رغبت */
</style>