// Fungsi untuk menampilkan halaman
function showPage(pageId) {
    // Sembunyikan semua halaman
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });
    
    // Tampilkan halaman yang dipilih
    var selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

// Fungsi untuk quiz
function checkAnswer(choice) {
    var result = document.getElementById('quiz-result');
    if (choice === 1) { // Jawaban benar: 7 rukun
        result.innerHTML = '🎉 Benar! Ada 5 rukun shalat. Kerjakan lagi yuk!';
        result.style.color = 'green';
    } else {
        result.innerHTML = '😊 Belum tepat. Jawaban benar adalah 5 rukun. Coba lagi!';
        result.style.color = 'red';
    }
}

// Mulai di halaman beranda
showPage('home');