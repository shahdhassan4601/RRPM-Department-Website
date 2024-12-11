const app = Vue.createApp({
    data() {
      return {
        searchQuery: '',
        selectedAuthor: '',
        selectedDate: '',
        researches: JSON.parse(localStorage.getItem('researches')) || []  // Fetch researches from localStorage
      };
    },
    computed: {
      uniqueAuthors() {
        const authorsSet = new Set();
        this.researches.forEach(research => {
          research.authors.forEach(author => authorsSet.add(author));
        });
        return [...authorsSet];
      },
      filteredArticles() {
        return this.researches.filter(research => {
          const matchesSearch = research.title.toLowerCase().includes(this.searchQuery.toLowerCase());
          const matchesAuthor = this.selectedAuthor ? research.authors.includes(this.selectedAuthor) : true;
          let matchesDate = true;
          if (this.selectedDate === 'Newest') {
            matchesDate = new Date(research.publicationDate) >= new Date();
          } else if (this.selectedDate === 'Oldest') {
            matchesDate = new Date(research.publicationDate) <= new Date();
          }
          return matchesSearch && matchesAuthor && matchesDate;
        });
      },
    }
  });

  app.mount("#app");