<template>
  <AdminLayout>

    <!-- STATS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard title="Total Patients" :value="250" />
      <StatCard title="Total Doctors" :value="12" />
      <StatCard title="Appointments" :value="430" />
      <StatCard title="Revenue" value="$12,500" />
    </div>

    <!-- TABLE -->
    <div class="mt-6">
      <AppointmentTable :appointments="appointments" />
      <main>
        <slot></slot>
      </main>
    </div>

  </AdminLayout>
</template>

<script setup>
import AppointmentTable from '@/components/appointments/AppointmentTable.vue'
import StatCard from '@/components/common/StatCard.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const appointments = [
  {
    id: 1,
    date: '2026-06-01',
    doctor: 'Dr. Smith',
    status: 'Confirmed'
  },
  {
    id: 2,
    date: '2026-06-02',
    doctor: 'Dr. John',
    status: 'Pending'
  }
]
</script>