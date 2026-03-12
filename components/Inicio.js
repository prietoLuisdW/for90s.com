Vue.component("inicio-page", {
  template: `
    <section class="space-y-5 md:space-y-6">
      <!-- Cabecera principal -->
      <div
        class="rounded-3xl border p-5 sm:p-6 md:p-8 shadow-sm"
        :class="themeClasses.panel"
      >
        <div class="max-w-3xl">
          <span
            class="inline-flex items-center rounded-full border px-3 py-1 text-[11px] sm:text-xs font-medium opacity-90"
            :class="themeClasses.badge"
          >
            For90s .com · Explorador de conocimiento
          </span>

          <h2 class="mt-4 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold leading-snug tracking-tight">
            Ideas, procesos y herramientas para avanzar con claridad.
          </h2>

          <p class="mt-3 max-w-2xl text-sm sm:text-base leading-7 opacity-80">
            Un espacio para compartir conocimiento, presentar servicios y construir soluciones
            prácticas orientadas a la organización y mejora de procesos administrativos.
          </p>

          <div class="mt-5 flex flex-col sm:flex-row gap-3">
            <button
              class="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border transition-colors duration-200"
              :class="themeClasses.ctaPrimary"
              @click="$root.setSection('servicios-page')"
            >
              Ver servicios
            </button>

            <button
              class="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border transition-colors duration-200"
              :class="themeClasses.ctaSecondary"
              @click="$root.setSection('articulos-page')"
            >
              Explorar artículos
            </button>
          </div>
        </div>
      </div>

      <!-- Tarjetas principales -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <article class="rounded-2xl border p-5 shadow-sm" :class="themeClasses.panel">
          <p class="text-[11px] uppercase tracking-[0.18em] opacity-60">
            Qué hago
          </p>
          <h3 class="mt-3 text-base sm:text-lg font-semibold leading-snug">
            Acompaño y ordeno procesos
          </h3>
          <p class="mt-3 text-sm leading-7 opacity-80">
            Detecto oportunidades de mejora y ayudo a transformar tareas repetitivas
            en flujos más claros y funcionales.
          </p>
        </article>

        <article class="rounded-2xl border p-5 shadow-sm" :class="themeClasses.panel">
          <p class="text-[11px] uppercase tracking-[0.18em] opacity-60">
            Servicios
          </p>
          <h3 class="mt-3 text-base sm:text-lg font-semibold leading-snug">
            Soluciones prácticas
          </h3>
          <p class="mt-3 text-sm leading-7 opacity-80">
            Automatización administrativa, apps de apoyo operativo y orientación práctica
            para mejorar la gestión.
          </p>
        </article>

        <article class="rounded-2xl border p-5 shadow-sm" :class="themeClasses.panel">
          <p class="text-[11px] uppercase tracking-[0.18em] opacity-60">
            Artículos
          </p>
          <h3 class="mt-3 text-base sm:text-lg font-semibold leading-snug">
            Conocimiento compartido
          </h3>
          <p class="mt-3 text-sm leading-7 opacity-80">
            Ideas, aprendizajes, criterios y recursos para trabajar con más orden,
            claridad y visión práctica.
          </p>
        </article>

        <article class="rounded-2xl border p-5 shadow-sm" :class="themeClasses.panel">
          <p class="text-[11px] uppercase tracking-[0.18em] opacity-60">
            Contacto
          </p>
          <h3 class="mt-3 text-base sm:text-lg font-semibold leading-snug">
            Próximo canal directo
          </h3>
          <p class="mt-3 text-sm leading-7 opacity-80">
            Esta sección quedará preparada para recibir mensajes y consultas
            desde el propio sitio.
          </p>
        </article>
      </div>

      <!-- Panel informativo -->
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <div
          class="xl:col-span-4 rounded-3xl border p-5 sm:p-6 shadow-sm"
          :class="themeClasses.panel"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-14 h-14 rounded-2xl overflow-hidden border-2 shrink-0"
              :class="themeClasses.border"
            >
              <img
                src="./assets/img/avatar.png"
                alt="Avatar"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="min-w-0">
              <h3 class="text-base sm:text-lg font-semibold truncate">
                For90s .com
              </h3>
              <p class="text-xs sm:text-sm opacity-70 truncate">
                Portafolio profesional
              </p>
            </div>
          </div>

          <div class="mt-5 rounded-2xl border p-4" :class="themeClasses.subpanel">
            <p class="text-[11px] uppercase tracking-[0.18em] opacity-60">
              Enfoque
            </p>
            <p class="mt-2 text-sm leading-7 opacity-90">
              Explorar, ordenar y convertir ideas en herramientas, estructuras
              y procesos más útiles para el trabajo diario.
            </p>
          </div>
        </div>

        <div class="xl:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="rounded-2xl border p-5 shadow-sm" :class="themeClasses.panel">
            <p class="text-[11px] uppercase tracking-[0.18em] opacity-60">
              Automatización
            </p>
            <h3 class="mt-3 text-base sm:text-lg font-semibold leading-snug">
              Menos fricción
            </h3>
            <p class="mt-3 text-sm leading-7 opacity-80">
              Procesos más fluidos, repetición reducida y mejor organización operativa.
            </p>
          </div>

          <div class="rounded-2xl border p-5 shadow-sm" :class="themeClasses.panel">
            <p class="text-[11px] uppercase tracking-[0.18em] opacity-60">
              Apps de apoyo
            </p>
            <h3 class="mt-3 text-base sm:text-lg font-semibold leading-snug">
              Herramientas ligeras
            </h3>
            <p class="mt-3 text-sm leading-7 opacity-80">
              Soluciones simples para seguimiento, registro, control y gestión interna.
            </p>
          </div>

          <div class="rounded-2xl border p-5 shadow-sm" :class="themeClasses.panel">
            <p class="text-[11px] uppercase tracking-[0.18em] opacity-60">
              Mentoría
            </p>
            <h3 class="mt-3 text-base sm:text-lg font-semibold leading-snug">
              Claridad para avanzar
            </h3>
            <p class="mt-3 text-sm leading-7 opacity-80">
              Orientación práctica para aterrizar ideas, revisar necesidades y definir caminos.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  computed: {
    themeClasses() {
      return THEMES[this.$root.currentTheme] || THEMES.light;
    }
  }
});