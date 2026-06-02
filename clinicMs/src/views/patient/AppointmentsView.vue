<template>
  <DashboardView>
    <div>
    <h2 class="text-xl font-semibold mb-4">
      Select Doctor
    </h2>

    <div class="grid md:grid-cols-4 gap-4">
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
import DoctorCard from '@/components/doctor/DoctorCard.vue'
import DashboardView from './DashboardView.vue';

const doctors = [
  {
    id: 1,
    name: 'Dr. John Smith',
    specialization: 'Cardiology',
    photo: 'https://i.pravatar.cc/150?img=1'
  }
]
</script>