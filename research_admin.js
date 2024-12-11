const app = Vue.createApp({
    data() {
      return {
        researchData: {
          title: '',
          authors: [],
          organization: '',
          publicationDate: '',
          content: ''
        },
        researches: JSON.parse(localStorage.getItem('researches')) || [],
        availableAuthors: ['John Smith', 'Jane Doe', 'Dr. Emily Brown'],
        editIndex: null
      };
    },
    methods: {
      submitResearch() {
        if (this.researchData.title && this.researchData.publicationDate) {
          if (this.editIndex !== null) {
            this.researches[this.editIndex] = { ...this.researchData };
            this.editIndex = null;
          } else {
            this.researches.push({ ...this.researchData });
          }
          localStorage.setItem('researches', JSON.stringify(this.researches));
          this.resetForm();
          alert("Research saved successfully!");
        } else {
          alert("Please fill out the required fields.");
        }
      },
      deleteResearch(index) {
        if (confirm("Are you sure you want to delete this research?")) {
          // Remove the research from the array
          this.researches.splice(index, 1);
          // Update the localStorage with the new list
          localStorage.setItem('researches', JSON.stringify(this.researches));
        }
      },
      editResearch(index) {
        this.researchData = { ...this.researches[index] };
        this.editIndex = index;
      },
      resetForm() {
        this.researchData = {
          title: '',
          authors: [],
          organization: '',
          publicationDate: '',
          content: ''
        };
        this.editIndex = null;
      }
    }
  });

  app.mount("#app");