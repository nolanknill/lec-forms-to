const tvShows = [
    {
        title: "Suits",
        "number-of-episodes": 100,
        genres: ["drama", "legal"],
        numberOfSeasons: 10,
        castMembers: ["Gabriel Macht", "Patrick J. Adams", "Meghan, Duchess of Sussex"],
        year: 2011,
        rating: 8,
        imageSrc: "/assets/images/suits.jpg"
    },
    {
        title: "Game of Thrones",
        "number-of-episodes": 60,
        genres: ["fantasy", "disappointing finish"],
        numberOfSeasons: 8,
        castMembers: ["Thor Bjornsson", "Kit Harrington",  "Emilia Clarke"],
        year: 2011,
        rating: 2,
        imageSrc: "/assets/images/game-of-thrones.jpeg"
    },
    {
        title: "Teletubbies",
        "number-of-episodes": 365,
        genres: ["educational", "children"],
        numberOfSeasons: 2,
        castMembers: ["Red", "Yellow",  "Green", "Purple"],
        year: 2001,
        rating: 8.91,
        imageSrc: "/assets/images/teletubbies.jpeg"
    },
    {
        title: "Rick & Morty",
        rating: 10,
        imageSrc: "/assets/images/rick-and-morty.png"
    }
]

/* Add all TV Shows to the tv-shows element */
const tvShowsEl = document.getElementById("tv-shows");
for (let i = 0; i <= tvShows.length - 1; i++) {
    const showEl = createTvShowElement(tvShows[i]);

    showEl.addEventListener("click", function(event) {
        const favShow = document.querySelector(".tv-show--favourited");

        if (favShow === null) {
            event.target.classList.add("tv-show--favourited");
        } else {
            favShow.classList.remove("tv-show--favourited");

            if (favShow !== event.target) {
                event.target.classList.add("tv-show--favourited");
            }
        }
    })

    tvShowsEl.appendChild(showEl);
}

/*
    Input: show will contain { Title, Rating, Image }
    
    Output: Element object that looks like:
    <article class="tv-show">
        <h2 class="tv-show__title">${show.title}</h2>
        <span class="tv-show__rating">Rating: ${show.rating}</span>
        <img class="tv-show__cover" src="${show.imageSrc}" alt="${show.title} Cover" />
    </article>
*/
function createTvShowElement(show) {
    const showEl = document.createElement("article");
    showEl.classList.add("tv-show");

    const titleEl = document.createElement("h2");
    titleEl.classList.add("tv-show__title");
    titleEl.innerText = show.title;

    const ratingEl = document.createElement("span");
    ratingEl.classList.add("tv-show__rating");
    ratingEl.innerText = "Rating: " + show.rating;
    
    const coverEl = document.createElement("img");
    coverEl.classList.add("tv-show__cover");
    coverEl.setAttribute("src", show.imageSrc);
    coverEl.setAttribute("alt", show.title + " Cover");
    
    showEl.appendChild(titleEl);
    showEl.appendChild(ratingEl);
    showEl.appendChild(coverEl);

    return showEl;
}