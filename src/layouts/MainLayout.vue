<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>Admin panel</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <SidebarLink v-for="link in sidebarLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SidebarLink from '../components/shared/SidebarLink.vue'

const linksList = [
  {
    title: 'Types',
    icon: 'format_size',
    link: '/type'
  },
  {
    title: 'Products',
    icon: 'rocket_launch',
    link: 'product'
  }
];


export default defineComponent({
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      sidebarLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  components: {
    SidebarLink
  }
});
</script>
