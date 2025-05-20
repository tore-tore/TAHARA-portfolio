document.addEventListener("DOMContentLoaded", () => {
  // フェードイン対象の要素を取得（.fade-in および .work-card）
  const fadeElems = document.querySelectorAll('.fade-in, .work-card');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // 一度表示されたら監視解除
      }
    });
  }, {
    threshold: 0.2  // 少し早めに発火
  });

  fadeElems.forEach(elem => observer.observe(elem));

  // ナビバーに影をつける
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 10);
    }
  });

  // フォーム読み込み後にローディングテキスト非表示
  const iframe = document.querySelector(".form-wrapper iframe");
  const loadingText = document.getElementById("form-loading");
  if (iframe && loadingText) {
    iframe.addEventListener("load", () => {
      loadingText.style.display = "none";
    });
  }
});
