new Vue({
  el: "#app",

  data: {
    isSidebarCollapsed: true,
    currentComponent: "inicio-page",
    currentTheme: "light",

    menu: [
      { id: "inicio-page", label: "Inicio", icon: "home" },
      { id: "articulos-page", label: "Artículos", icon: "article" },
      { id: "servicios-page", label: "Servicios", icon: "build" },
      { id: "contacto-page", label: "Contacto", icon: "mail" }
    ]
  },

  computed: {
    themeClasses() {
      return THEMES[this.currentTheme] || THEMES.dark;
    }
  },

  mounted() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme && THEMES[savedTheme]) {
      this.currentTheme = savedTheme;
    }

    this.applyTheme();
  },

  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    },

    setSection(component) {
      this.currentComponent = component;
    },

    applyTheme() {
      applyTheme(this.currentTheme);
    }
  }
});