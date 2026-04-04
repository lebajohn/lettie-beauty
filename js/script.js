

document.getElementById("year").textContent = new Date().getFullYear();

const itemsPerPage = 5;
const currentPage = {};

const imageData = {
  earrings: [
    "images3/ear-1.jpg",
    "images3/ear-2.jpg",
    "images3/ear-3.jpg",
    "images3/ear-4.jpg",
    "images3/ear-5.jpg",
    "images3/ear-6.jpg",
    "images3/ear-7.jpg",
    "images3/ear-8.jpg",
    "images3/ear-9.jpg",
    "images3/ear-10.jpg",
    "images3/ear-11.jpg",
    "images3/ear-12.jpg",
    "images3/ear-13.jpg",
    "images3/ear-14.jpg",
    "images3/ear-15.jpg",
    "images3/ear-16.jpg",
    "images3/ear-17.jpg",
    "images3/ear-19.jpg",
    "images3/ear-20.jpg",
    "images3/ear-21.jpg",
    "images3/ear-22.jpg",
    "images3/ear-23.jpg",
    "images3/ear-24.jpg",
    "images3/ear-25.jpg",
    "images3/ear-26.jpg",
    "images3/ear-27.jpg",
    "images3/ear-28.jpg",
    "images3/ear-29.jpg",
    "images3/ear-30.jpg",
    "images3/ear-31.jpg",
    "images3/ear-32.jpg",
    "images3/ear-33.jpg",
    "images3/ear-34.jpg"
  ],

  bangles: [
    "images/bang-1.jpg",
    "images/bang-2.jpg",
    "images/bang-3.jpg",
    "images/bang-4.jpg",
    "images/bang-5.jpg",
    "images/bang-6.jpg",
    "images/bang-7.jpg",
    "images/bang-8.jpg",
    "images/bang-9.jpg",
    "images/bang-10.jpg",
    "images/bang-11.jpg",
    "images/bang-12.jpg",
    "images/bang-13.jpg",
    "images/bang-14.jpg",
    "images/bang-15.jpg",
    "images/bang-16.jpg"
  ],

   hairclips: [
    "images2/hair-1.jpg",
    "images2/hair-2.jpg",
    "images2/hair-3.jpg",
    "images2/hair-4.jpg",
    "images2/hair-5.jpg",
    "images2/hair-6.jpg",
    "images2/hair-7.jpg",
    "images2/hair-8.jpg",
    "images2/hair-9.jpg",
    "images2/hair-10.jpg",
    "images2/hair-11.jpg",
    "images2/hair-12.jpg",
    "images2/hair-13.jpg",
    "images2/hair-15.jpg",
    "images2/hair-16.jpg",
    "images2/hair-17.jpg",
    "images2/hair-18.jpg",
    "images2/hair-19.jpg",
    "images2/hair-20.jpg"
  ],

   lipoils: [
    "images2/lip-1.jpg",
    "images2/lip-2.jpg",
    "images2/lip-3.jpg",
    "images2/lip-4.jpg",
    "images2/lip-5.jpg",
  ],

  necklaces: [
    "images1/neck-1.jpg",
    "images1/neck-2.jpg",
    "images1/neck-3.jpg",
    "images1/neck-4.jpg",
    "images1/neck-5.jpg",
    "images1/neck-6.jpg",
    "images1/neck-7.jpg",
    "images1/neck-8.jpg",
    "images1/neck-9.jpg",
    "images1/neck-10.jpg",
    "images1/neck-11.jpg",
    "images1/neck-12.jpg",
    "images1/neck-13.jpg",
    "images1/neck-14.jpg",
    "images1/neck-15.jpg",
    "images1/neck-16.jpg"
  ],

  perfumes: [
    "images1/per-1.jpg",
    "images1/per-2.jpg",
    "images1/per-3.jpg",
    "images1/per-4.jpg",
    "images1/per-5.jpg",
    "images1/per-6.jpg",
    "images1/per-7.jpg",
    "images1/per-8.jpg",
  ]
};

function loadCategory(category, page = 1) {
  const container = document.getElementById(`${category}-container`);
  const pagination = document.getElementById(`${category}-pagination`);
  const backBtn = document.getElementById(`${category}-back`);

  const images = imageData[category];

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  container.innerHTML = "";

  images.slice(start, end).forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    container.appendChild(img);
  });

  // Pagination
  const totalPages = Math.ceil(images.length / itemsPerPage);
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("span");
    btn.textContent = i;
    btn.classList.add("page-number");

    if (i === page) btn.classList.add("active");

    btn.onclick = () => loadCategory(category, i);

    pagination.appendChild(btn);
  }

  // Back button
  backBtn.style.display = page > 1 ? "inline-block" : "none";

  currentPage[category] = page;
}

function nextPage(category) {
  const totalPages = Math.ceil(imageData[category].length / itemsPerPage);
  let page = currentPage[category] || 1;

  if (page < totalPages) {
    loadCategory(category, page + 1);
  }
}

function prevPage(category) {
  let page = currentPage[category] || 1;

  if (page > 1) {
    loadCategory(category, page - 1);
  }
}

// INITIAL LOAD
loadCategory("earrings");
loadCategory("bangles");
loadCategory("hairclips");
loadCategory("lipoils");
loadCategory("necklaces");
loadCategory("perfumes");

function toggleMenu() {
  const nav = document.getElementById("nav-links");
  const toggle = document.getElementById("menu-toggle");

  nav.classList.toggle("active");

  // Change icon ☰ ↔ ✖
  if (nav.classList.contains("active")) {
    toggle.textContent = "✖";
  } else {
    toggle.textContent = "☰";
  }
}

const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

faders.forEach(el => observer.observe(el));

const navLinks = document.querySelectorAll("#nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("nav-links");
    const toggle = document.getElementById("menu-toggle");

    nav.classList.remove("active");
    toggle.textContent = "☰";
  });
});