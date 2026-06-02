<template>
  <table class="w-full border">
    <thead>
      <tr>
        <th>Date</th>
        <th>Doctor</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="appointment in appointments"
        :key="appointment.id"
      >
        <td>{{ appointment.date }}</td>
        <td>{{ appointment.doctor }}</td>
        <td>{{ appointment.status }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  appointments: Array
})
</script>