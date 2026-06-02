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
        sidebarOpen
          ? 'translate-x-0'
          : '-translate-x-full lg:translate-x-0',
      ]"
    >
      <!-- Mobile Close -->
      <div class="flex justify-end lg:hidden p-4">
        <button @click="sidebarOpen = false">
          <X class="w-6 h-6 text-gray-600" />
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

      <div class="px-5 pb-8">
        <!-- ROLE -->
        <button
          class="w-full bg-pink-300 hover:bg-pink-400 text-white py-3 rounded-full font-semibold mb-10 transition"
        >
          ADMIN
        </button>

        <!-- MAIN MENU -->
        <ul class="space-y-2">
          <RouterLink
            to="/admin/dashboard"
            class="menu-item"
            active-class="menu-active"
          >
            <LayoutDashboard class="w-5 h-5" />
            Dashboard
          </RouterLink>

          <RouterLink
            to="/admin/users"
            class="menu-item"
            active-class="menu-active"
          >
            <User class="w-5 h-5" />
            User Management
          </RouterLink>

          <RouterLink
            to="/admin/doctors"
            class="menu-item"
            active-class="menu-active"
          >
            <CalendarDays class="w-5 h-5" />
            Doctor Management
          </RouterLink>

          <RouterLink
            to="/admin/patients"
            class="menu-item"
            active-class="menu-active"
          >
            <Pill class="w-5 h-5" />
            Patient Management
          </RouterLink>

          <RouterLink
            to="/admin/appointments"
            class="menu-item"
            active-class="menu-active"
          >
            <CalendarDays class="w-5 h-5" />
            Appointment Management
          </RouterLink>

          <RouterLink
            to="/admin/billing"
            class="menu-item"
            active-class="menu-active"
          >
            <CreditCard class="w-5 h-5" />
            Billing & Payments
          </RouterLink>

          <RouterLink
            to="/admin/reports"
            class="menu-item"
            active-class="menu-active"
          >
            <FileText class="w-5 h-5" />
            Reports & Analytics
          </RouterLink>
        </ul>

        <!-- Bottom Menu -->
        <ul class="mt-10 border-t pt-6 space-y-2">
          <router-link to="/admin/settings">
          <li class="menu-item">
            <Settings class="w-5 h-5" />
            Settings
          </li>
          </router-link>

          <router-link to="/">
          <li class="menu-item text-red-500 hover:text-red-600">
            <LogOut class="w-5 h-5" />
            Logout
          </li>
          </router-link>
        </ul>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 min-w-0">
      <!-- Top Navbar -->
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
            class="w-11 h-11 bg-white hover:bg-pink-100 rounded-xl flex items-center justify-center shadow-sm transition"
          >
            <Bell class="w-5 h-5 text-gray-600" />
          </button>

          <button
            class="w-11 h-11 bg-white hover:bg-pink-100 rounded-xl flex items-center justify-center shadow-sm transition"
          >
            <MessageSquare class="w-5 h-5 text-gray-600" />
          </button>

          <img
            src="https://i.pravatar.cc/100?img=32"
            class="w-11 h-11 rounded-xl object-cover border border-gray-200 cursor-pointer hover:scale-105 transition"
          />
        </div>
      </div>

      <!-- Page Content -->
      <div class="p-4 md:p-6 lg:p-8">
        <slot />
        <router-view />
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
  Settings,
  Menu,
  X,
} from "lucide-vue-next";
import { RouterLink } from "vue-router";

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
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.menu-item:hover {
  background: #fff1f2;
  color: #ec4899;
}

.menu-active {
  background: #fff1f2;
  color: #ec4899;
  font-weight: 600;
}

.menu-active svg,
.menu-item:hover svg {
  color: #ec4899;
}
</style>