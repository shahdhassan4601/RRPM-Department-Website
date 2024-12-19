<template>
    <div id="app" class="container py-5">
      <h1 class="mb-4">Test Page</h1>
      <div>
        <label class="form-label">Unit Name</label>
        <input v-model="unit.name" type="text" class="form-control" placeholder="Enter unit name">
      </div>
      <div class="mt-3">
        <button @click="saveUnit" class="btn btn-primary">Save</button>
      </div>
      <div v-if="unit.name" class="mt-4">
        <h3>Saved Unit Name: {{ unit.name }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TestPage",
    data() {
      return {
        unit: {
          name: ''
        },
        units: JSON.parse(localStorage.getItem("units")) || [] // جلب الوحدات من localStorage أو إنشاء مصفوفة فارغة إذا لم توجد
      };
    },
    methods: {
      saveUnit() {
        if (this.unit.name) {
          // إضافة الوحدة الجديدة إلى القائمة
          this.units.push({ name: this.unit.name });
  
          // حفظ الوحدات في localStorage
          localStorage.setItem("units", JSON.stringify(this.units));
  
          // إعادة التوجيه إلى صفحة الوحدات
          this.$router.push("/units");
        } else {
          alert('Please enter a unit name');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* يمكنك إضافة تنسيقات هنا */
  </style>
  