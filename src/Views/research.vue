<template>
  <div class="container my-5">
    <div class="d-flex align-items-center mb-4">
      <h1 class="me-3 mb-0">Scientific Research</h1>
      <router-link to="/add-research_admin" class="btn btn-primary">Add</router-link>
    </div>
    <p class="mb-4"><strong>Highlighted Topics:</strong> 
      <span class="badge bg-secondary">Drug development</span> 
      <span class="badge bg-secondary">Diabetes</span> 
      <span class="badge bg-secondary">Rare diseases</span>
    </p>
    
    <div class="row mb-4">
      <div class="col-md-6">
        <input type="text" class="form-control" v-model="searchQuery" placeholder="Search...">
      </div>
      <div class="col-md-3">
        <select class="form-select" v-model="selectedAuthor">
          <option value="">Filter by Author</option>
          <option v-for="author in uniqueAuthors" :key="author" :value="author">{{ author }}</option>
        </select>
      </div>
      <div class="col-md-3">
        <select class="form-select" v-model="selectedDate">
          <option value="">Filter by Date</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
    </div>

    <div v-for="(article, index) in filteredArticles" :key="index" class="border-bottom pb-3 mb-3">
      <h5>{{ article.title }}</h5>
      <p class="text-muted">
        Authors: {{ article.authors.join(', ') }} | Published: {{ article.publicationDate }} | Organization: {{ article.organization }}
      </p>
      <p>{{ article.content }}</p>
      <button class="btn btn-warning me-2" @click="editResearch(index)">Edit</button>
      <button class="btn btn-danger" @click="deleteResearch(index)">Delete</button>
    </div>

    <ul class="list-group mt-3">
      <li v-for="(research, index) in researches" :key="index" class="list-group-item">
        <strong>{{ research.title }}</strong>
        <br />
        <em>Authors:</em> {{ research.authors }}
        <br />
        <em>Organization:</em> {{ research.organization }}
        <br />
        <em>Publication Date:</em> {{ research.publicationDate }}
        <br />
        <em>Content:</em> {{ research.content }}
        <br />
        <em>Keywords:</em> {{ research.keywords.join(", ") }}
        <br />
        <button @click="editResearch(index)" class="btn btn-outline-secondary btn-sm me-2">Edit</button>
        <button @click="deleteResearch(index)" class="btn btn-outline-danger btn-sm">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Research",
  data() {
    return {
      searchQuery: '',
      selectedAuthor: '',
      selectedDate: '',
      researches: [], // سيتم تحميل الأبحاث من localStorage عند التهيئة
    };
  },
  created() {
    // Load researches from localStorage when the component is created
    this.loadResearches();
  },
  methods: {
    loadResearches() {
      this.researches = JSON.parse(localStorage.getItem('researches')) || [];
    },
    editResearch(index) {
      const research = this.researches[index];
      localStorage.setItem('editResearch', JSON.stringify(research));
      this.$router.push(`/edit-research_admin/${index}`);
    },
    deleteResearch(index) {
      if (confirm("Are you sure you want to delete this research?")) {
        this.researches.splice(index, 1);
        localStorage.setItem('researches', JSON.stringify(this.researches));
        // Reload the researches after deletion
        this.loadResearches();
      }
    },
  },
};
</script>
