<template>
  <div class="container mt-5">
    <h1>Scientific Research</h1>
    <form @submit.prevent="submitResearch">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input v-model="researchData.title" type="text" class="form-control" id="title" placeholder="Enter title" />
        <div v-if="titleError" class="text-danger">Title is required and must be at least 3 characters.</div>
      </div>

      <div class="mb-3">
        <label for="authors" class="form-label">Author(s)</label>
        <input v-model="researchData.authors" type="text" class="form-control" id="authors" placeholder="Enter authors separated by commas" />
      </div>

      <div class="mb-3">
        <label for="organization" class="form-label">Organization</label>
        <input v-model="researchData.organization" type="text" class="form-control" id="organization" placeholder="Enter organization name" />
        <div v-if="organizationError" class="text-danger">Organization name is required.</div>
      </div>

      <div class="mb-3">
        <label for="publication-date" class="form-label">Publication date</label>
        <input v-model="researchData.publicationDate" type="date" class="form-control" id="publication-date" />
      </div>

      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea v-model="researchData.content" class="form-control" id="content" rows="5" placeholder="Enter detailed description"></textarea>
      </div>

      <!-- Upload -->
      <div class="row g-3 mt-3">
        <div class="col-md-6">
          <label for="upload" class="form-label">Relevant Images & Videos</label>
          <input
            type="file"
            class="form-control"
            id="upload"
            multiple
            @change="handleFiles"
            accept="image/*,video/*"
          />
          <small class="text-muted">*Maximum 4 files (images or videos)</small>
          <div v-if="fileError" class="text-danger">Only images and videos are allowed!</div>
        </div>
      </div>

      <!-- Keywords Field -->
      <div class="mb-3">
        <label for="keywords" class="form-label">Keywords</label>
        <div class="d-flex flex-wrap gap-2">
          <div v-for="keyword in researchData.keywords" :key="keyword" class="badge bg-primary">
            {{ keyword }}
            <button type="button" class="btn-close btn-close-white ms-1" @click="removeKeyword(keyword)"></button>
          </div>
        </div>
        <div class="input-group mt-2">
          <input
            type="text"
            class="form-control"
            id="keywords"
            placeholder="Add a keyword"
            v-model="newKeyword"
            @keyup.enter="addKeyword(newKeyword); newKeyword = ''"
          />
          <button type="button" class="btn btn-outline-primary" @click="addKeyword(newKeyword); newKeyword = ''">Add</button>
        </div>
      </div>

      <!-- Buttons -->
      <div class="mt-4 d-flex justify-content-between">
        <button type="button" class="btn btn-outline-danger" @click="resetForm">Reset</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </form>
  </div>
</template> 

<script>
export default {
  name: "ResearchAdmin",
  data() {
    return {
      researchData: {
        title: "",
        authors: "",
        organization: "",
        publicationDate: "",
        content: "",
        keywords: []
      },
      researches: JSON.parse(localStorage.getItem("researches")) || [],
      newKeyword: "",
      titleError: false,
      organizationError: false,
      fileError: false,
      editIndex: null
    };
  },

  created() {
    // الحصول على index من الـ route
    const index = this.$route.params.index;

    // التحقق إذا كان الـ index موجودا
    if (index !== undefined && this.researches[index]) {
      this.researchData = { ...this.researches[index] };
      this.editIndex = index;
    }
  },

  methods: {
    submitResearch() {
      // Validate title
      this.titleError = this.researchData.title.length < 3;
      this.organizationError = !this.researchData.organization;

      if (this.researchData.title && this.researchData.publicationDate && !this.titleError && !this.organizationError) {
        if (this.editIndex !== null) {
          this.researches[this.editIndex] = { ...this.researchData };
          this.editIndex = null;
        } else {
          this.researches.push({ ...this.researchData });
        }
        localStorage.setItem("researches", JSON.stringify(this.researches));
        this.resetForm();
        alert("Research saved successfully!");

        // Redirect to the Research page after saving
        this.$router.push("/research");
      } else {
        alert("Please fill out the required fields.");
      }
    },
    
    resetForm() {
      this.researchData = {
        title: "",
        authors: "",
        organization: "",
        publicationDate: "",
        content: "",
        keywords: []
      };
      this.editIndex = null;
      this.titleError = false;
      this.organizationError = false;
      this.fileError = false;
    },
    addKeyword(newKeyword) {
      if (newKeyword && !this.researchData.keywords.includes(newKeyword)) {
        this.researchData.keywords.push(newKeyword);
      }
    },
    removeKeyword(keyword) {
      const index = this.researchData.keywords.indexOf(keyword);
      if (index > -1) {
        this.researchData.keywords.splice(index, 1);
      }
    },
    handleFiles(event) {
      const files = Array.from(event.target.files);
      const validFiles = files.filter(
        file => file.type.startsWith("image/") || file.type.startsWith("video/") 
      );

      if (validFiles.length !== files.length) {
        this.fileError = true;
      } else {
        this.fileError = false;
      }

      // Further processing for valid files if needed
      console.log("Valid files:", validFiles);
    }
  }
};
</script>
