//datos de prueba

const videojuegos = [
    { 
        id: 1,
        nombre: "Elden Ring",
        descripcion: "Acción · RPG · PC / PS5 / Xbox",
        raiting: 4.5,
        imagen: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r76.png"
    },
    { 
        id: 2,
        nombre: "God of War",
        descripcion: "Acción · Aventura · PS4 / PS5",
        raiting: 4.9,
        imagen: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6a5r.png"
    },
    { 
        id: 3,
        nombre: "ZeldaTOTK",
        descripcion: "Aventura · Mundo abierto · Switch",
        raiting: 4.7,    
        imagen: "https://images.igdb.com/igdb/image/upload/t_cover_big/co48qj.png"
    },
    {
        id: 4,
        nombre: "Fortnite",
        descripcion: "Battle Royale · Multiplataforma",
        raiting: 4.3,
        imagen: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5d.png"

    }
];

const grid = document.querySelector("#grid-videojuegos");

// Función para pintar las cards
function renderizarVideojuegos(lista) {
    grid.innerHTML = ""; // Limpiar el grid antes de renderizar
    lista.forEach((juego) => {
        // Creamos el html de cada card
        const card = document.createElement("article");
        card.className = "bg-white rounded-xl shadow-sm overflow-hidden border slate-100 flex flex-col";

        // Insertamos el contenido de la card 
        card.innerHTML = ` 
        <img 
            src="${juego.imagen}"
            alt="${juego.nombre}"
            class="h-40 w-full object-cover"
        />
        <div class="p-4 flex flex-col gap-2 flex-1">
            <h3 class="text-lg font-semibold text-gray-800">${juego.nombre}</h3>
            <p class="text-gray-600 text-sm flex-1">${juego.descripcion}</p>
            <div class="mt-4">
                <span class="text-yellow-500 font-bold">⭐ ${juego.raiting}</span>
            </div>
        </div>
        `;

        // Agregamos la card al grid
        grid.appendChild(card);
    });
}

// Llamar la función cuando el documento esté cargado
document.addEventListener('DOMContentLoaded', () => {
    renderizarVideojuegos(videojuegos);
});


