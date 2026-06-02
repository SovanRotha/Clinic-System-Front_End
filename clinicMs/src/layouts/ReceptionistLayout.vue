<template>
  <div class="min-h-screen bg-[#f8f5f6] flex">

    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-pink-100 h-screen overflow-y-auto">

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

        <!-- ROLE -->
        <button
          class="w-full bg-pink-200 hover:bg-pink-300 transition text-white py-3 rounded-full font-semibold mb-10"
        >
          {{ role.toUpperCase() }}
        </button>

        <!-- MENU -->
        <ul class="space-y-2">

          <RouterLink to="/receptionist/dashboard" class="menu-item" active-class="menu-active">
            <LayoutDashboard class="w-5 h-5" />
            Dashboard
          </RouterLink>

          <RouterLink to="/receptionist/profile" class="menu-item" active-class="menu-active">
            <User class="w-5 h-5" />
            Patients
          </RouterLink>

          <RouterLink to="/receptionist/appointments" class="menu-item" active-class="menu-active">
            <CalendarDays class="w-5 h-5" />
            Appointment
          </RouterLink>

          <RouterLink to="/receptionist/billing" class="menu-item" active-class="menu-active">
            <Pill class="w-5 h-5" />
            Billing
          </RouterLink>

          <RouterLink to="/receptionist/reports" class="menu-item" active-class="menu-active">
            <FileText class="w-5 h-5" />
            Reports
          </RouterLink>

        </ul>

        <!-- BOTTOM MENU -->
        <ul class="mt-10 border-t pt-6 space-y-2">

          <RouterLink to="/receptionist/settings" class="menu-item" active-class="menu-active">
            <Settings class="w-5 h-5" />
            Settings
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
      <div class="p-8 min-h-[calc(100vh-80px)]">
        <main>
          <slot></slot>
        </main>
        
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
  LogOut,
  Search,
  Bell,
  MessageSquare,
  Settings
} from "lucide-vue-next";

// role (can later come from API / auth store)
const role = "Receptionist";
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

.menu-active {
  background-color: #fff1f2;
  color: #ec4899;
  font-weight: 600;
}

/* ensure icon also changes color */
.menu-item:hover svg,
.menu-active svg {
  color: #ec4899;
}
</style>