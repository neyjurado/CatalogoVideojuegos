//datos de prueba

const videojuegos = [
    { 
        id: 1,
        nombre: "Elden Ring",
        descripcion: "Acción · RPG · PC / PS5 / Xbox",
        raiting: 4.5,
        imagen: "https://media.revistagq.com/photos/60c74427ca86b718ddda048c/16:9/w_2560%2Cc_limit/Elden-Ring.jpg"
    },
    { 
        id: 2,
        nombre: "God of War",
        descripcion: "Acción · Aventura · PS4 / PS5",
        raiting: 4.9,
        imagen: "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-listing-thumb-01-ps4-us-12jun17?$facebook$"
    },
    { 
        id: 3,
        nombre: "ZeldaTOTK",
        descripcion: "Aventura · Mundo abierto · Switch",
        raiting: 4.7,    
        imagen: "https://gonintendo.com/attachments/image/55214/file/medium-ecd8f573d463ef8e98a1b5150feb2209.jpg"
    },
    {
        id: 4,
        nombre: "Fortnite",
        descripcion: "Battle Royale · Multiplataforma",
        raiting: 4.3,
        imagen: "https://i.ytimg.com/vi/adGdyCdvKz4/maxresdefault.jpg"

    },
    {
        id: 5,
        nombre: "Call of Duty: Warzone",
        descripcion: "Battle Royale · Multiplataforma",
        raiting: 4.3,
        imagen: "https://i0.wp.com/seven.com.ec/wp-content/uploads/2022/03/0001-call_of_duty_warzone-seven_ecuador-videojuegos-gamers-juegos-0001.jpg?fit=1920%2C1080&ssl=1"
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


