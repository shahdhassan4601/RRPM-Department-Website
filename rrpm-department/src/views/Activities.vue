<template>
    <div>
      <!-- General Activities Section -->
      <main class="container py-5">
        <h2 class="mb-4">General Activities</h2>
        <div class="mb-3">
          <span class="me-2">Activities categories:</span>
          <button
            v-for="category in categories"
            :key="category"
            class="btn btn-outline-secondary btn-sm"
          >
            {{ category }}
          </button>
        </div>
        <div class="input-group mb-4">
          <input type="text" class="form-control" placeholder="Search..." v-model="searchQuery" />
        </div>
        <div class="row g-4">
          <!-- Filter by Status -->
          <div class="col-12">
            <label for="statusFilter" class="btn btn-outline-secondary">Filter by Status</label>
            <select id="statusFilter" v-model="statusFilter" class="form-select form-select-sm w-auto">
              <option value="">All</option>
              <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
            </select>
          </div>
  
          <!-- Filter by Date -->
          <div class="col-12">
            <label for="dateFilter" class="btn btn-outline-secondary">Filter by Date</label>
            <input type="date" id="dateFilter" v-model="dateFilter" class="form-control form-control-sm" />
          </div>
  
          <div class="col-12" v-for="activity in filteredActivities" :key="activity.id">
            <div class="activity-card d-flex justify-content-between">
              <div>
                <h5>
                  {{ activity.name }}
                  <span :class="'status-badge ' + activity.statusClass">{{ activity.status }}</span>
                </h5>
                <p class="mb-1">
                  <i class="bi bi-calendar"></i> {{ activity.date }} | <i class="bi bi-clock"></i>
                  {{ activity.time }}
                </p>
                <p class="mb-1"><i class="bi bi-geo-alt"></i> {{ activity.location }}</p>
                <p>{{ activity.description }}</p>
                <a href="#" class="text-decoration-none">Learn more</a>
              </div>
              <img :src="activity.image" alt="Activity Image" class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <button class="btn btn-outline-secondary">See more articles</button>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "GeneralActivities",
    data() {
      return {
        categories: ["Consultation", "Vaccination", "Check-ups"],
        searchQuery: "",
        statusFilter: "",
        dateFilter: "",
        activities: [
          {
            id: 1,
            name: "Activity 1 Name",
            status: "Ongoing",
            statusClass: "status-ongoing",
            date: "2022-12-01",
            time: "10:00 - 11:00 AM",
            location: "Room 02",
            description: "Consequat magna nostrud culpa ad amet velit officia sunt consectetur officia adipisicing.",
            image: "https://via.placeholder.com/100",
          },
          {
            id: 2,
            name: "Activity 2 Name",
            status: "Completed",
            statusClass: "status-completed",
            date: "2022-12-01",
            time: "10:00 - 11:00 AM",
            location: "Room 02",
            description: "Consequat magna nostrud culpa ad amet velit officia sunt consectetur officia adipisicing.",
            image: "https://via.placeholder.com/100",
          },
          {
            id: 3,
            name: "Activity 3 Name",
            status: "Upcoming",
            statusClass: "status-upcoming",
            date: "2022-12-01",
            time: "10:00 - 11:00 AM",
            location: "Room 02",
            description: "Consequat magna nostrud culpa ad amet velit officia sunt consectetur officia adipisicing.",
            image: "https://via.placeholder.com/100",
          },
        ],
      };
    },
    computed: {
      filteredActivities() {
        return this.activities.filter((activity) => {
          const matchesQuery = activity.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
          const matchesStatus = this.statusFilter
            ? activity.status === this.statusFilter
            : true;
          const matchesDate = this.dateFilter ? activity.date === this.dateFilter : true;
  
          return matchesQuery && matchesStatus && matchesDate;
        });
      },
    },
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
  
  .status-ongoing {
    background-color: #fd9e02;
  }
  
  .status-completed {
    background-color: #126782;
  }
  
  .status-upcoming {
    background-color: #219ebc;
  }
  </style>
  