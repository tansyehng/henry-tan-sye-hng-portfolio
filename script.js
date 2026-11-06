const projects = {
  converter: {
    number: "PROJECT / 01 — CONZLAB",
    title: "Bank Statement Converter",
    lede: "I built a document-to-ledger workflow that turns Malaysian bank statements into structured data ready for accounting.",
    challenge: "Accountants had to manually transcribe and check transaction rows from multi-page PDF statements before reconciliation.",
    build: "A Python and Flask parsing service packaged with Docker, paired with a straightforward upload and export interface. It supports major Malaysian banks and produces structured files for accounting workflows, including Odoo.",
    outcome: "Reduced manual transcription time by more than 80%. The tool is now used in Conzlab’s day-to-day accounting and reconciliation process.",
    stack: ["Python", "Flask", "Docker", "PDF parsing", "Hostinger VPS"],
    link: "https://www.conzlab.com/bank-statement-converter"
  },
  tenancy: {
    number: "PROJECT / 02 — CONZLAB",
    title: "Tenancy Agreement Calculator",
    lede: "A clear, interactive estimate of the costs involved in a Malaysian tenancy agreement.",
    challenge: "Renters often need to piece together stamp duty, legal fees, service charges, deposits, and advance rental to understand their upfront costs.",
    build: "A responsive calculator with live results, adjustable inputs, a detailed fee breakdown, and an option to share the estimate through WhatsApp.",
    outcome: "A single page brings the estimate and its assumptions together so users can understand and adjust the numbers before making plans.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    link: "https://www.conzlab.com/tenancy-agreement-calculator"
  },
  huna: {
    number: "PROJECT / 03 — HUNA EMPLOYMENT",
    title: "Find-a-Maid Portal + Manager Tool",
    lede: "A customer-facing search experience connected to a private content manager for the agency team.",
    challenge: "Families needed a practical way to find candidates by age, experience, and care skills. Keeping live profiles updated also meant repeated developer involvement.",
    build: "A searchable and filterable profile portal, supported by data integration and a custom manager CMS where the owner can add, update, or remove profiles and availability without writing code.",
    outcome: "Non-technical staff can maintain the live profile data themselves, removing repetitive developer updates from routine operations.",
    stack: ["JavaScript", "Python", "Node.js", "Web scraping", "Database integration", "Custom CMS"],
    link: "https://huna-employment.com/find-a-maid"
  },
  payment: {
    number: "PROJECT / 04 — HUNA EMPLOYMENT",
    title: "Maid Payment Calculator",
    lede: "A simple pricing breakdown that helps customers understand the costs of hiring domestic help.",
    challenge: "Service fees, upfront payments, monthly salary, and deductions can be hard to compare when spread across separate explanations.",
    build: "A mobile-friendly calculator interface that organizes the inputs and presents an itemized estimate of service costs and payment details.",
    outcome: "Customers can see a transparent fee breakdown in one place, supporting clearer conversations with the agency.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    link: "https://huna-employment.com/maid-payment-calculator"
  },
  rfid: {
    number: "LAB PROJECT / 01 — EMBEDDED SYSTEMS",
    title: "RFID Smart Door Lock",
    lede: "An ESP32-based access control prototype that connects RFID card reading with a physical door lock.",
    challenge: "Explore how a microcontroller and RFID reader can make a physical access workflow responsive to a presented card.",
    build: "The ESP32 handles the project logic, RFID provides the card-based input, and the lock mechanism performs the physical action. The Telegram Bot API is part of the connected project stack.",
    outcome: "A hands-on embedded project combining hardware, access control logic, and connected software in one prototype.",
    stack: ["ESP32", "RFID", "Telegram Bot API"]
  },
  attendance: {
    number: "LAB PROJECT / 02 — WEB APPLICATION",
    title: "Smart Attendance Website",
    lede: "A browser-based attendance system built with HTML, CSS, JavaScript, and MySQL.",
    challenge: "Attendance records need a consistent place to be captured and managed over time.",
    build: "The web interface is built with HTML, CSS, and JavaScript, with MySQL supporting the attendance data behind the application.",
    outcome: "A focused web application that brings attendance capture and record management together in one place.",
    stack: ["HTML", "CSS", "JavaScript", "MySQL"]
  }
};

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}));

const dialog = document.querySelector(".case-dialog");
function showProject(key) {
  const project = projects[key];
  if (!project) return;
  document.querySelector("#dialog-kicker").textContent = project.number;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-lede").textContent = project.lede;
  document.querySelector("#dialog-challenge").textContent = project.challenge;
  document.querySelector("#dialog-build").textContent = project.build;
  document.querySelector("#dialog-outcome").textContent = project.outcome;
  document.querySelector("#dialog-stack").replaceChildren(...project.stack.map((item) => {
    const tag = document.createElement("span");
    tag.textContent = item;
    return tag;
  }));
  const link = document.querySelector("#dialog-link");
  if (project.link) {
    link.href = project.link;
    link.hidden = false;
  } else {
    link.hidden = true;
  }
  dialog.showModal();
}
document.querySelectorAll("[data-open]").forEach((button) => button.addEventListener("click", () => showProject(button.dataset.open)));
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) dialog.close();
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll(".reveal").forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(item);
});


