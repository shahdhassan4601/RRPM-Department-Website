const app = Vue.createApp({
    data() {
      return {
        formData: {
          title: '',
          startDate: '',
          endDate: '',
          startTime: '',
          endTime: '',
          location: '',
          status: '',
          keywords: '',
          unit: '',
          summary: '',
          detailedDescription: '',
          files: []
        },
        activities: JSON.parse(localStorage.getItem('activities')) || [],
        editIndex: null // تتبع النشاط الجاري تعديله
      };
    },
    methods: {
      submitForm() {
        if (this.formData.title && this.formData.startDate && this.formData.summary) {
          if (this.editIndex !== null) {
            this.activities[this.editIndex] = { ...this.formData };
            this.editIndex = null; // إعادة ضبط المؤشر
          } else {
            this.activities.push({ ...this.formData });
          }
          localStorage.setItem('activities', JSON.stringify(this.activities)); // تحديث localStorage
          this.resetForm(); // إعادة تعيين النموذج بعد الإضافة
          alert("Activity saved successfully!");
        } else {
          alert("Please fill out the required fields.");
        }
      },
      deleteActivity(index) {
        if (confirm("Are you sure you want to delete this activity?")) {
          this.activities.splice(index, 1); // حذف النشاط من القائمة
          localStorage.setItem('activities', JSON.stringify(this.activities)); // تحديث localStorage
        }
      },
      editActivity(index) {
        this.formData = { ...this.activities[index] }; // نسخ بيانات النشاط إلى النموذج
        this.editIndex = index; // حفظ الفهرس للتعديل
      },
      resetForm() {
        this.formData = {
          title: '',
          startDate: '',
          endDate: '',
          startTime: '',
          endTime: '',
          location: '',
          status: '',
          keywords: '',
          unit: '',
          summary: '',
          detailedDescription: '',
          files: []
        };
        this.editIndex = null; // إعادة ضبط المؤشر
      }
    }
  });
  app.mount("#app");