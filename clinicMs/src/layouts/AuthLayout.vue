<template>
  <div
    class="min-h-screen bg-linear-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4"
  >
    <div
      class="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2"
    >
      <!-- Left Side -->
      <div
        class="hidden lg:flex flex-col justify-center bg-linear-to-br from-blue-600 to-teal-500 text-white p-12"
      >
        <h1 class="text-5xl font-bold mb-4">CareConnect</h1>

        <p class="text-lg opacity-90">Modern Clinic Management System</p>

        <img
          src="https://illustrations.popsy.co/blue/medical-checkup.svg"
          class="mt-10 w-full"
        />
      </div>

      <!-- Right Side -->
      <div class="p-8 md:p-12">
        <router-view />
      </div>
    </div>
  </div>
</template>
