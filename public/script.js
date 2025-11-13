//selecciones del dom

const grid = document.querySelector("#grid-videojuegos");
const estadoCarga = document.querySelector("#estado-carga");
const estadoError = document.querySelector("#estado-error");
const inputBusqueda = document.querySelector('input[placeholder="Buscar videojuego..."]');





//local data de videojuegos si la api falla

const videojuegos = [
    { 
        title: "Elden Ring",
        thumb: "https://media.revistagq.com/photos/60c74427ca86b718ddda048c/16:9/w_2560%2Cc_limit/Elden-Ring.jpg",
        normalPrice: "_",
        salePrice: "_",
        savings: null,
    },
    
    { 
        title: "God of War",
        thumb: "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-listing-thumb-01-ps4-us-12jun17?$facebook$",
        normalPrice: "_",
        salePrice: "_",
        savings: null,
    }
];


// Función para pintar las cards
function renderizarVideojuegos(lista) {
    grid.innerHTML = ""; // Limpiar el grid antes de renderizar
    lista.forEach((juego) => {

        
        const title = juego.title || juego.external || "Juego";
        const thumb = juego.thumb || juego.thumbnail || "";
        
        //precios y ahorro con fallbacks
        //usamos ?? para valores nulos o indefinidos
        const normal = juego.normalPrice ??"_";
        const oferta = juego.salePrice ?? juego.cheapest ??"_";

        //ahorro redondeado si existe o null si no existe
        const ahorro = juego.savings ? Math.round(juego.savings) : null; 



        // Creamos el html de cada card
        const card = document.createElement("article");
        card.className = "bg-white rounded-xl shadow-sm overflow-hidden border slate-100 flex flex-col";

        // Insertamos el contenido de la card 
        card.innerHTML = ` 
        <img 
            src="${thumb}"
            alt="${title}"
            class="h-40 w-full object-cover"
        />
        <div class="p-4 flex flex-col gap-2 flex-1">
            <h3 class="text-lg font-semibold text-gray-800">${title}</h3>


            <p class="text-xs text-slate-500">
            Precio: ${
                normal && normal !== "_" ? ` <s>$${normal}</s> ` : "_"                
            }
            ${
                oferta && oferta !== "_"
                    ? ` . <span class="front-semiboald text-slate-900">$${oferta}</span> `
                    : "_"
                }
                ${ahorro ?` . Ahorro ${ahorro}%` : ""}
            </p>

            <button class="mt-2 w-full bg-slate-900 text-white py-2 rounded-lg text-sm haver: bg-slate-700 transition-colors">
            ver detalle
            </button>
        </div>
        `;


    

        // Agregamos la card al grid
        grid.appendChild(card);
    });
}

//cargar y renderizar videojuegos al inicio
//async significa que la funcion maneja operaciones asincronas

async function cargarVideoJuegosInicial(){
    estadoCarga.classList.remove("hidden");
    estadoError.classList.add("hidden");
    try {
        const url = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";
        const resp = await fetch(url);//espera la respuesta de la api
        if (!resp.ok){
            throw new Error ("error en la respuesta de la api")
        }
        const data = await resp.json(); //espera la convercion a json

        //esto lo guarda en un cache 
        window._juegosCache = data;
        renderizarVideojuegos(data);
    } catch (e){
        console.error("error al cargar CheapShark", e);
        estadoError.classList.remove("hidden");
        renderizarVideojuegos(videojuegos);
    } finally{
        estadoCarga.classList.add("hidden");
    }
} 
cargarVideoJuegosInicial();


// Llamar la función cuando el documento esté cargado
document.addEventListener('DOMContentLoaded', () => {
    cargarVideoJuegosInicial();
});




