import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VAvatar,
  VDivider,
  VToolbar
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VAvatar,
    VDivider,
    VToolbar
  },
  theme: {
    primary: '#008aff',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
    asd: '#83C598'
  }
})
