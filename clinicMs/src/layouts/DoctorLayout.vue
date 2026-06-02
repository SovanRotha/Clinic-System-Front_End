<template>
  <div class="min-h-screen bg-[#f8f5f6] flex">

    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-pink-100">

      <div class="p-8">
        <img
          src="https://i.pinimg.com/1200x/4c/c7/00/4cc70089ba10eebd40fb405b8598cdeb.jpg"
          class="w-24 h-24 rounded-2xl object-cover mb-4"
        >

        <h1 class="font-black text-3xl leading-none">
          <span class="text-pink-300">LUNAR</span><br>
          <span class="text-yellow-300">BLOOM</span>
        </h1>
      </div>

      <div class="px-5">

        <button
          class="w-full bg-pink-200 hover:bg-pink-300 transition text-white py-3 rounded-full font-semibold mb-10"
        >
          DOCTOR
        </button>

        <!-- MENU -->
        <ul class="space-y-4">

          <RouterLink to="/doctor/dashboard" class="menu-item">
            <LayoutDashboard class="w-5 h-5" />
            Dashboard
          </RouterLink>

          <RouterLink to="/doctor/mypatients" class="menu-item">
            <User class="w-5 h-5" />
            Patient
          </RouterLink>

          <RouterLink to="/doctor/consultations" class="menu-item">
            <CalendarDays class="w-5 h-5" />
            Consultations
          </RouterLink>

          <RouterLink to="/doctor/prescriptions" class="menu-item">
            <Pill class="w-5 h-5" />
            Prescriptions
          </RouterLink>

          <RouterLink to="/doctor/medical-records" class="menu-item">
            <FileText class="w-5 h-5" />
            Medical History
          </RouterLink>

        </ul>

        <!-- BOTTOM MENU -->
        <ul class="mt-10 border-t pt-6 space-y-4">

          <RouterLink to="/doctor/add-new-consultation">
          <li class="menu-item">
            <CreditCard class="w-5 h-5" />
            New Consultation
          </li>
          </RouterLink>

          <RouterLink to="/doctor/settings">
          <li class="menu-item">
            <Settings class="w-5 h-5" />
            Settings
          </li>
          </RouterLink>

          <RouterLink to="/">
          <li class="menu-item text-red-500 hover:text-red-600">
            <LogOut class="w-5 h-5" />
            Log Out
          </li>
          </RouterLink>

        </ul>

      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1">

      <!-- Top Bar -->
      <div class="flex justify-between items-center p-6">

        <!-- Search -->
        <div class="relative w-[450px]">
          <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search Here..."
            class="w-full bg-white rounded-xl pl-11 pr-4 py-3 shadow-sm outline-none
                   border border-gray-100 focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition"
          />
        </div>

        <!-- Right Icons -->
        <div class="flex items-center gap-4">

          <button class="w-11 h-11 bg-gray-100 hover:bg-pink-100 rounded-xl flex items-center justify-center transition">
            <Bell class="w-5 h-5 text-gray-600 hover:text-pink-600" />
          </button>

          <button class="w-11 h-11 bg-gray-100 hover:bg-pink-100 rounded-xl flex items-center justify-center transition">
            <MessageSquare class="w-5 h-5 text-gray-600 hover:text-pink-600" />
          </button>

          <img
            src="https://i.pravatar.cc/100?img=32"
            class="w-11 h-11 rounded-xl object-cover border border-gray-200 hover:scale-105 transition"
          >

        </div>
      </div>

      <!-- Page Content -->
      <div class="p-8">
        <slot></slot>
        <router-view />
      </div>

    </main>
  </div>
</template>

<script setup>
import {
  LayoutDashboard,
  User,
  CalendarDays,
  FileText,
  Pill,
  CreditCard,
  LogOut,
  Search,
  Bell,
  MessageSquare,
  Settings
} from "lucide-vue-next";
</script>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4B5563;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  transition: 0.2s;
  text-decoration: none;
}

.menu-item:hover {
  background-color: #fff1f2;
  color: #ec4899;
}
</style>