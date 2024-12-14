<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card shadow login-card">
        <div class="row no-gutters">
          <!-- Section for form -->
          <div class="col-md-6 p-4">
            <h3 class="text-center mb-4">Sign in</h3>
            <form>
              <div class="form-group mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="e.g. admin1234"
                />
              </div>
              <div class="form-group mb-4">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter at least 8+ characters"
                />
              </div>
              <button type="submit" class="btn btn-dark w-100">Sign in</button>
            </form>
          </div>
  
          <!-- Section for image -->
          <div class="col-md-6 d-flex justify-content-center align-items-center bg-light">
            <img
             src="/login.png"
            alt="Login Illustration"
             class="img-fluid rounded"
             style="max-height: 250px;"
                 />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginPage",
  };
  </script>
  
  <style scoped>
  /* General Card Styling */
  .login-card {
    border: none;
    border-radius: 15px;
    max-width: 800px;
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
  
  .image-placeholder {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  