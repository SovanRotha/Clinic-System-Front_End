<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-rose-100 p-4 sm:p-6"
  >
    <div
      class="w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-pink-100 shadow-2xl rounded-3xl overflow-hidden"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <!-- LEFT SIDE -->
        <div
          class="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-pink-400 via-pink-500 to-rose-500 text-white"
        >
          <h1 class="text-5xl font-bold leading-tight">
            Welcome Back to
            <span class="text-yellow-200">Lunar Bloom</span>
          </h1>

          <p class="mt-5 text-white/90 text-lg">
            Access your account and manage your wellness journey with ease.
          </p>

          <div class="mt-10 space-y-4">
            <p>✔ Secure Login</p>
            <p>✔ Fast Appointment Access</p>
            <p>✔ Personalized Dashboard</p>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="p-6 sm:p-8 md:p-10 lg:p-12">
          <!-- Mobile Header -->
          <div class="lg:hidden text-center mb-8">
            <h1 class="text-3xl font-bold">
              <span class="text-pink-500">Lunar</span>
              <span class="text-rose-500">Bloom</span>
            </h1>

            <p class="text-gray-500 mt-2">Welcome back</p>
          </div>

          <!-- Title -->
          <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-800">Login</h2>

            <p class="text-gray-500 mt-2">Sign in to continue</p>
          </div>

          <form @submit.prevent="handleLogin" class="space-y-5">
            <!-- Email -->
            <div>
              <input
                v-model="form.email"
                type="email"
                placeholder="Email Address"
                class="input"
              />
            </div>

            <!-- Password -->
            <div class="relative">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Password"
                class="input pr-12"
              />

              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500"
              >
                {{ showPassword ? "🙈" : "👁️" }}
              </button>
            </div>

            <!-- Remember Me -->
            <div
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm"
            >
              <label class="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  v-model="form.remember"
                  class="accent-pink-500"
                />
                Remember me
              </label>

              <RouterLink
                to="/forgot-password"
                class="text-pink-500 font-medium hover:text-pink-600"
              >
                Forgot Password?
              </RouterLink>
            </div>

            <!-- Login Button -->
            <button
              :disabled="loading"
              class="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg hover:scale-[1.02] transition active:scale-95 disabled:opacity-60"
            >
              {{ loading ? "Signing In..." : "Login" }}
            </button>

            <!-- Register -->
            <RouterLink to="/register">
              <p class="text-center text-sm text-gray-500 mt-5">
                Don't have an account?
                <span class="text-pink-500 font-semibold">
                  Create Account
                </span>
              </p>
            </RouterLink>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Toast -->
    <Transition
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-300"
      enter-from-class="opacity-0 translate-y-4"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="showSuccess"
        class="fixed bottom-5 right-5 bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg"
      >
        Login successful 🎉
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import api from "@/services/api";

const router = useRouter();

const loading = ref(false);
const showSuccess = ref(false);
const showPassword = ref(false);

const form = reactive({
  email: "",
  password: "",
  remember: false,
});

const handleLogin = async () => {
  if (!form.email || !form.password) {
    alert("Please enter email and password");
    return;
  }

  try {
    loading.value = true;

    const response = await api.post("/login", {
      email: form.email,
      password: form.password,
    });

    const data = response.data;

    if (!data.token || !data.user) {
      alert("Invalid email or password");
      return;
    }

    // Store authentication data
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    // Optional remember me
    if (form.remember) {
      localStorage.setItem("remember_email", form.email);
    } else {
      localStorage.removeItem("remember_email");
    }

    showSuccess.value = true;

    setTimeout(() => {
      switch (data.user.role) {
        case "admin":
          router.push("/admin/dashboard");
          break;

        case "doctor":
          router.push("/doctor/dashboard");
          break;

        case "patient":
          router.push("/patient/dashboard");
          break;

        case "receptionist":
          router.push("/receptionist/dashboard");
          break;

        default:
          router.push("/");
      }
    }, 1000);
  } catch (error) {
    console.error(error);

    if (error.response?.status === 401) {
      alert("Invalid email or password");
    } else if (error.response?.status === 422) {
      alert("Please enter a valid email and password");
    } else {
      alert(
        error.response?.data?.message || "Unable to login. Please try again.",
      );
    }
  } finally {
    loading.value = false;
  }
};
</script>
<style scoped>
.input {
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  background: white;
  font-size: 14px;
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: #f472b6;
  box-shadow: 0 0 0 4px rgba(244, 114, 182, 0.15);
}

.input::placeholder {
  color: #9ca3af;
}
</style>
