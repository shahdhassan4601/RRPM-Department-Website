Vue.component('Header', {
    template: `
      <!-- Header Section -->
    <header class="py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="h4 mb-0"><a href="home.html" class="text-decoration-none">RRPM Department</a></h1>
        <nav>
          <ul class="nav">
            <li class="nav-item"><a href="aboutus.html" class="nav-link">About us</a></li>
            <li class="nav-item"><a href="Units.html" class="nav-link">Units</a></li>
            <li class="nav-item"><a href="genact.html" class="nav-link">Activities</a></li>
            <li class="nav-item"><a href="research.html" class="nav-link">Scientific Research</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link">Contact us</a></li>
          </ul>
        </nav>
        <select class="form-select form-select-sm w-auto">
          <option>English</option>
          <option>Arabic</option>
        </select>
      </div>
    </header>
    `,
  });