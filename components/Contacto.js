Vue.component("contacto-page", {
  data() {
    return {
      form: {
        fullName: "",
        country: "",
        city: "",
        mobileCountry: "",
        mobileNumber: "",
        email: "",
        preferredChannel: "",
        contactIntent: "",
        contactType: "",
        message: "",
        authorizeData: false,
        authorizeContact: false
      },

      preferredChannelOptions: [
        "Correo",
        "Celular",
        "Instagram",
        "Facebook",
        "Workana"
      ],

      contactIntentOptions: [
        "Deseo que me contacten",
        "Solo quiero dejar un comentario o sugerencia"
      ],

      contactTypeOptions: [
        "Solicitud de consultoría",
        "Solicitud de concepto rápido",
        "Solicitud de revisión de procesos",
        "Solicitud de desarrollo",
        "Consulta general",
        "Comentario o sugerencia",
        "Felicitación",
        "Queja",
        "Otro"
      ],

      lastPayload: null,
      submitted: false
    };
  },

  computed: {
    themeClasses() {
      return THEMES[this.$root.currentTheme] || THEMES.light;
    },

    countryOptions() {
      return Array.isArray(window.LOCATION_DATA) ? window.LOCATION_DATA : [];
    },

    cityOptions() {
      const selected = this.countryOptions.find(
        item => item.name === this.form.country
      );
      return selected ? selected.cities : [];
    },

    mobileCountryOptions() {
      return this.countryOptions.map(item => ({
        name: item.name,
        iso2: item.iso2,
        dialCode: item.dialCode
      }));
    },

    isValidEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email.trim());
    },

    isValidMobile() {
      return /^[0-9\s()-]{6,15}$/.test(this.form.mobileNumber.trim());
    },

    isFormValid() {
      return (
        this.form.fullName.trim() &&
        this.form.country.trim() &&
        this.form.city.trim() &&
        this.form.mobileCountry.trim() &&
        this.form.mobileNumber.trim() &&
        this.form.email.trim() &&
        this.form.preferredChannel.trim() &&
        this.form.contactIntent.trim() &&
        this.form.contactType.trim() &&
        this.form.message.trim() &&
        this.form.authorizeData &&
        this.form.authorizeContact &&
        this.isValidEmail &&
        this.isValidMobile
      );
    }
  },

  methods: {
    onCountryChange() {
      this.form.city = "";

      const selectedCountry = this.countryOptions.find(
        item => item.name === this.form.country
      );

      if (selectedCountry) {
        this.form.mobileCountry = selectedCountry.iso2;
      } else {
        this.form.mobileCountry = "";
      }
    },

    submitForm() {
      if (!this.isFormValid) return;

      const selectedMobileCountry = this.countryOptions.find(
        item => item.iso2 === this.form.mobileCountry
      );

      this.lastPayload = {
        fullName: this.form.fullName.trim(),
        country: this.form.country.trim(),
        city: this.form.city.trim(),
        mobileCountry: this.form.mobileCountry.trim(),
        mobileDialCode: selectedMobileCountry ? selectedMobileCountry.dialCode : "",
        mobileNumber: this.form.mobileNumber.trim(),
        mobileFull: `${selectedMobileCountry ? selectedMobileCountry.dialCode : ""} ${this.form.mobileNumber.trim()}`,
        email: this.form.email.trim(),
        preferredChannel: this.form.preferredChannel.trim(),
        contactIntent: this.form.contactIntent.trim(),
        contactType: this.form.contactType.trim(),
        message: this.form.message.trim(),
        authorizeData: this.form.authorizeData,
        authorizeContact: this.form.authorizeContact,
        source: "website-contact-form",
        createdAt: new Date().toISOString()
      };

      console.log("Payload listo para Apps Script:", this.lastPayload);
      this.submitted = true;
    }
  },

  template: `
    <section class="space-y-6 md:space-y-8">
      <div>
        <p class="text-[11px] uppercase tracking-[0.18em] opacity-60">
          Contacto
        </p>
        <h2 class="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          Cuéntame tu necesidad, tu idea o tu situación operativa
        </h2>
        <p class="mt-3 max-w-3xl text-sm md:text-base leading-7 opacity-80">
          Este espacio está pensado para que puedas hacer consultas, contar problemas operativos,
          solicitar revisión de procesos, proponer desarrollos o simplemente dejar comentarios
          sobre el contenido compartido en el sitio.
        </p>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-5 md:gap-6">
        <!-- Columna izquierda -->
        <aside class="xl:col-span-4 space-y-4">
          <div class="rounded-3xl border p-5 shadow-sm" :class="themeClasses.panel">
            <p class="text-[11px] uppercase tracking-[0.18em] opacity-60">
              Otras opciones de contacto
            </p>

            <h3 class="mt-3 text-base sm:text-lg font-semibold leading-snug">
              Canales disponibles
            </h3>


            <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
              <!-- WhatsApp -->
              <button
                type="button"
                class="w-full inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200
                      bg-green-50/80 border-green-200 text-green-700 hover:bg-green-100/90"
                @click.prevent
              >
                <span class="material-icons text-base">chat</span>
                WhatsApp
              </button>

              <!-- Instagram -->
              <button
                type="button"
                class="w-full inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200
                      bg-pink-50/80 border-pink-200 text-pink-700 hover:bg-pink-100/90"
                @click.prevent
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-current">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.88 1.12a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z"/>
                </svg>
                Instagram
              </button>

              <!-- Facebook -->
              <button
                type="button"
                class="w-full inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200
                      bg-blue-50/80 border-blue-200 text-blue-700 hover:bg-blue-100/90"
                @click.prevent
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-current">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.8V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4V11H8v3h2.7v8h2.8Z"/>
                </svg>
                Facebook
              </button>

              <!-- Workana -->
              <a
                href="https://www.workana.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-200
                      bg-violet-50/90 border-violet-300 text-violet-700 hover:bg-violet-100"
              >
                <span class="material-icons text-base">work</span>
                Workana
              </a>
            </div>
          </div>

          <div class="rounded-3xl border p-5 shadow-sm" :class="themeClasses.panel">
            <p class="text-[11px] uppercase tracking-[0.18em] opacity-60">
              Recomendación
            </p>
            <p class="mt-3 text-sm leading-7 opacity-80">
              Entre más claro describas el contexto, el problema o la necesidad,
              más fácil será orientar una respuesta útil.
            </p>
          </div>
        </aside>

        <!-- Formulario -->
        <div class="xl:col-span-8 rounded-3xl border p-5 sm:p-6 md:p-7 shadow-sm" :class="themeClasses.panel">
          <form class="space-y-5" @submit.prevent="submitForm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="md:col-span-2">
                <label class="block text-sm font-medium mb-2">Nombres y apellidos</label>
                <input
                  v-model.trim="form.fullName"
                  type="text"
                  class="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200"
                  :class="themeClasses.input"
                  placeholder="Escribe tu nombre completo"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">País</label>
                <select
                  v-model="form.country"
                  @change="onCountryChange"
                  class="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200"
                  :class="themeClasses.input"
                >
                  <option value="">Selecciona un país</option>
                  <option
                    v-for="country in countryOptions"
                    :key="country.iso2"
                    :value="country.name"
                  >
                    {{ country.name }}
                  </option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Ciudad principal</label>
                <select
                  v-model="form.city"
                  class="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200"
                  :class="themeClasses.input"
                  :disabled="!form.country"
                >
                  <option value="">Selecciona una ciudad</option>
                  <option
                    v-for="city in cityOptions"
                    :key="city"
                    :value="city"
                  >
                    {{ city }}
                  </option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Indicativo del celular</label>
                <select
                  v-model="form.mobileCountry"
                  class="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200"
                  :class="themeClasses.input"
                >
                  <option value="">Selecciona un país</option>
                  <option
                    v-for="option in mobileCountryOptions"
                    :key="option.iso2"
                    :value="option.iso2"
                  >
                    {{ option.iso2 }} · {{ option.dialCode }} · {{ option.name }}
                  </option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Número de celular</label>
                <input
                  v-model.trim="form.mobileNumber"
                  type="tel"
                  class="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200"
                  :class="themeClasses.input"
                  placeholder="Escribe tu número"
                />
                <p v-if="form.mobileNumber && !isValidMobile" class="mt-2 text-xs text-red-500">
                  Ingresa un número válido.
                </p>
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Correo</label>
                <input
                  v-model.trim="form.email"
                  type="email"
                  class="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200"
                  :class="themeClasses.input"
                  placeholder="tucorreo@ejemplo.com"
                />
                <p v-if="form.email && !isValidEmail" class="mt-2 text-xs text-red-500">
                  Ingresa un correo válido.
                </p>
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Canal preferido para el contacto</label>
                <select
                  v-model="form.preferredChannel"
                  class="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200"
                  :class="themeClasses.input"
                >
                  <option value="">Selecciona una opción</option>
                  <option
                    v-for="option in preferredChannelOptions"
                    :key="option"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium mb-2">
                  ¿Deseas que te contacten o solo quieres dejar un comentario?
                </label>
                <select
                  v-model="form.contactIntent"
                  class="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200"
                  :class="themeClasses.input"
                >
                  <option value="">Selecciona una opción</option>
                  <option
                    v-for="option in contactIntentOptions"
                    :key="option"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium mb-2">Tipo de contacto</label>
                <select
                  v-model="form.contactType"
                  class="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200"
                  :class="themeClasses.input"
                >
                  <option value="">Selecciona una opción</option>
                  <option
                    v-for="option in contactTypeOptions"
                    :key="option"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium mb-2">
                  Describe tu necesidad, problema o comentario
                </label>
                <textarea
                  v-model.trim="form.message"
                  rows="10"
                  class="w-full rounded-2xl border px-4 py-3 text-sm outline-none resize-y transition-colors duration-200"
                  :class="themeClasses.input"
                  placeholder="Cuéntame el contexto, qué necesitas revisar, qué problema estás enfrentando o qué comentario deseas dejar."
                ></textarea>
              </div>
            </div>

            <div class="space-y-3 rounded-2xl border p-4" :class="themeClasses.subpanel">
              <label class="flex items-start gap-3">
                <input v-model="form.authorizeData" type="checkbox" class="mt-1" />
                <span class="text-sm leading-6 opacity-90">
                  Autorizo el tratamiento de mis datos para gestionar esta solicitud.
                </span>
              </label>

              <label class="flex items-start gap-3">
                <input v-model="form.authorizeContact" type="checkbox" class="mt-1" />
                <span class="text-sm leading-6 opacity-90">
                  Autorizo que me contacten por el canal indicado, si corresponde.
                </span>
              </label>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border transition-all duration-200"
                :class="isFormValid ? themeClasses.ctaPrimary : themeClasses.disabledButton"
                :disabled="!isFormValid"
              >
                Enviar
              </button>

              <p class="text-xs sm:text-sm opacity-70">
                El botón se habilita cuando todos los campos están completos y válidos.
              </p>
            </div>


          </form>
        </div>
      </div>
    </section>
  `
});