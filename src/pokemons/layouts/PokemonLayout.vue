<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import type { RouterLink } from '@/router/list-routes';
import { pokemonRoute } from '../router';

const routerLinks: RouterLink[] = pokemonRoute.children?.map(({ name, path, props }) => {
  return {
    name: name as string ?? '', // name as string ?? ''
    path: path,
    title: (props as { title: string }).title,
  }
}) || [];



</script>

<template>
  <div>
    <!-- <h4>Pokemon Layout</h4> -->
    <NavBar :links="routerLinks" is-secondary />
    <RouterView />
  </div>
</template>
