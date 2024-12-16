<template>
  <div>
    <!-- إضافة الـ Navbar -->
    <Header /> 
    
    <nav>
      <router-link to="/activity">Activity</router-link>
      <router-link to="/research">Research</router-link>
      <router-link to="/research_admin">Research_admin</router-link>
      <router-link to="/units">Units</router-link>
      
    </nav>
    <router-view></router-view> <!-- مكان عرض المحتوى الديناميكي -->
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

