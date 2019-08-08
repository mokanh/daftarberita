import Vue from "vue";

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VCard,
  VIcon,
  VDivider,
  VGrid,
  VToolbar,
  VTabs,
  VTextField,
  VDialog,
  VSubheader,
  VExpansionPanel,
  transitions
} from "vuetify";
import "../../../node_modules/vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VCard,
    VIcon,
    VDivider,
    VGrid,
    VToolbar,
    VTabs,
    VTextField,
    VDialog,
    VSubheader,
    VExpansionPanel,
    transitions
  },
  theme: {
    primary: "#3f51b5",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});
