<template>
  <div>
    
    <router-link to="/">Go to Sign In</router-link> |
<router-link to="/unit-manager">Go to Unit Manager</router-link> |
<router-link to="/contact-us">Go to Contact Us</router-link>
    
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
