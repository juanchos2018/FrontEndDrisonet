<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
      <header class="logo">
         <img src="../../assets/imgtaxi.png" width="50%" alt=""><br>       
          <span class="primary-word"  >  Drisonet  </span>
      </header>
      <ul class="nav">
        <NavLink
            :activeItem="activeItem"
            header="Inicio"
            link="/app/inicio"
            iconName="flaticon-home"
            index="inicio"
            isHeader
        />
                
         <NavLink
            :activeItem="activeItem"
            header="Publicaciones"
            link="/app/publicaciones"
            iconName="flaticon-home"
            index="publicaciones"
            isHeader
        />
          <NavLink
            :activeItem="activeItem"
            header="Lista"
            link="/app/publicacioneslista"
            iconName="flaticon-home"
            index="publicacioneslista"
            isHeader
        />

          |<NavLink
            :activeItem="activeItem"
            header="Registro"
            link="/app/registro"
            iconName="flaticon-home"
            index="regigstro"
            isHeader
        />


    
      </ul>
      
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '@/core/screenHelper';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
     
    }
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
