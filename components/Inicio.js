Vue.component("inicio-page", {
  template: `
    <section class="space-y-8 md:space-y-10">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        <!-- Hero principal -->
        <div
          class="xl:col-span-8 rounded-3xl border p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm"
          :class="themeClasses.panel"
        >
          <div class="max-w-3xl">
            <span
              class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium opacity-90"
              :class="themeClasses.badge"
            >
              For90s .com · Explorador de conocimiento
            </span>

            <h2 class="mt-5 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              Impulso ideas, automatizo procesos y convierto tareas administrativas en soluciones más claras.
            </h2>

            <p class="mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-7 md:leading-8 opacity-80">
              Este espacio reúne servicios, artículos y herramientas orientadas a mejorar la organización,
              la eficiencia y la forma de trabajar. Mi enfoque está en acompañar procesos, ordenar operaciones
              y construir soluciones prácticas que realmente ayuden.
            </p>

            <div class="mt-8 flex flex-col sm:flex-row gap-3">
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
                @click="$root.setSection('contacto-page')"
              >
                Ir a contacto
              </button>
            </div>

            <div class="mt-8 flex flex-wrap gap-3">
              <span
                class="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm"
                :class="themeClasses.badge"
              >
                Automatización administrativa
              </span>

              <span
                class="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm"
                :class="themeClasses.badge"
              >
                Apps para procesos
              </span>

              <span
                class="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm"
                :class="themeClasses.badge"
              >
                Mentoría práctica
              </span>

              <span
                class="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm"
                :class="themeClasses.badge"
              >
                Artículos de conocimiento
              </span>
            </div>
          </div>
        </div>

        <!-- Panel lateral -->
        <div
          class="xl:col-span-4 rounded-3xl border p-5 sm:p-6 md:p-7 shadow-sm"
          :class="themeClasses.panel"
        >
          <div class="flex items-center gap-4">
            <div
              class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 shrink-0"
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

          <div class="mt-6 space-y-3">
            <div class="rounded-2xl border p-4" :class="themeClasses.subpanel">
              <p class="text-[11px] sm:text-xs uppercase tracking-[0.18em] opacity-60">
                Enfoque
              </p>
              <p class="mt-2 text-sm md:text-base leading-7 opacity-90">
                Acompaño ideas, detecto oportunidades de mejora y convierto tareas repetitivas
                en flujos más ordenados y funcionales.
              </p>
            </div>

            <div class="rounded-2xl border p-4" :class="themeClasses.subpanel">
              <p class="text-[11px] sm:text-xs uppercase tracking-[0.18em] opacity-60">
                Servicios
              </p>
              <p class="mt-2 text-sm md:text-base leading-7 opacity-90">
                Automatización de procesos administrativos, diseño de apps de apoyo operativo
                y orientación práctica para mejorar la gestión.
              </p>
            </div>

            <div class="rounded-2xl border p-4" :class="themeClasses.subpanel">
              <p class="text-[11px] sm:text-xs uppercase tracking-[0.18em] opacity-60">
                Contenido
              </p>
              <p class="mt-2 text-sm md:text-base leading-7 opacity-90">
                También comparto artículos con aprendizajes, ideas, criterios y herramientas
                para trabajar con más claridad.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bloques inferiores -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <article class="rounded-2xl border p-5 sm:p-6 shadow-sm" :class="themeClasses.panel">
          <p class="text-[11px] sm:text-xs uppercase tracking-[0.18em] opacity-60">
            Automatización
          </p>
          <h3 class="mt-3 text-lg sm:text-xl font-semibold">
            Procesos más fluidos
          </h3>
          <p class="mt-3 text-sm md:text-base leading-7 opacity-80">
            Reviso tareas administrativas repetitivas y propongo formas más ordenadas,
            prácticas y sostenibles de ejecutarlas.
          </p>
        </article>

        <article class="rounded-2xl border p-5 sm:p-6 shadow-sm" :class="themeClasses.panel">
          <p class="text-[11px] sm:text-xs uppercase tracking-[0.18em] opacity-60">
            Apps de apoyo
          </p>
          <h3 class="mt-3 text-lg sm:text-xl font-semibold">
            Soluciones para operación diaria
          </h3>
          <p class="mt-3 text-sm md:text-base leading-7 opacity-80">
            Diseño herramientas ligeras para registro, seguimiento, control y gestión
            de información en procesos administrativos.
          </p>
        </article>

        <article class="rounded-2xl border p-5 sm:p-6 shadow-sm" :class="themeClasses.panel">
          <p class="text-[11px] sm:text-xs uppercase tracking-[0.18em] opacity-60">
            Conocimiento
          </p>
          <h3 class="mt-3 text-lg sm:text-xl font-semibold">
            Ideas que se comparten
          </h3>
          <p class="mt-3 text-sm md:text-base leading-7 opacity-80">
            La sección de artículos está pensada para reunir reflexiones, métodos,
            aprendizajes y recursos útiles para otros.
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