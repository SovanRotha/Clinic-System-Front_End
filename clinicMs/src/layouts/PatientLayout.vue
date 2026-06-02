<template>
  <div class="min-h-screen bg-[#f8f5f6] flex relative">
    <!-- Mobile Overlay -->
    <div
      v-if="sidebarOpen"
      @click="sidebarOpen = false"
      class="fixed inset-0 bg-black/40 z-40 lg:hidden"
    ></div>

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed lg:static top-0 left-0 z-50 h-screen w-64 bg-white border-r border-pink-100 overflow-y-auto transition-transform duration-300',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      ]"
    >
      <!-- Mobile Close -->
      <div class="flex justify-end p-4 lg:hidden">
        <button @click="sidebarOpen = false">
          <X class="w-6 h-6" />
        </button>
      </div>

      <!-- Logo -->
      <div class="p-8">
        <img
          src="https://i.pinimg.com/1200x/4c/c7/00/4cc70089ba10eebd40fb405b8598cdeb.jpg"
          class="w-24 h-24 rounded-2xl object-cover mb-4"
        />

        <h1 class="font-black text-3xl leading-none">
          <span class="text-pink-300">LUNAR</span><br />
          <span class="text-yellow-300">BLOOM</span>
        </h1>
      </div>

      <div class="px-5 pb-10">
        <button
          class="w-full bg-pink-300 hover:bg-pink-400 text-white py-3 rounded-full font-semibold mb-8"
        >
          PATIENT
        </button>

        <ul class="space-y-2">
          <RouterLink to="/patient/dashboard">
            <li class="menu-item">
              <LayoutDashboard class="w-5 h-5" />
              Dashboard
            </li>
          </RouterLink>
  
          <RouterLink to="/patient/myprofile">
          <li class="menu-item">
            <User class="w-5 h-5" />
            My Profile
          </li>
          </RouterLink>

          <RouterLink to="/patient/appointments">
          <li class="menu-item">
            <CalendarDays class="w-5 h-5" />
            Appointments
          </li>
          </RouterLink>

          <RouterLink to="/patient/medical-records">
          <li class="menu-item">
            <FileText class="w-5 h-5" />
            Medical History
          </li>
          </RouterLink>

          <RouterLink to="/patient/prescriptions">
          <li class="menu-item">
            <Pill class="w-5 h-5" />
            Prescriptions
          </li>
          </RouterLink>

          <RouterLink to="/patient/billing">
          <li class="menu-item">
            <CreditCard class="w-5 h-5" />
            Billing & Payments
          </li>
          </RouterLink>

        </ul>

        <div class="mt-10 border-t pt-6">
          <RouterLink to="/">
          <div class="menu-item text-red-500">
            <LogOut class="w-5 h-5" />
            Logout
          </div>
          </RouterLink>
        </div>
      </div>
    </aside>

    <!-- Main -->
    <main class="flex-1 min-w-0">
      <!-- Top Bar -->
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 md:p-6"
      >
        <!-- Left -->
        <div class="flex items-center gap-3 w-full">
          <!-- Mobile Menu -->
          <button
            @click="sidebarOpen = true"
            class="lg:hidden bg-white p-3 rounded-xl shadow-sm"
          >
            <Menu class="w-5 h-5" />
          </button>

          <!-- Search -->
          <div class="relative flex-1 md:max-w-md">
            <Search
              class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search Here..."
              class="w-full bg-white rounded-xl pl-11 pr-4 py-3 shadow-sm border border-gray-100 outline-none focus:ring-2 focus:ring-pink-100 focus:border-pink-300"
            />
          </div>
        </div>

        <!-- Right -->
        <div class="flex items-center justify-end gap-3">
          <button
            class="w-11 h-11 bg-white hover:bg-pink-100 rounded-xl flex items-center justify-center shadow-sm"
          >
            <Bell class="w-5 h-5 text-gray-600" />
          </button>

          <button
            class="w-11 h-11 bg-white hover:bg-pink-100 rounded-xl flex items-center justify-center shadow-sm"
          >
            <MessageSquare class="w-5 h-5 text-gray-600" />
          </button>

          <img
            src="https://i.pravatar.cc/100?img=32"
            class="w-11 h-11 rounded-xl object-cover border border-gray-200"
          />
        </div>
      </div>

      <!-- Page Content -->
      <div class="p-4 md:p-6 lg:p-8">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
  Menu,
  X,
} from "lucide-vue-next";

const sidebarOpen = ref(false);
</script>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 14px;
  color: #4b5563;
  cursor: pointer;
  transition: all 0.2s ease;
}

.menu-item:hover {
  background: #fff1f2;
  color: #ec4899;
}
</style>
