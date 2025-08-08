const button = document.querySelector('.sidebar-button');
const sidebar = document.querySelector('.sidebar');

button.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});