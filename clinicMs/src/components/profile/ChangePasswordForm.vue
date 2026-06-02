<template>
  <form class="bg-white rounded-2xl shadow p-6 space-y-4">
    <h3 class="font-semibold">
      Change Password
    </h3>

    <input
      type="password"
      placeholder="Current Password"
      class="w-full border rounded-lg p-3"
    />

    <input
      type="password"
      placeholder="New Password"
      class="w-full border rounded-lg p-3"
    />

    <input
      type="password"
      placeholder="Confirm Password"
      class="w-full border rounded-lg p-3"
    />

    <button
      class="bg-green-600 text-white px-5 py-3 rounded-lg"
    >
      Update Password
    </button>
  </form>
</template>