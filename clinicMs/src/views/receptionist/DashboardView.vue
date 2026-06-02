<template>
    <div>
        <ReceptionistLayout>
            <main>
                <slot></slot>
            </main>
        </ReceptionistLayout>
    </div>
</template>

<script setup>
import ReceptionistLayout from '@/layouts/ReceptionistLayout.vue';

</script>
