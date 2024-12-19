<template>
  <div class="container my-5">
    <div class="d-flex align-items-center mb-4">
      <h1 class="me-3 mb-0">Medical Units</h1>
      <!-- زر التنقل لإضافة وحدة جديدة -->
      <router-link to="/add-UnitManager"class="btn btn-success btn-sm">Add</router-link>
    </div>

    <!-- عرض الوحدات -->
    <div v-for="(unit, index) in units" :key="index" class="card mb-4">
      <div class="card-body">
        <h5>{{ unit.name }}</h5>
        <p>Address: {{ unit.address }}</p>
        <p>Working Hours: {{ unit.hours.from }} - {{ unit.hours.to }}</p>
        
        <h6>Clinics:</h6>
        <ul>
          <li v-for="(clinic, idx) in unit.clinics" :key="idx">
            {{ clinic.name }} ({{ clinic.hours.from }} - {{ clinic.hours.to }}) - Services: {{ clinic.services }}
          </li>
        </ul>
        
        <!-- عرض الأنشطة الخاصة بالوحدة -->
        <h6>Unit activities:</h6>
        <ul>
          <li v-for="(activity, idx) in unit.activities" :key="idx">
            <!--رابط يعرض اسم النشاط ويحول إلى صفحة SingleActivity -->
            <!-- <router-link :to="{ name: 'SingleActivity', params: { id: activity.id } }">
              {{ activity.name }}
            </router-link>-->
          </li>
        </ul> 

        <!-- عرض معلومات الاتصال الخاصة بالوحدة -->
        <h6>Contact Information:</h6>
        <p v-if="unit.contactInfo">
          <strong>Mobile Number:</strong> {{ unit.contactInfo.mobile }}
        </p>
        <p v-if="unit.contactInfo">
          <strong>Location:</strong> {{ unit.contactInfo.location }}
        </p>

        <button @click="editUnit(index)"  class="btn btn-secondary btn-sm me-2">Edit</button>
        <button @click="deleteUnit(index)"  class="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MedicalUnits",
  data() {
    return {
      // محاكاة البيانات التي ستكون موجودة من الـ backend
      units: []
    }
       
  },
  created() {
    // لاحقًا عند الحصول على البيانات من الـ backend
    // سيتم استبدال البيانات المحاكاة بالبيانات الفعلية هنا
    this.loadUnits();
  },
  methods: {
    loadUnits() {
      // هذه الدالة ستكون لملء الوحدات من الـ backend
      // في الوقت الحالي يتم محاكاة البيانات
    },
    deleteUnit(index) {
      if (confirm("Are you sure you want to delete this unit?")) {
        this.units.splice(index, 1);
        this.saveUnits(); // تحديث localStorage
      }
    },
    saveUnits() {
      localStorage.setItem("units", JSON.stringify(this.units));
    },
    editUnit(index) {
      const unitToEdit = this.units[index];
      localStorage.setItem("editUnit", JSON.stringify(unitToEdit)); // تخزين بيانات الوحدة المراد تعديلها
      this.$router.push(`/edit-UnitManager/${index}`); // الانتقال مع تمرير المؤشر
    }
  }
};
</script>

<style scoped>

.activity-card {
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
}

.status-badge {
  border-radius: 12px;
  font-size: 12px;
  padding: 2px 8px;
  color: #fff;
}


.btn-success {
  background-color: #20c997 !important; /* لون أخضر فاتح */
  border-color: #20c997 !important;
}



.btn-danger {
  background-color: #dc3545 !important;
  border-color: #dc3545 !important;
}

.btn-secondary {
  background-color: #4f678d !important; /* لون أزرق */
  border-color: #4f678d !important;
}

</style>