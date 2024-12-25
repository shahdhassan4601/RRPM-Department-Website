<template>
    <div
      class="container d-flex justify-content-center align-items-center vh-100"
    >
      <div class="card shadow login-card">
        <div class="row no-gutters">
          <!-- Section for form -->
          <div class="col-md-6 p-4">
            <h3 class="text-center mb-4">Sign in</h3>
            <form @submit.prevent="handleLogin">
              <div class="form-group mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  v-model="username"
                  placeholder="e.g. admin1234"
                  required
                />
              </div>
              <div class="form-group mb-4">
                <label for="password" class="form-label">Password</label>
                <div class="input-group">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control"
                    id="password"
                    v-model="password"
                    placeholder="Enter at least 8+ characters"
                    required
                  />
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="togglePasswordVisibility"
                  >
                    <i
                      :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                    ></i>
                  </button>
                </div>
              </div>
              <div v-if="errorMessage" class="alert alert-danger" role="alert">
                {{ errorMessage }}
              </div>
              <button
                type="submit"
                class="btn btn-dark w-100"
                :disabled="loading"
              >
                <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                {{ loading ? "Signing in..." : "Sign in" }}
              </button>
            </form>
          </div>
  
          <!-- Section for image -->
          <div
            class="col-md-6 d-flex justify-content-center align-items-center bg-light"
          >
            <img
              src="/login.png"
              alt="Login Illustration"
              class="img-fluid rounded"
              style="max-height: 200px"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginPage",
    data() {
      return {
        username: "",
        password: "",
        showPassword: false,
        loading: false,
        errorMessage: "",
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      async handleLogin() {
        this.loading = true;
        this.errorMessage = "";
  
        try {
          const response = await fetch(
            "https://your-api-url.com/api/auth/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: this.username,
                password: this.password,
              }),
            }
          );
  
          if (!response.ok) {
            throw new Error("Invalid username or password");
          }
  
          const data = await response.json();
  
          // Save the token and user info to localStorage/sessionStorage
          localStorage.setItem("authToken", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
  
          // Redirect to a protected route
          this.$router.push("/dashboard");
        } catch (error) {
          this.errorMessage = error.message;
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  <style scoped>
  /* General Card Styling */
  .login-card {
    border: none;
    border-radius: 15px;
    max-width: 600px;
    width: 100%;
  }
  
  .form-control {
    border-radius: 5px;
    height: 45px;
    font-size: 0.9rem;
  }
  
  .btn {
    height: 45px;
    font-size: 1rem;
  }
  
  .bg-light {
    background-color: #f8f9fa !important;
  }
  
  .input-group {
    display: flex;
    align-items: center;
  }
  
  .input-group .form-control {
    border-radius: 5px 0 0 5px;
    height: 45px;
    flex: 1; /* لضمان تمدد الحقل مع المساحة المتاحة */
  }
  
  .btn-toggle-password {
    background-color: #ffa500;
    border: none;
    border-radius: 0 5px 5px 0;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    cursor: pointer;
  }
  
  .btn-toggle-password i {
    color: #fff;
    font-size: 1.2rem;
  }
  
  .btn-toggle-password:hover {
    background-color: #ff8800;
  }
  
  /* Media Query for Mobile Responsiveness */
  @media (max-width: 768px) {
    .login-card {
      max-width: 100%;
      border-radius: 10px;
      padding: 10px;
    }
  
    .row.no-gutters {
      flex-direction: column;
    }
  
    .col-md-6 {
      max-width: 100%;
      width: 100%;
    }
  
    .bg-light {
      padding: 20px;
    }
  
    img {
      max-height: 150px;
      width: auto;
    }
  
    h3 {
      font-size: 1.5rem;
    }
  
    .form-control {
      font-size: 0.8rem;
      height: 40px;
    }
  
    .btn {
      font-size: 0.9rem;
      height: 40px;
    }
  
    .btn-toggle-password {
      height: 40px;
      padding: 0 10px;
    }
  
    .btn-toggle-password i {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 576px) {
    .login-card {
      padding: 15px;
    }
  
    img {
      max-height: 120px;
    }
  
    h3 {
      font-size: 1.2rem;
    }
  
    .form-control {
      font-size: 0.75rem;
      height: 35px;
    }
  
    .btn {
      font-size: 0.8rem;
      height: 35px;
    }
  
    .btn-toggle-password {
      height: 35px;
      padding: 0 8px;
    }
  
    .btn-toggle-password i {
      font-size: 0.9rem;
    }
  }
  </style>
  