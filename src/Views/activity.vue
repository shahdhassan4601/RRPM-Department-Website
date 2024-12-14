<template>
    <div class="container my-5">
    <h1 class="mb-4">Add Activity</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" v-model="formData.title" placeholder="Enter activity title">
      </div>

      <!-- Dates and Times -->
      <div class="row g-3">
        <div class="col-md-3">
          <label for="startDate" class="form-label">Start date</label>
          <input type="date" class="form-control" id="startDate" v-model="formData.startDate">
        </div>
        <div class="col-md-3">
          <label for="endDate" class="form-label">End date</label>
          <input type="date" class="form-control" id="endDate" v-model="formData.endDate">
        </div>
        <div class="col-md-3">
          <label for="startTime" class="form-label">Start time</label>
          <input type="time" class="form-control" id="startTime" v-model="formData.startTime">
        </div>
        <div class="col-md-3">
          <label for="endTime" class="form-label">End time</label>
          <input type="time" class="form-control" id="endTime" v-model="formData.endTime">
        </div>
      </div>
      
      <!-- Location -->
      <div class="mt-3">
        <label for="location" class="form-label">Location</label>
        <input type="text" class="form-control" id="location" v-model="formData.location" placeholder="Input text">
      </div>
      
      <!-- Status and Keywords -->
      <div class="row g-3 mt-3">
        <div class="col-md-6">
          <label for="status" class="form-label">Status</label>
          <select class="form-select" id="status" v-model="formData.status">
            <option selected>Select status</option>
            <option value="Planned">Planned</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="keywords" class="form-label">Keywords</label>

          <div class="d-flex flex-wrap gap-2">
            <!-- Existing Keywords -->
            <div v-for="keyword in formData.keywords" :key="keyword" class="badge bg-primary">
              {{ keyword }}
              <button type="button" class="btn-close btn-close-white ms-1" @click="removeKeyword(keyword)"></button>
            </div>
          </div>
          <!-- Input for Adding Keywords -->
          <div class="input-group mt-2">
            <input
              type="text"
              class="form-control"
              id="keywords"
              placeholder="Add or select a keyword"
              v-model="newKeyword"
              @keyup.enter="addKeyword(newKeyword); newKeyword = ''"
            >
            <button type="button" class="btn btn-outline-primary" @click="addKeyword(newKeyword); newKeyword = ''">Add</button>
          </div>
          <!-- Dropdown for Available Keywords -->
          <select class="form-select mt-2" v-model="selectedKeyword" @change="addKeyword(selectedKeyword)">
            <option value="" disabled selected>Select a keyword</option>
            <option v-for="keyword in availableKeywords" :key="keyword" :value="keyword">
              {{ keyword }}
            </option>
          </select>

          <input type="text" class="form-control" id="keywords" v-model="formData.keywords" placeholder="Input text">

        </div>
      </div>
      
      <!-- Upload and Unit -->
      <div class="row g-3 mt-3">
        <div class="col-md-6">
          <label for="upload" class="form-label">Relevant images & videos</label>
          <input type="file" class="form-control" id="upload" multiple @change="handleFiles">
          <small class="text-muted">*Maximum 4 images</small>
        </div>
        <div class="col-md-6">
          <label for="unit" class="form-label">Unit</label>
          <select class="form-select" id="unit" v-model="formData.unit">
            <option selected>Select unit</option>
            <option value="Unit 1">Unit 1</option>
            <option value="Unit 2">Unit 2</option>
          </select>
        </div>
      </div>
      
      <!-- Summary -->
      <div class="mt-3">
        <label for="summary" class="form-label">Summary</label>
        <textarea class="form-control" id="summary" v-model="formData.summary" rows="2" placeholder="Brief description"></textarea>
      </div>
      
      <!-- Detailed Description -->
      <div class="mt-3">
        <label for="detailedDescription" class="form-label">Detailed description</label>
        <textarea class="form-control" id="detailedDescription" v-model="formData.detailedDescription" rows="4" placeholder="Enter detailed description here"></textarea>
      </div>
      
      <!-- Buttons -->
      <div class="mt-4 d-flex justify-content-between">
        <button type="button" class="btn btn-outline-danger" @click="resetForm">Reset</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </form>

    <!-- Display Added Activities -->
    <div class="mt-5">
      <h3>Added Activities</h3>
      <ul class="list-group">
        <li v-for="(activity, index) in activities" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>{{ activity.title }}</strong> ({{ activity.startDate }} - {{ activity.endDate }})
            <br>
            <small>{{ activity.summary }}</small>

            <br>
            <small><strong>Keywords:</strong> {{ activity.keywords.join(', ') }}</small>

          </div>
          <div>
            <button class="btn btn-outline-secondary btn-sm me-2" @click="editActivity(index)">Edit</button>
            <button class="btn btn-outline-danger btn-sm" @click="deleteActivity(index)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </div>


  
  </template>
  
  <script>
  export default {
    name: "Activity",
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
        keywords: [], // Keywords stored as an array
        unit: '',
        summary: '',
        detailedDescription: '',
        files: []
      },
      activities: JSON.parse(localStorage.getItem('activities')) || [],
      newKeyword: '', // For adding a new keyword
      selectedKeyword: '', // For selecting a keyword from the dropdown
      availableKeywords: ['Keyword 1', 'Keyword 2', 'Keyword 3'], // Example available keywords
      editIndex: null // Index of the activity being edited
    };
  },
  methods: {
    submitForm() {
      if (this.formData.title && this.formData.startDate && this.formData.summary) {
        if (this.editIndex !== null) {
          this.activities[this.editIndex] = { ...this.formData };
          this.editIndex = null; // Reset edit index
        } else {
          this.activities.push({ ...this.formData });
        }
        localStorage.setItem('activities', JSON.stringify(this.activities)); // Save to localStorage
        this.resetForm(); // Reset form after submission
        alert("Activity saved successfully!");
      } else {
        alert("Please fill out the required fields.");
      }
    },
    deleteActivity(index) {
      if (confirm("Are you sure you want to delete this activity?")) {
        this.activities.splice(index, 1); // Remove activity from list
        localStorage.setItem('activities', JSON.stringify(this.activities)); // Update localStorage
      }
    },
    editActivity(index) {
      this.formData = { ...this.activities[index] }; // Copy activity data to form
      this.editIndex = index; // Save the index for editing
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
        keywords: [], // Reset keywords array
        unit: '',
        summary: '',
        detailedDescription: '',
        files: []
      };
      this.newKeyword = ''; // Reset new keyword input
      this.selectedKeyword = ''; // Reset selected keyword
      this.editIndex = null; // Reset edit index
    },
    addKeyword(keyword) {
      if (keyword && !this.formData.keywords.includes(keyword)) {
        this.formData.keywords.push(keyword); // Add keyword if not already in the list
      }
    },
    removeKeyword(keyword) {
      const index = this.formData.keywords.indexOf(keyword);
      if (index !== -1) {
        this.formData.keywords.splice(index, 1); // Remove keyword
      }
    },
    handleFiles(event) {
      this.formData.files = Array.from(event.target.files);
    }
  }};

</script>
  