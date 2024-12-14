<template>
  <div>
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

export default {
  name: "App",
};
</script>

<style>
/* يمكنك إضافة CSS هنا إذا رغبت */
</style>

