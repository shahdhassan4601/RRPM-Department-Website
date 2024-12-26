<template>
    <div
        class="container d-flex justify-content-center align-items-center vh-100"
    >
        <div class="card shadow login-card">
            <div class="row no-gutters">
                <!-- Section for form -->
                <div class="col-md-6 p-4">
                    <h3 class="text-center mb-4">Sign up</h3>
                    <form @submit.prevent="handleSignUp">
                        <div class="form-group mb-3">
                            <label for="username" class="form-label"
                                >Username</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                v-model="user.username"
                                placeholder="e.g. admin1234"
                                required
                            />
                            <small v-if="usernameError" class="text-danger">{{
                                usernameError
                            }}</small>
                        </div>
                        <div class="form-group mb-4">
                            <label for="password" class="form-label"
                                >Password</label
                            >
                            <div class="input-group">
                                <input
                                    :type="showPassword ? 'text' : 'password'"
                                    class="form-control"
                                    id="password"
                                    v-model="user.password"
                                    placeholder="Enter at least 8+ characters"
                                    required
                                />
                                <button
                                    type="button"
                                    class="btn btn-outline-secondary"
                                    @click="togglePasswordVisibility"
                                >
                                    <i
                                        :class="
                                            showPassword
                                                ? 'fas fa-eye-slash'
                                                : 'fas fa-eye'
                                        "
                                    ></i>
                                </button>
                            </div>
                            <small v-if="passwordError" class="text-danger">{{
                                passwordError
                            }}</small>
                        </div>
                        <div
                            v-if="errorMessage"
                            class="alert alert-danger"
                            role="alert"
                        >
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
                            {{ loading ? "Signing up..." : "Sign up" }}
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
import { useDataStore } from "../stores/dataStore";
export default {
    name: "SignUpPage",
    data() {
        return {
            user: { username: "", password: "" },
            showPassword: false,
            loading: false,
            errorMessage: "",
            usernameError: "",
            passwordError: "",
        };
    },
    setup() {
        const dataStore = useDataStore();
        return { dataStore };
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        validateForm() {
            this.usernameError = "";
            this.passwordError = "";

            let isValid = true;

            if (!this.user.username.trim()) {
                this.usernameError = "Username is required.";
                isValid = false;
            }

            if (this.user.password.length < 8) {
                this.passwordError =
                    "Password must be at least 8 characters long.";
                isValid = false;
            }

            return isValid;
        },
        async handleSignUp() {
            if (!this.validateForm()) return;

            this.loading = true;
            this.errorMessage = "";

            try {
                await this.dataStore.signup(user);
                this.$router.push("/login");
            } catch (error) {
                this.errorMessage = "Invalid credentials, please try again.";
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
    flex: 1;
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
