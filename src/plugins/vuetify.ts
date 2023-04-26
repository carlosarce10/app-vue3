import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VBtn } from "vuetify/components/VBtn";
import { aliases, mdi } from "vuetify/iconsets/mdi";

// Creamos un tema personalizado
/* const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
}; */

export default createVuetify({
  // Podemos usar los componentes de Vuetify como si fueran nuestros propios componentes
  // y así poder personalizarlos a nuestro gusto
  aliases: {
    AddButton: VBtn,
    DeleteButton: VBtn,
  },
  defaults: {
    AddButton: {
      color: "secondary",
      variant: "default",
      elevation: 2,
    },
    DeleteButton: {
      color: "secondary",
      variant: "flat",
      rounded: "lg",
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  // Podemos usar nuestro tema personalizado
  /* theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  }, */
  components,
  directives,
});
