<template>
  <section class="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-emerald-950/30 backdrop-blur">
    <p class="text-xs uppercase tracking-[0.3em] text-emerald-300">API Status</p>
    <h2 class="mt-3 text-3xl font-semibold text-white">Backend connectivity</h2>

    <div v-if="loading" class="mt-6 text-slate-300">Loading API health...</div>
    <div v-else-if="error" class="mt-6 rounded-2xl border border-rose-500/40 bg-rose-950/40 p-4 text-rose-200">
      {{ error }}
    </div>
    <dl v-else-if="health" class="mt-6 grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
      <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
        <dt class="text-slate-400">Status</dt>
        <dd class="mt-2 text-lg font-medium capitalize text-emerald-300">{{ health.status }}</dd>
      </div>
      <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
        <dt class="text-slate-400">Database</dt>
        <dd class="mt-2 text-lg font-medium capitalize text-emerald-300">{{ health.database }}</dd>
      </div>
      <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
        <dt class="text-slate-400">Service</dt>
        <dd class="mt-2 text-lg font-medium text-white">{{ health.service }}</dd>
      </div>
      <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
        <dt class="text-slate-400">Version</dt>
        <dd class="mt-2 text-lg font-medium text-white">{{ health.version }}</dd>
      </div>
    </dl>
  </section>
</template>

<script setup lang="ts">
import { useHealthStatus } from '@/composables/useHealthStatus';

const { health, loading, error } = useHealthStatus();
</script>
