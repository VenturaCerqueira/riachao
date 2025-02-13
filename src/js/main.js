// Função para carregar o conteúdo do header e footer
document.addEventListener('DOMContentLoaded', function() {
    // Carrega o header
    fetch('src/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o header:', error));

    // Carrega o footer
    fetch('src/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
});

// Função para adicionar/remover classe 'fixed-top' com base no scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('fixed-top', 'scrolled');
    } else {
        navbar.classList.remove('fixed-top', 'scrolled');
    }
}

// Adiciona o evento de scroll para a navbar
window.addEventListener('scroll', handleNavbarScroll);

// Função para atualizar a data e a hora
function updateDateTime() {
    const now = new Date();

    // Formatação da Data
    const optionsDate = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('pt-BR', optionsDate);

    // Formatação do Horário
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = now.toLocaleTimeString('pt-BR', optionsTime);

    // Atualiza os elementos na página
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');

    if (dateElement.textContent !== formattedDate) {
        dateElement.textContent = formattedDate;
    }

    if (timeElement.textContent !== formattedTime) {
        timeElement.textContent = formattedTime;
    }
}

// Atualiza o relógio a cada segundo sem piscar
setInterval(updateDateTime, 1000);
updateDateTime();

// Carregar o conteúdo do header e footer
document.getElementById("header-container").innerHTML = fetch("../path/to/header.html").then(response => response.text());
document.getElementById("footer-container").innerHTML = fetch("../path/to/footer.html").then(response => response.text());
