<template>
  <div
    class="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-100 flex items-center justify-center p-4 sm:p-6"
  >
    <div
      class="w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-pink-100 rounded-3xl shadow-2xl overflow-hidden"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <!-- LEFT SIDE -->
        <div
          class="hidden lg:flex flex-col justify-center bg-gradient-to-br from-pink-400 via-pink-500 to-rose-500 text-white p-12"
        >
          <h1 class="text-5xl font-bold leading-tight">
            Join
            <span class="text-yellow-200">Lunar Bloom</span>
          </h1>

          <p class="mt-4 text-white/90 text-lg">
            Create your account and begin your wellness journey today.
          </p>

          <div class="mt-10 space-y-4">
            <div class="flex items-center gap-3">
              <span>✔</span>
              <span>Easy Registration</span>
            </div>

            <div class="flex items-center gap-3">
              <span>✔</span>
              <span>Secure Account</span>
            </div>

            <div class="flex items-center gap-3">
              <span>✔</span>
              <span>Access Anywhere</span>
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="p-6 sm:p-8 lg:p-12">
          <!-- Mobile Logo -->
          <div class="lg:hidden text-center mb-8">
            <h1 class="text-3xl font-bold">
              <span class="text-pink-500">Lunar</span>
              <span class="text-rose-500">Bloom</span>
            </h1>

            <p class="text-gray-500 mt-2">
              Create your account to get started
            </p>
          </div>

          <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-800">
              Create Account
            </h2>

            <p class="text-gray-500 mt-2">
              Register to continue
            </p>
          </div>

          <form @submit.prevent="handleRegister" class="space-y-5">
            <!-- Name -->
            <div>
              <input
                v-model="form.name"
                type="text"
                placeholder="Full Name"
                class="input"
              />
            </div>

            <!-- Email -->
            <div>
              <input
                v-model="form.email"
                type="email"
                placeholder="Email Address"
                class="input"
              />
            </div>

            <!-- Phone -->
            <div>
              <input
                v-model="form.phone_number"
                type="text"
                placeholder="Phone Number"
                class="input"
              />
            </div>

            <!-- Password Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                v-model="form.password"
                type="password"
                placeholder="Password"
                class="input"
              />

              <input
                v-model="form.password_confirmation"
                type="password"
                placeholder="Confirm Password"
                class="input"
              />
            </div>

            <button
              :disabled="loading"
              class="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg hover:scale-[1.02] transition disabled:opacity-70"
            >
              {{ loading ? "Creating Account..." : "Create Account" }}
            </button>

            <RouterLink to="/">
              <p class="text-center text-sm text-gray-500 mt-4">
                Already have an account?
                <span class="text-pink-500 font-semibold">
                  Sign In
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
        v-if="successMessage"
        class="fixed bottom-5 right-5 bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg"
      >
        {{ successMessage }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const loading = ref(false);
const successMessage = ref("");

const form = reactive({
  name: "",
  email: "",
  phone_number: "",
  password: "",
  password_confirmation: "",
  role: "patient",
});

const handleRegister = async () => {
  loading.value = true;

  try {
    const response = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      throw data;
    }

    successMessage.value = "Registration Successful 🎉";

    localStorage.setItem("token", data.token);

    setTimeout(() => {
      router.push("/");
    }, 1500);
  } catch (error) {
    console.log(error);

    alert(error.message || "Registration Failed");
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
