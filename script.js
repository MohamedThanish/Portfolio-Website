document.getElementById('contactMeBtn').addEventListener('click', function () {
    document.getElementById('profile-card').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('profile-card').style.display = 'none';
});
document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navList = document.querySelector('.nav-list');

        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('show');
        });
    });
