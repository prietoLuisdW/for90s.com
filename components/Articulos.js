Vue.component("articulos-page", {
  template: `
    <section class="space-y-6">
      <div>
        <p class="text-xs uppercase tracking-[0.18em] opacity-60">Artículos</p>
        <h2 class="mt-2 text-3xl md:text-4xl font-bold">Conocimiento, ideas y aprendizajes</h2>
        <p class="mt-3 max-w-3xl text-sm md:text-base leading-7 opacity-80">
          Este espacio está pensado para compartir criterios, experiencias, ideas prácticas
          y recursos relacionados con organización, procesos, herramientas y mejora continua.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <article class="rounded-2xl border p-6 shadow-sm" :class="themeClasses.panel">
          <p class="text-xs uppercase tracking-[0.18em] opacity-60">Artículo 01</p>
          <h3 class="mt-3 text-xl font-semibold">Cómo detectar tareas que conviene automatizar</h3>
          <p class="mt-3 text-sm leading-7 opacity-80">
            Una mirada práctica para identificar actividades repetitivas, puntos de fricción
            y oportunidades de mejora en procesos administrativos.
          </p>
        </article>

        <article class="rounded-2xl border p-6 shadow-sm" :class="themeClasses.panel">
          <p class="text-xs uppercase tracking-[0.18em] opacity-60">Artículo 02</p>
          <h3 class="mt-3 text-xl font-semibold">Apps simples que resuelven problemas reales</h3>
          <p class="mt-3 text-sm leading-7 opacity-80">
            No toda solución necesita ser compleja. A veces una herramienta pequeña,
            bien pensada, mejora mucho la operación diaria.
          </p>
        </article>

        <article class="rounded-2xl border p-6 shadow-sm" :class="themeClasses.panel">
          <p class="text-xs uppercase tracking-[0.18em] opacity-60">Artículo 03</p>
          <h3 class="mt-3 text-xl font-semibold">Orden administrativo con enfoque práctico</h3>
          <p class="mt-3 text-sm leading-7 opacity-80">
            Ideas para organizar información, definir flujos y facilitar la gestión
            sin sobrecargar al equipo ni complicar los procesos.
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