<template>
    <header class="py-3">
        <div
            class="container d-flex justify-content-between align-items-center"
        >
            <div class="d-flex align-items-center">
                <button
                    class="navbar-toggler d-md-none me-2"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasMenu"
                    aria-controls="offcanvasMenu"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon" style="color: #8ecae6"
                        >&#9776;</span
                    >
                </button>
                <h1 class="h4 mb-0">
                    <router-link to="/" class="text-decoration-none text-white"
                        >RRPM Department</router-link
                    >
                </h1>
            </div>
            <nav class="d-none d-md-block">
                <ul class="nav">
                    <li class="nav-item">
                        <router-link to="/aboutus" class="nav-link"
                            >About us</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/units" class="nav-link"
                            >Units</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/activities" class="nav-link"
                            >Activities</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/research" class="nav-link"
                            >Scientific Research</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact-us" class="nav-link"
                            >Contact us</router-link
                        >
                    </li>
                </ul>
            </nav>
            <LangSwitcher
                :currentLang="selectedLang"
                @change-language="changeLanguage"
            />
        </div>

        <!-- Offcanvas Menu for Mobile -->
        <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasMenu"
            aria-labelledby="offcanvasMenuLabel"
        >
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div class="offcanvas-body">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <router-link to="/aboutus" class="nav-link"
                            >About us</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/units" class="nav-link"
                            >Units</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/activities" class="nav-link"
                            >Activities</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/research" class="nav-link"
                            >Scientific Research</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link"
                            >Contact us</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style scoped>
/* Custom Styles */
header {
    background-color: #023047;
    color: #8ecae6;
}

.nav-link {
    color: #8ecae6 !important;
}

.text-white {
    color: #ffffff !important;
}

.navbar-toggler {
    border: none;
    background: transparent;
}

.offcanvas {
    background-color: #023047;
    color: #8ecae6;
}

.offcanvas .nav-link {
    color: #8ecae6 !important;
}

@media (max-width: 768px) {
    header {
        text-align: center;
        padding: 1rem;
    }
    .container {
        flex-wrap: nowrap;
    }
    .navbar-toggler {
        margin-right: 0.5rem;
    }
    nav {
        display: none;
    }
    select {
        margin-left: auto;
    }
}
</style>
