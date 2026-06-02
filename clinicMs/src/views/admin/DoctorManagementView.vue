<template>
  <div>
    <DashboardView>
      <h1 class="text-2xl font-bold mb-6">
      Doctors
    </h1>

    <div class="grid md:grid-cols-3 gap-6">
      <DoctorCard
        v-for="doctor in doctors"
        :key="doctor.id"
        :doctor="doctor"
      />
    </div>
    </DashboardView>
  </div>
</template>

<script setup>
import DoctorCard from '@/components/doctor/DoctorCard.vue'
import DashboardView from './DashboardView.vue';

const doctors = [
  {
    id: 1,
    name: 'Dr. John Smith',
    specialization: 'Cardiology',
    photo: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Dr. Sarah Lee',
    specialization: 'Dermatology',
    photo: 'https://i.pravatar.cc/150?img=2'
  }
]
</script>