function getBooksTemplate(index) {
    return `<article class="book_card">
                <h2>${books[index].name}</h2>
                <div class="img_wrapper">
                    <img src="${books[index].img}" alt="Buchcover Iocn">
                </div>
                <div class="book_informations">
                    <div class="price_likes">
                        <p>${new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(books[index].price)}</p>
                        <div class="likes_wrapper">
                            <p>
                                <span id="book_likes_number_${index}">${books[index].likes}</span> 
                                <button type="button" onclick="likeBook(${index})" aria-label="${books[index].liked ? 'Like entfernen' : 'Buch liken'}">
                                    <img src="./assets/icons/heart_${books[index].liked ? "full" : "empty"}.png"alt="" id="books_likes_img_${index}">
                                </button>
                            </p>
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
                    <hr>
                    <div class="comments scrollable-content" id="comments_${index}">
                        ${getComments(index)}
                    </div>
                    <div class="send_comment_wrapper">
                        <label hidden for="input_text_${index}">
                            Kommentar schreiben
                        </label>
                        <input type="text" id="input_text_${index}" name="comment" placeholder="Write a comment..." minlength="3" required class="input_comment">
                        <button onclick="sendComment(${index})" aria-label="Kommentar senden"><img src="./assets/icons/send.png" alt="send icon"></button>
                        <p class="empty_comment" id="empty_comment_${index}">Bitte schreiben Sie min. 3 Zeichen</p>
                        </div> 
                    
                </div>
            </article>`;
}

function getCommentsEmptyTemplate() {
    return `<p class="no_comments">No comments yet</p>`;
}

function getCommentsTemplate(index, i) {
    return `<p><button class="delete_comment_button" onclick="deleteComment(${index},${i})" aria-label="Kommentar löschen"><img src="./assets/icons/bin.png" alt="bin icon for delete"></button> <span>${books[index].comments[i].name}</span>: ${books[index].comments[i].comment}</p>`;
}
