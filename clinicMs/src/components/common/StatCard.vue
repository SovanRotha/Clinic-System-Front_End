<template>
  <div class="bg-white rounded-xl shadow p-6">
    <h3 class="text-gray-500 text-sm">
      {{ title }}
    </h3>

    <p class="text-3xl font-bold mt-2">
      {{ value }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number]
})
</script>