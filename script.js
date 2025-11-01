// Hiệu ứng xuất hiện khi cuộn trang
const fadeEls = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Tải danh sách bài viết
fetch("posts.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("posts");
    data.forEach(post => {
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `<h3>${post.tieuDe}</h3><p>${post.noiDung}</p>`;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.log("Lỗi khi tải bài viết:", err);
  });
