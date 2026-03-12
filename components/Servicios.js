Vue.component("servicios-page", {
  template: `
    <section class="space-y-6">
      <div>
        <p class="text-xs uppercase tracking-[0.18em] opacity-60">Servicios</p>
        <h2 class="mt-2 text-3xl md:text-4xl font-bold">Soluciones orientadas a mejorar la gestión</h2>
        <p class="mt-3 max-w-3xl text-sm md:text-base leading-7 opacity-80">
          Mi trabajo se enfoca en acompañar procesos, ordenar operaciones y proponer
          herramientas útiles para que las tareas administrativas sean más claras y eficientes.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <article class="rounded-2xl border p-6 shadow-sm" :class="themeClasses.panel">
          <p class="text-xs uppercase tracking-[0.18em] opacity-60">Servicio 01</p>
          <h3 class="mt-3 text-xl font-semibold">Automatización de procesos administrativos</h3>
          <p class="mt-3 text-sm leading-7 opacity-80">
            Identificación de tareas repetitivas, revisión de flujos y propuesta de
            automatizaciones orientadas a ahorrar tiempo y reducir fricción.
          </p>
        </article>

        <article class="rounded-2xl border p-6 shadow-sm" :class="themeClasses.panel">
          <p class="text-xs uppercase tracking-[0.18em] opacity-60">Servicio 02</p>
          <h3 class="mt-3 text-xl font-semibold">Apps de apoyo para procesos internos</h3>
          <p class="mt-3 text-sm leading-7 opacity-80">
            Desarrollo de herramientas ligeras para registro, seguimiento, control
            y gestión de información en procesos administrativos.
          </p>
        </article>

        <article class="rounded-2xl border p-6 shadow-sm" :class="themeClasses.panel">
          <p class="text-xs uppercase tracking-[0.18em] opacity-60">Servicio 03</p>
          <h3 class="mt-3 text-xl font-semibold">Mentoría y acompañamiento práctico</h3>
          <p class="mt-3 text-sm leading-7 opacity-80">
            Espacios para orientar ideas, revisar necesidades, aterrizar soluciones
            y encontrar caminos más claros para mejorar la operación.
          </p>
        </article>
      </div>
    </section>
  `,
  computed: {
    themeClasses() {
      return THEMES[this.$root.currentTheme] || THEMES.light;
    }
  }
});