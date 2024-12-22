<template>
  <div>
    <!-- General Activities Section -->
    <main class="container py-5">
      <div class="d-flex align-items-center mb-4">
        <h2 class="mb-0 me-3">General Activities</h2>
        <router-link to="/activity-admin" class="btn btn-success btn-sm">Add Activity</router-link>
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
              <h5 class="d-flex align-items-center">
                {{ activity.name }}
                <span :class="'status-badge ' + activity.statusClass" class="ms-2">{{ activity.status }}</span>
              </h5>
              <p class="mb-1">
                <i class="bi bi-calendar"></i> {{ activity.date }} | <i class="bi bi-clock"></i>
                {{ activity.time }}
              </p>
              <p class="mb-1"><i class="bi bi-geo-alt"></i> {{ activity.location }}</p>
              <p>{{ activity.description }}</p>
              <!-- Learn More Button for Each Activity -->
              <router-link :to="{ name: 'SingleActivity', params: { id: activity.id } }" class="text-decoration-none">
                Learn more
              </router-link>
            </div>
            <div class="d-flex align-items-start">
              <button class="btn btn-secondary btn-sm me-2" @click="editActivity(activity.id)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="confirmDelete(activity.id)">Delete</button>
            </div>
            <img :src="activity.image" alt="Activity Image" class="img-fluid" />
          </div>
        </div>
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
      statuses: ["Ongoing", "Completed", "Upcoming"], // Add statuses
      searchQuery: "",
      statusFilter: "",
      dateFilter: "",
      activities: [
        {
          id: 1,
          name: "Activity 1 Name",
          status: "Ongoing",
          statusClass: "status-ongoing",
          date: "2022-12-01", // Make sure this is in the correct format
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

  methods: {
    editActivity(activityId) {
      this.$router.push({ path: `/activity-admin`, query: { id: activityId } });
    },
    confirmDelete(activityId) {
      if (confirm("Are you sure you want to delete this activity?")) {
        this.activities = this.activities.filter(activity => activity.id !== activityId);
      }
    },
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

        const matchesDate = this.dateFilter
          ? activity.date === this.dateFilter
          : true;

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
