/**
 * Portfolio interactions — no frameworks.
 *
 * Update PROFILE.github and PROFILE.email before publishing.
 * Drop your PDF at assets/resume/Devyani_Thokal_Resume.pdf
 */
const PROFILE = {
  linkedin: "https://www.linkedin.com/in/devyani-thokal",
  github: "https://github.com/devyanit05",
  email: "devyaninthokal@gmail.com",
};

const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

function applyProfileLinks() {
  document.querySelectorAll('[data-profile="github"]').forEach((link) => {
    link.href = PROFILE.github;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  document.querySelectorAll('[data-profile="email"]').forEach((link) => {
    link.href = `mailto:${PROFILE.email}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  navMenu.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

function closeMenu() {
  setMenuOpen(false);
}

function initMobileNav() {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();
      const offset = header.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset + 1;

      window.scrollTo({
        top,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    });
  });
}

function getActiveSectionId() {
  const offset = header.offsetHeight + 96;
  const scrollPosition = window.scrollY + offset;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  if (window.scrollY >= maxScroll - 8) {
    return sections[sections.length - 1].id;
  }

  let activeId = sections[0].id;

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      activeId = section.id;
    }
  });

  return activeId;
}

function updateActiveNav() {
  const activeId = getActiveSectionId();

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
  });
}

function onScroll() {
  setHeaderState();
  updateActiveNav();
}

function initActiveNav() {
  updateActiveNav();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateActiveNav);
}

function revealIfInView(item) {
  const rect = item.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealItems.forEach((item, index) => {
    if (revealIfInView(item)) {
      item.classList.add("is-visible");
      return;
    }

    item.style.transitionDelay = `${Math.min(index % 4, 3) * 60}ms`;
    observer.observe(item);
  });
}

applyProfileLinks();
initMobileNav();
initSmoothScroll();
initActiveNav();
initReveal();
onScroll();
