const articles = [
  {
    title: "Pemerintah Resmi Umumkan Kebijakan Baru di Sektor Pendidikan",
    category: "Nasional",
    excerpt: "Kebijakan baru ini diharapkan dapat meningkatkan kualitas pendidikan di seluruh Indonesia...",
    image: "https://source.unsplash.com/600x400/?education,indonesia",
    content: "Kebijakan ini mencakup peningkatan kurikulum, pelatihan guru, dan distribusi fasilitas ke daerah tertinggal."
  },
  {
    title: "Teknologi AI Diprediksi Mendorong Ekonomi Digital Indonesia",
    category: "Teknologi",
    excerpt: "Dengan perkembangan pesat teknologi kecerdasan buatan, Indonesia siap memasuki era baru ekonomi digital...",
    image: "https://source.unsplash.com/600x400/?technology,ai",
    content: "AI memungkinkan efisiensi berbagai sektor mulai dari kesehatan, finansial, hingga pendidikan dan industri kreatif."
  },
  {
    title: "Timnas U-23 Siap Hadapi Final Piala Asia Malam Ini",
    category: "Olahraga",
    excerpt: "Pertandingan besar akan berlangsung malam ini saat Timnas U-23 bertemu dengan tim kuat dari Jepang...",
    image: "https://source.unsplash.com/600x400/?football,indonesia",
    content: "Pelatih menyatakan kesiapan penuh tim dan optimisme tinggi untuk memenangkan trofi bergengsi tersebut."
  }
];

function loadArticles(filtered = null) {
  const container = document.getElementById("articles");
  container.innerHTML = "";
  const data = filtered || articles;

  data.forEach(article => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${article.image}" alt="${article.title}" />
      <div class="card-body">
        <span class="category">${article.category}</span>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <a href="detail.html?title=${encodeURIComponent(article.title)}&image=${encodeURIComponent(article.image)}&content=${encodeURIComponent(article.content)}">Baca Selengkapnya</a>
      </div>
    `;
    container.appendChild(card);
  });
}

function searchArticles() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(keyword) ||
    article.excerpt.toLowerCase().includes(keyword)
  );
  loadArticles(filtered);
}

window.onload = () => loadArticles();
