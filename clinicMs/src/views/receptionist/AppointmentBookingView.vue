<template>
  <DashboardView>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-6">Doctors</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DoctorCard
          v-for="doctor in doctors"
          :key="doctor.id"
          :doctor="doctor"
        />
      </div>
    </div>
  </DashboardView>
</template>

<script setup>
import DashboardView from './DashboardView.vue'
import DoctorCard from '@/components/doctor/DoctorCard.vue'

const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    email: 'john@example.com',
    phone: '+855 12 345 678'
  },
  {
    id: 2,
    name: 'Dr. Sarah Smith',
    specialty: 'Dermatologist',
    email: 'sarah@example.com',
    phone: '+855 98 765 432'
  },
  {
    id: 3,
    name: 'Dr. David Lee',
    specialty: 'Pediatrician',
    email: 'david@example.com',
    phone: '+855 11 222 333'
  }
]
</script>