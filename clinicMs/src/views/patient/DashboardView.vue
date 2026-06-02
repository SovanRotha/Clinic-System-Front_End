<template>

    <PatientLayout>
      <main class="flex-1">
        <slot />
      </main>
    </PatientLayout>
    <RouterView />

</template>
<script setup>
import PatientLayout from '@/layouts/PatientLayout.vue';


</script>