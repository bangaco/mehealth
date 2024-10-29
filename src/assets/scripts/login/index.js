document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();


    const predefinedEmail = "admin@gmail.com";
    const predefinedPassword = "admin123";
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();


    if (emailInput === predefinedEmail && passwordInput === predefinedPassword) {

        Swal.fire({
            title: 'Login berhasil!',
            text: 'Selamat datang, ' + emailInput,
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            // Arahkan pengguna ke halaman index.html
            window.location.href = 'index.html';
        });
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Nama pengguna atau kata sandi salah!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});