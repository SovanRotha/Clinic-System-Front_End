<template>
  <div class="bg-white rounded-xl shadow p-4">
    <img
      :src="doctor.photo"
      class="w-20 h-20 rounded-full"
    />

    <h3 class="font-semibold mt-3">
      {{ doctor.name }}
    </h3>

    <p class="text-gray-500">
      {{ doctor.specialization }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  doctor: Object
})
</script>