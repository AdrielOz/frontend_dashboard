<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    app
    floating
    width="260"
    class="app-navigation-menu"
    :right="$vuetify.rtl"
    @input="val => $emit('update:is-drawer-open', val)"
  >
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <router-link
        to="/"
        class="d-flex align-center text-decoration-none"
      >
        <v-img
          :src="require('@/assets/images/img/logo.png')"
          max-height="220px"
          max-width="220px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
        ></v-img>
      </router-link>
    </div>

    <!-- Navigation Items -->
    <v-list
      expand
      shaped
      class="vertical-nav-menu-items pr-5"
    >
      <nav-menu-section-title title="Módulo de Usuario"></nav-menu-section-title>
      <nav-menu-link
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        :icon="icons.mdiHomeOutline"
      ></nav-menu-link>
      <!-- <nav-menu-link
        :title="titles.Requisiciones.name"
        :to="{ name: titles.Requisiciones.to }"
        :icon="titles.Requisiciones.icon"
      ></nav-menu-link> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiHomeOutline,
  mdiAlphaTBoxOutline,
  mdiEyeOutline,
  mdiCreditCardOutline,
  mdiTable,
  mdiFileOutline,
  mdiFormSelect,
  mdiAccountCogOutline,
  mdiFileMultiple,
} from '@mdi/js'
import NavMenuSectionTitle from './components/NavMenuSectionTitle.vue'
import NavMenuLink from './components/NavMenuLink.vue'

export default {
  components: {
    NavMenuSectionTitle,
    NavMenuLink,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
  },
  setup() {
    return {
      icons: {
        mdiHomeOutline,
        mdiAlphaTBoxOutline,
        mdiEyeOutline,
        mdiCreditCardOutline,
        mdiTable,
        mdiFileOutline,
        mdiFormSelect,
        mdiAccountCogOutline,
      },
      titles: {
        Requisiciones: {
          name: 'Requisiciones',
          icon: mdiFileMultiple,
          to: 'dashboard',
        },
        Aprobacion: {
          name: 'Aprobacion',
          icon: '',
          to: '',
        },
        Autorizacion: {
          name: 'Autorizacion',
          icon: '',
          to: '',
        },
        VerRequisicion: {
          name: 'Ver Requisición',
          icon: '',
          to: '',
        },
        Imprimir: {
          name: 'Imprimir Requisición',
          icon: '',
          to: '',
        },
        Despacho: {
          name: 'Despacho',
          icon: '',
          to: '',
        },
        Ingreso: {
          name: 'Ingreso',
          icon: '',
          to: '',
        },
        Directa: {
          name: 'Requisición Directa',
          icon: '',
          to: '',
        },
        General: {
          name: 'Consulta General',
          icon: '',
          to: '',
        },
        Kardex: {
          name: 'Kardex Directo',
          icon: '',
          to: '',
        },
        IngresoActual: {
          name: 'Ingreso Actual',
          icon: '',
          to: '',
        },
        Catalogos: {
          name: 'Catalogos',
          icon: '',
          to: '',
        },
        KardexStock: {
          name: 'Kardex de Stock',
          icon: '',
          to: '',
        },
        Consumo: {
          name: 'Consumo por dependencia',
          icon: '',
          to: '',
        },
        RequisicionEspcial: {
          name: 'Requisición Especial',
          icon: '',
          to: '',
        },
        KardexActualizar: {
          name: 'Actualizar Kardex',
          icon: '',
          to: '',
        },
        Reporte: {
          name: 'Reporte de Almacén',
          icon: '',
          to: '',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
