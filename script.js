// Dados dos Estilos Arquitetônicos
const estilosArquitetura = [
    {
        titulo: "Modernismo Contemporâneo",
        descricao: "Linhas retas, integração com a natureza e uso abundante de vidro e concreto aparente. Foco na funcionalidade.",
        imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Industrial Chic",
        descricao: "Estruturas expostas, tijolos aparentes, metais pretos e pé-direito duplo. A beleza crua da construção.",
        imagem: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Minimalismo Escandinavo",
        descricao: "Paleta de cores neutras, muita luz natural e materiais orgânicos. A sofisticação através da simplicidade.",
        imagem: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Neoclássico Atualizado",
        descricao: "A grandiosidade das colunas e simetria do passado, revisitadas com tecnologias e conforto do presente.",
        imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Arquitetura Sustentável",
        descricao: "Projetos eco-eficientes, captação de água, energia solar e telhados verdes. Respeito total ao meio ambiente.",
        imagem: "https://images.unsplash.com/photo-1518005052357-e98475018297?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Design de Interiores",
        descricao: "Curadoria completa de mobiliário, texturas e iluminação para transformar a casa em um lar.",
        imagem: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
];

// Função para renderizar os cards
function carregarEstilos() {
    const container = document.getElementById('estilos-container');
    container.innerHTML = '';

    estilosArquitetura.forEach(estilo => {
        const card = document.createElement('div');
        card.classList.add('card-estilo');

        card.innerHTML = `
            <div class="img-estilo" style="background-image: url('${estilo.imagem}')"></div>
            <div class="info-estilo">
                <h3>${estilo.titulo}</h3>
                <p>${estilo.descricao}</p>
            </div>
        `;
        
        // Adiciona um evento de clique simples
        card.addEventListener('click', () => {
            alert(`Você tem interesse no estilo: ${estilo.titulo}? \nEntre em contato para agendar uma consultoria.`);
        });

        container.appendChild(card);
    });
}

// Efeito de rolagem no Header (Fica mais opaco ao rolar)
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        header.style.padding = "1rem 0";
    } else {
        header.style.boxShadow = "none";
        header.style.padding = "0"; // Volta ao original (controlado pelo CSS do nav)
    }
});

// Inicialização
window.onload = carregarEstilos;