const THEMES = {
  dark: {
    body: "bg-slate-900 text-slate-200",
    sidebar: "bg-slate-800 border-slate-700",
    topbar: "bg-slate-900 border-slate-700",
    panel: "bg-slate-800 border-slate-700",
    subpanel: "bg-slate-900/60 border-slate-700",
    border: "border-slate-600",
    badge: "bg-slate-900/60 border-slate-700 text-slate-200",
    button: "bg-slate-800 border-slate-700 text-slate-200",
    buttonHover: "hover:bg-slate-700",
    active: "bg-slate-700 text-white",
    inactive: "text-slate-300 hover:bg-slate-700/70 hover:text-white",
    select: "bg-slate-800 border-slate-700 text-slate-200",
    ctaPrimary: "bg-sky-500 border-sky-500 text-white hover:bg-sky-400",
    ctaSecondary: "bg-transparent border-slate-600 text-slate-200 hover:bg-slate-700",
    input: "bg-slate-900 border-slate-700 text-slate-200 placeholder-slate-400",
    disabledButton: "bg-slate-700 border-slate-700 text-slate-400 cursor-not-allowed opacity-70",
    input: "bg-slate-900 border-slate-700 text-slate-200 placeholder-slate-400",
    disabledButton: "bg-slate-700 border-slate-700 text-slate-400 cursor-not-allowed opacity-70"
  },

  light: {
    body: "bg-slate-100 text-slate-900",
    sidebar: "bg-white border-slate-300",
    topbar: "bg-white border-slate-300",
    panel: "bg-white border-slate-300",
    subpanel: "bg-slate-50 border-slate-200",
    border: "border-slate-300",
    badge: "bg-slate-50 border-slate-300 text-slate-800",
    button: "bg-white border-slate-300 text-slate-900",
    buttonHover: "hover:bg-slate-100",
    active: "bg-slate-200 text-slate-900",
    inactive: "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
    select: "bg-white border-slate-300 text-slate-900",
    ctaPrimary: "bg-blue-600 border-blue-600 text-white hover:bg-blue-500",
    ctaSecondary: "bg-transparent border-slate-300 text-slate-900 hover:bg-slate-100",
    input: "bg-white border-slate-300 text-slate-900 placeholder-slate-400",
    disabledButton: "bg-slate-200 border-slate-200 text-slate-500 cursor-not-allowed opacity-80",
    input: "bg-white border-slate-300 text-slate-900 placeholder-slate-400",
    disabledButton: "bg-slate-200 border-slate-200 text-slate-500 cursor-not-allowed opacity-80"
  },

  graphite: {
    body: "bg-[#0b1120] text-slate-100",
    sidebar: "bg-[#111827] border-slate-700",
    topbar: "bg-[#0b1120] border-slate-700",
    panel: "bg-[#1b2433] border-slate-700",
    subpanel: "bg-[#111827] border-slate-700",
    border: "border-slate-600",
    badge: "bg-[#111827] border-slate-700 text-slate-100",
    button: "bg-[#1b2433] border-slate-700 text-slate-100",
    buttonHover: "hover:bg-[#243041]",
    active: "bg-[#243041] text-white",
    inactive: "text-slate-300 hover:bg-[#243041] hover:text-white",
    select: "bg-[#1b2433] border-slate-700 text-slate-100",
    ctaPrimary: "bg-blue-500 border-blue-500 text-white hover:bg-blue-400",
    ctaSecondary: "bg-transparent border-slate-600 text-slate-100 hover:bg-[#243041]",
    input: "bg-[#111827] border-slate-700 text-slate-100 placeholder-slate-400",
    disabledButton: "bg-[#243041] border-slate-700 text-slate-400 cursor-not-allowed opacity-70",
    input: "bg-[#111827] border-slate-700 text-slate-100 placeholder-slate-400",
    disabledButton: "bg-[#243041] border-slate-700 text-slate-400 cursor-not-allowed opacity-70",
  }
};

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}