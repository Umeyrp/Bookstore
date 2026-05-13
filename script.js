let books = [
    {
        "name": "Die Geheimnisse des Ozeans",
        "author": "Clara Meer",
        "likes": 1250,
        "liked": true,
        "price": 19.99,
        "publishedYear": 2018,
        "genre": "Fantasy",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
            },
            {
                "name": "Bookworm84",
                "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
            },
            {
                "name": "FantasyFanatic",
                "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
            },
            {
                "name": "SciFiGuru",
                "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
            },
            {
                "name": "NovelLover",
                "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
            }
        ]
    },
    {
        "name": "Der vergessene Pfad",
        "author": "Maximilian Schwarz",
        "likes": 980,
        "liked": false,
        "price": 14.50,
        "publishedYear": 2021,
        "genre": "Fantasy",
        "comments": []
    },
    {
        "name": "Die Farben des Himmels",
        "author": "Laura Blau",
        "likes": 1520,
        "liked": true,
        "price": 22.95,
        "publishedYear": 2019,
        "genre": "Romantik",
        "comments": [
            {
                "name": "LeserPeter",
                "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
            },
            {
                "name": "BookLover21",
                "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
            },
            {
                "name": "FantasyNerd",
                "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
            },
            {
                "name": "SciFiEnthusiast",
                "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
            },
            {
                "name": "ReadingAddict",
                "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
            }
        ]
    },
    {
        "name": "Das Rätsel der Zeit",
        "author": "Alexander Weiss",
        "likes": 750,
        "liked": false,
        "price": 18.00,
        "publishedYear": 2020,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "BuchKenner",
                "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
            },
            {
                "name": "LeseWurm",
                "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
            }
        ]
    },
    {
        "name": "Der letzte Wächter",
        "author": "Sabine Grün",
        "likes": 1300,
        "liked": true,
        "price": 16.75,
        "publishedYear": 2017,
        "genre": "Fantasy",
        "comments": []
    },
    {
        "name": "Im Schatten des Mondes",
        "author": "Philipp Silber",
        "likes": 890,
        "liked": false,
        "price": 12.30,
        "publishedYear": 2022,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "BücherLiebhaber",
                "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
            },
            {
                "name": "Leseratte",
                "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
            }
        ]
    },
    {
        "name": "Jenseits der Sterne",
        "author": "Oliver Schwarz",
        "likes": 1450,
        "liked": true,
        "price": 21.00,
        "publishedYear": 2015,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
            }
        ]
    },
    {
        "name": "Das verborgene Königreich",
        "author": "Elena Gold",
        "likes": 920,
        "liked": false,
        "price": 17.50,
        "publishedYear": 2020,
        "genre": "Fantasy",
        "comments": [
            {
                "name": "Bookworm92",
                "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
            }
        ]
    },
    {
        "name": "Liebe in Zeiten des Krieges",
        "author": "Emilia Rot",
        "likes": 1800,
        "liked": true,
        "price": 19.99,
        "publishedYear": 2016,
        "genre": "Romantik",
        "comments": [
            {
                "name": "Bibliophile23",
                "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
            },
            {
                "name": "StorySeeker",
                "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
            },
            {
                "name": "SciFiExplorer",
                "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
            }
        ]
    }
];

function init() {
    renderBooks();
}

function renderBooks() {
    let books_contentRef = document.getElementById("books_content");
    books_contentRef.value = "";
    for (let i = 0; i < books.length; i++) {
        books_contentRef.innerHTML += getBooksTemplate(i);
    }
}

function getBooksTemplate(index) {
    return `<article class="book_card">
                <h2>${books[index].name}</h2>
                <div class="img_wrapper">
                    <img src="./assets/img/book_img.png" alt="">
                </div>
                <div class="price_likes">
                    <p>${
new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
        books[index].price,
    )}</p>
                    <div class="likes_wrapper">
                        <p>${books[index].likes} <img src="./assets/icons/heart_${books[index].liked == true ? 'full' : 'empty'}.png" alt=""></p>
                    </div>
                </div>
                <div class="information">
                    <div class="information_row">
                        <p>Author:</p>
                        <p>${books[index].author}</p>
                    </div>
                    <div class="information_row">
                        <p>Erscheinungsjahr:</p>
                        <p>${books[index].publishedYear}</p>
                    </div>
                    <div class="information_row">
                        <p>Genre:</p>
                        <p>${books[index].genre}</p>
                    </div>
                </div>
                <div class="comments scrollable-content">
                    <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia porro dicta esse! Deleniti qui doloremque dolor. Hic quam voluptatibus recusandae maxime, fugit laborum animi ducimus, alias ea dolore aut?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia porro dicta esse! Deleniti qui doloremque dolor. Hic quam voluptatibus recusandae maxime, fugit laborum animi ducimus, alias ea dolore aut?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia porro dicta esse! Deleniti qui doloremque dolor. Hic quam voluptatibus recusandae maxime, fugit laborum animi ducimus, alias ea dolore aut?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia porro dicta esse! Deleniti qui doloremque dolor. Hic quam voluptatibus recusandae maxime, fugit laborum animi ducimus, alias ea dolore aut?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia porro dicta esse! Deleniti qui doloremque dolor. Hic quam voluptatibus recusandae maxime, fugit laborum animi ducimus, alias ea dolore aut?
                    </p>
                </div>
                <div class="send_comment_wrapper">
                    <input type="text" name="comment" placeholder="Write a comment..." class="input_comment">
                    <button><img src="./assets/icons/send.png"></button>
                </div>
            </article>`;
}
