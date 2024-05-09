document.addEventListener("DOMContentLoaded", function() {
    var url = window.location.href;
    var activeLink;
  
    if (url.includes("beranda")) {
      activeLink = document.getElementById("beranda");
    } else if (url.includes("riwayat")) {
      activeLink = document.getElementById("riwayat");
    } else if (url.includes("rekomendasi")) {
      activeLink = document.getElementById("rekomendasi");
    } else if (url.includes("obrolan")) {
      activeLink = document.getElementById("obrolan");
    } else {
      activeLink = document.getElementById("pengaturan");
    }
  
    activeLink.classList.add("aktif");
});

