<template>
  <form class="bg-white rounded-2xl shadow p-6 space-y-4">
    <h3 class="font-semibold">
      Edit Profile
    </h3>

    <input
      type="text"
      placeholder="Full Name"
      class="w-full border rounded-lg p-3"
    />

    <input
      type="text"
      placeholder="Phone Number"
      class="w-full border rounded-lg p-3"
    />

    <textarea
      rows="4"
      placeholder="Address"
      class="w-full border rounded-lg p-3"
    />

    <input
      type="file"
      class="w-full border rounded-lg p-3"
    />

    <button
      class="bg-blue-600 text-white px-5 py-3 rounded-lg"
    >
      Save Changes
    </button>
  </form>
</template>