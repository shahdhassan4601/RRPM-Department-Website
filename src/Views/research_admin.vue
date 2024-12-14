<template>
    <div class="container mt-5">
    <h1>Scientific Research </h1>
    <form @submit.prevent="submitResearch">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input v-model="researchData.title" type="text" class="form-control" id="title" placeholder="Enter title">
      </div>

      <div class="mb-3">
        <label for="authors" class="form-label">Author(s)</label>
        <select v-model="researchData.authors" class="form-select" id="authors" multiple>
          <option v-for="author in availableAuthors" :key="author" :value="author">{{ author }}</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="organization" class="form-label">Organization</label>
        <input v-model="researchData.organization" type="text" class="form-control" id="organization" placeholder="Enter organization name">
      </div>

      <div class="mb-3">
        <label for="publication-date" class="form-label">Publication date</label>
        <input v-model="researchData.publicationDate" type="date" class="form-control" id="publication-date">
      </div>

      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea v-model="researchData.content" class="form-control" id="content" rows="5" placeholder="Enter detailed description"></textarea>
      </div>


       <!-- Upload -->
       <div class="row g-3 mt-3">
        <div class="col-md-6">
          <label for="upload" class="form-label">Relevant images & videos</label>
          <input type="file" class="form-control" id="upload" multiple @change="handleFiles">
          <small class="text-muted">*Maximum 4 images</small>
      </div>
      </div>

    <!-- Keywords Field -->
      <div class="mb-3">
        <label for="keywords" class="form-label">Keywords</label>
        <div class="d-flex flex-wrap gap-2">
          <!-- Existing Keywords -->
          <div v-for="keyword in researchData.keywords" :key="keyword" class="badge bg-primary">
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
      </div>

      <!-- Buttons -->
      <div class="mt-4 d-flex justify-content-between">
        <button type="button" class="btn btn-outline-danger" @click="resetForm">Reset</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>

    </form>

    <h2 class="mt-5">Added Researches</h2>
    <ul class="list-group mt-3">
      <li v-for="(research, index) in researches" :key="index" class="list-group-item">
        <strong>{{ research.title }}</strong>
        <br>
        <em>Authors:</em> {{ research.authors.join(', ') }}
        <br>
        <em>Organization:</em> {{ research.organization }}
        <br>
        <em>Publication Date:</em> {{ research.publicationDate }}
        <br>
        <em>Content:</em> {{ research.content }}
        <br>
        <em>Keywords:</em> {{ research.keywords.join(', ') }} <!-- Display keywords here -->
        <br>

        <button @click="editResearch(index)" class="btn btn-outline-secondary btn-sm me-2">Edit</button>
        <button @click="deleteResearch(index)" class="btn btn-outline-danger btn-sm">Delete</button>
      </li>
    </ul>
  </div>


    
</template>

<script>
export default {
  name: "Research_admin",

data() {
    return {
      researchData: {
        title: '',
        authors: [],
        organization: '',
        publicationDate: '',
        content: '',
        keywords: [] // الحقل الخاص بالكلمات المفتاحية
      },
      researches: JSON.parse(localStorage.getItem('researches')) || [],
      availableAuthors: ['John Smith', 'Jane Doe', 'Dr. Emily Brown'],
      availableKeywords: ['AI', 'Machine Learning', 'Data Science'], // الكلمات المتاحة للاختيار
      newKeyword: '', // لتخزين الكلمة الجديدة عند الإدخال
      selectedKeyword: '', // لتخزين الكلمة المحددة من القائمة المنسدلة
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
        this.researches.splice(index, 1);
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
        content: '',
        keywords: []
      };
      this.editIndex = null;
    },
    addKeyword(newKeyword) {
      if (newKeyword && !this.researchData.keywords.includes(newKeyword)) {
        this.researchData.keywords.push(newKeyword);
      }
      if (!this.availableKeywords.includes(newKeyword)) {
        this.availableKeywords.push(newKeyword);
      }
    },
    removeKeyword(keyword) {
      const index = this.researchData.keywords.indexOf(keyword);
      if (index > -1) {
        this.researchData.keywords.splice(index, 1);
      }
    }
  }};



</script>