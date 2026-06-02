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
            Reset Your
            <span class="text-yellow-200">Password</span>
          </h1>

          <p class="mt-5 text-lg text-white/90">
            Enter your email address and we'll send you a secure password reset link.
          </p>

          <div class="mt-10 space-y-4">
            <p>✔ Secure Password Recovery</p>
            <p>✔ Quick Email Verification</p>
            <p>✔ Easy Account Access</p>
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

            <p class="text-gray-500 mt-2">
              Password Recovery
            </p>
          </div>

          <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-800">
              Forgot Password
            </h2>

            <p class="text-gray-500 mt-2">
              Enter your email to receive a password reset link.
            </p>
          </div>

          <form
            @submit.prevent="handleForgotPassword"
            class="space-y-5"
          >
            <input
              v-model="email"
              type="email"
              placeholder="Email Address"
              class="input"
              required
            />

            <button
              :disabled="loading"
              class="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg hover:scale-[1.02] transition disabled:opacity-60"
            >
              {{
                loading
                  ? "Sending Reset Link..."
                  : "Send Reset Link"
              }}
            </button>

            <RouterLink to="/">
              <p
                class="text-center text-sm text-gray-500 mt-4"
              >
                Back to
                <span class="text-pink-500 font-semibold">
                  Login
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
import { ref } from "vue";
import { RouterLink } from "vue-router";

const email = ref("");
const loading = ref(false);
const successMessage = ref("");

const handleForgotPassword = async () => {
  loading.value = true;

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email.value,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw data;
    }

    successMessage.value =
      "Password reset link sent successfully 📧";

    email.value = "";

    setTimeout(() => {
      successMessage.value = "";
    }, 3000);
  } catch (error) {
    alert(
      error.message ||
      "Failed to send reset link."
    );
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