<script setup lang="ts">import {ref} from 'vue';const name=ref('Vue consumer');const enabled=ref(true)</script>
<template><main><h1>Native Vue fixture</h1><UvInput v-model="name" label="Project name" clearable/><UvSwitch v-model="enabled" label="Enabled"/><UvButton>Save</UvButton></main></template>
<style>body{font-family:system-ui;margin:0;background:#f8fafc}main{display:grid;gap:1rem;max-width:560px;margin:4rem auto;padding:2rem;background:white;border-radius:1rem}</style>
