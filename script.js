document.addEventListener('DOMContentLoaded', () => {
    // Funcția pentru a copia adresa serverului
    const copyButton = document.getElementById('copyBtn');
    
    if (copyButton) {
        copyButton.addEventListener('click', () => {
            const serverAddress = 'play.voidcraft.ro';
            navigator.clipboard.writeText(serverAddress)
                .then(() => {
                    copyButton.textContent = 'Copiat!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copiază adresa';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Eroare la copiere:', err);
                    alert('Copierea a eșuat. Te rog, copiază adresa manual: ' + serverAddress);
                });
        });
    }

    // Informații despre membrii staff-ului
    const staffMembers = [
        {
            name: "Vladuutz",
            role: "FONDATOR",
            description: "Viziunea din spatele VoidCraft. Responsabil cu dezvoltarea generală și strategia serverului."
        },
        {
            name: "Vladuutz", 
            role: "ADMINISTRATOR",
            description: "Se asigură că regulile sunt respectate și ajută jucătorii cu probleme tehnice."
        },
        {
            name: "Vladuutz", 
            role: "ADMINISTRATOR",
            description: "Se asigură că regulile sunt respectate și ajută jucătorii cu probleme tehnice."
        },
        {
            name: "Vladuutz",
            role: "SUPPORTER",
            description: "Ajută la rezolvarea problemelor jucătorilor și răspunde la întrebările de pe Discord."
        }
    ];

    // Generează cardurile de staff dinamic
    const staffGrid = document.querySelector('.staff-grid');

    staffMembers.forEach(member => {
        const staffCard = document.createElement('div');
        staffCard.className = 'staff-card';

        const skinURL = `https://visage.surgeplay.com/bust/300/${member.name}`;

        staffCard.innerHTML = `
            <div class="staff-skin">
                <img src="${skinURL}" alt="${member.name}'s Minecraft skin">
            </div>
            <div class="staff-info">
                <h3 class="staff-name">${member.name}</h3>
                <span class="staff-role">${member.role}</span>
                <p class="staff-description">${member.description}</p>
            </div>
        `;
        staffGrid.appendChild(staffCard);
    });

    // Logica pentru butonul "înapoi la început"
    const backToTopBtn = document.getElementById('backToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Logica pentru meniul burger
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.getElementById('navLinks');
    
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});