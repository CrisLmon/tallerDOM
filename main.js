let padre = document.querySelector(".padre")

async function consulta() {
    const consult = await fetch("https://api.rawg.io/api/games?key=d5418abfa6cc4ac8b9b1abd51ef2f0e6&page_size=30&page=30");
    const datos = await consult.json();
    datos.results.forEach((juegos) => {

        const card = document.createElement("article");
        const sectionimg = document.createElement("section");
        const img = document.createElement("img");
        img.src = `${juegos.background_image}`;
        
        const sectioninfo = document.createElement("section");
        const title = document.createElement("h2");
        title.innerHTML = `${juegos.name}`

        const plataformas = document.createElement("h3");
        juegos.platforms.forEach(plataformis => {
            plataformas.innerText += `${plataformis.platform.name}`
        });

        const calificaciones = document.createElement("p");
        calificaciones.innerText = `${juegos.rating}`

        padre.appendChild(card)
        card.appendChild(sectionimg)
        sectioninfo.appendChild(img)

        card.appendChild(sectioninfo)
        sectioninfo.appendChild(title)
        sectioninfo.appendChild(plataformas)
        sectioninfo.appendChild(calificaciones)
    })
}

consulta()