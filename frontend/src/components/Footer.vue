<template>
    <footer class="py-4">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-4 text-start">
                    <h5>Quick links</h5>
                    <ul class="list-unstyled">
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
                </div>
                <div class="col-md-4 text-start">
                    <h5>Contact</h5>
                    <p>Phone: (+1) 123 456 7890</p>
                    <p>
                        Email:
                        <a
                            href="mailto:name@email.com"
                            class="text-decoration-none"
                            >name@email.com</a
                        >
                    </p>
                </div>
                <div class="col-md-4 text-start">
                    <h5>Follow us</h5>
                    <a href="#" class="me-3 text-decoration-none">Twitter</a>
                    <a href="#" class="me-3 text-decoration-none">Facebook</a>
                    <a href="#" class="me-3 text-decoration-none">LinkedIn</a>
                    <a href="#" class="text-decoration-none">YouTube</a>
                </div>
            </div>
            <hr class="my-4" />
            <p>© 2025 RRPM Department, All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
footer {
    background-color: #023047;
    color: #fff;
}

footer a {
    color: #8ecae6 !important;
}

footer a:hover {
    color: #fb0000;
}
</style>
