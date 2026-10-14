
const tombolTema = document.getElementById("tombolTema");
const formKontak = document.getElementById("formKontak");
const pesanStatus = document.getElementById("pesanStatus");

// Mengganti tema terang dan gelap
tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-gelap");

    if (document.body.classList.contains("tema-gelap")) {
        tombolTema.textContent = "Tema Terang";
    } else {
        tombolTema.textContent = "Tema Gelap";
    }
});

// Memeriksa formulir sebelum dikirim
formKontak.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    // Memeriksa apakah semua kolom telah diisi
    if (nama === "" || email === "" || pesan === "") {
        pesanStatus.textContent = "Semua kolom wajib diisi.";
        return;
    }

    // Memeriksa format email sesuai aturan input type="email"
    if (!formKontak.checkValidity()) {
        formKontak.reportValidity();
        return;
    }

    // Menampilkan pesan tanpa memuat ulang halaman
    pesanStatus.textContent =
        "Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.";

    formKontak.reset();
});
