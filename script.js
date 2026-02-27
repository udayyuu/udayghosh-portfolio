// ===== Theme (light/dark) =====
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.querySelector(".theme-icon");
const STORAGE_KEY = "uday_theme";

function setTheme(mode){
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem(STORAGE_KEY, mode);
  if(themeIcon) themeIcon.textContent = mode === "light" ? "🌞" : "🌙";
}

const saved = localStorage.getItem(STORAGE_KEY);
if(saved){
  setTheme(saved);
} else {
  // Default: dark (tech vibe), but respect system pref if you want:
  // const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  // setTheme(prefersLight ? "light" : "dark");
  setTheme("dark");
}

if(themeToggle){
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current === "light" ? "dark" : "light");
  });
}

// ===== Mobile nav =====
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if(navToggle && navMenu){
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close on link click
  navMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close if clicking outside
  document.addEventListener("click", (e) => {
    if(!navMenu.contains(e.target) && !navToggle.contains(e.target)){
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ===== Footer year =====
const year = document.getElementById("year");
if(year) year.textContent = new Date().getFullYear();

// ===== Mailto form (no backend) =====
const form = document.getElementById("mailtoForm");
if(form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value?.trim() || "";
    const from = document.getElementById("from")?.value?.trim() || "";
    const message = document.getElementById("message")?.value?.trim() || "";

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${from})\n\n${message}`);
    window.location.href = `mailto:udayghosh.isine@gmail.com?subject=${subject}&body=${body}`;
  });
}
