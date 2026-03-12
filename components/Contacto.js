Vue.component("contacto-page", {
  template: `
    <section class="max-w-3xl space-y-6">

      <div>
        <p class="text-xs uppercase tracking-[0.18em] opacity-60">
          Contacto
        </p>

        <h2 class="mt-2 text-3xl md:text-4xl font-bold">
          Próximamente podrás contactarme desde aquí
        </h2>

        <p class="mt-4 text-sm md:text-base leading-7 opacity-80">
          Esta sección está preparada para integrar un formulario de contacto.
          En una próxima actualización podrás enviarme mensajes directamente
          desde este sitio.
        </p>
      </div>

      <div
        class="rounded-2xl border p-6 shadow-sm"
        :class="themeClasses.panel"
      >
        <p class="text-sm leading-7 opacity-80">
          Estoy preparando un sistema de contacto conectado con Apps Script
          para recibir mensajes, consultas o ideas de colaboración de forma
          sencilla y ordenada.
        </p>

        <p class="mt-4 text-sm leading-7 opacity-80">
          Mientras tanto, puedes utilizar los enlaces de Instagram o WhatsApp
          disponibles en la parte superior del sitio.
        </p>
      </div>

    </section>
  `,
  computed: {
    themeClasses() {
      return THEMES[this.$root.currentTheme] || THEMES.light;
    }
  }
});