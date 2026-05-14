function getBooksTemplate(index) {
    const formattedPrice = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(books[index].price);
    const heartIcon = books[index].liked ? "full" : "empty";

    return `<article class="book_card">
                <h2>${books[index].name}</h2>
                <div class="img_wrapper">
                    <img src="./assets/img/book.png" alt="">
                </div>
                <div class="book_informations">
                    <div class="price_likes">
                        <p>${formattedPrice}</p>
                        <div class="likes_wrapper">
                            <p><span id="book_likes_number_${index}">${books[index].likes}</span> <img onclick="likeBook(${index})" id="books_likes_img_${index}" src="./assets/icons/heart_${heartIcon}.png" alt=""></p>
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
                        ${getCommentsTemplateById(index)}
                    </div>
                    <div class="send_comment_wrapper">
                        <input type="text" id="input_text_${index}" name="comment" placeholder="Write a comment..." class="input_comment">
                        <button onclick="sendComment(${index})"><img src="./assets/icons/send.png"></button>
                    </div> 
                </div>
            </article>`;
}

function getCommentsTemplateById(index) {
    if (books[index].comments.length > 0) {
        let comments = "";
        for (let i = 0; i < books[index].comments.length; i++) {
            comments += `<p><strong>${books[index].comments[i].name}</strong>: ${books[index].comments[i].comment}</p>`;
        }
        return comments;
    }
    return `<p>No comments yet</p>`;
}