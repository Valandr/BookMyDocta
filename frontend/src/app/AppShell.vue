<template>
  <main class="flex min-h-screen items-center justify-center px-6 py-16">
    <div class="w-full max-w-5xl">
      <div class="mb-10 max-w-2xl">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-300">Fullstack Starter</p>
        <h1 class="mt-4 text-5xl font-semibold tracking-tight text-white">
          Vue + Express starter with clean boundaries.
        </h1>
        <p class="mt-4 text-lg text-slate-300">
          This starter is wired to a secured TypeScript backend and validates the integration by
          calling <code class="rounded bg-white/10 px-2 py-1 text-sm text-emerald-200">GET /api/health</code>.
        </p>
      </div>
      <HealthStatus />
    </div>
  </main>
</template>

<script setup lang="ts">
import HealthStatus from '@/components/HealthStatus.vue';
</script>
