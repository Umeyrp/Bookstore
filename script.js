function init() {
    getFromLocalStorage();
    renderBooks();
}

function renderBooks() {
    const books_contentRef = document.getElementById("books_content");
    books_contentRef.innerHTML = "";
    let content = "";
    for (let i = 0; i < books.length; i++) {
        content += getBooksTemplate(i);
    }
    books_contentRef.innerHTML = content;
}

function sendComment(index) {
    let inputRef = document.getElementById("input_text_" + index);
    let inputValue = inputRef.value.trim();
    let commentsRef = document.getElementById("comments_" + index);
    let username = "Muhammed";
    if (validateComment(index, inputRef, inputValue)) {
        books[index].comments.push({ "name": username, "comment": inputValue });
        renderComments(index, inputRef);
        saveInLocalStorage();
        commentsRef.scrollTop = commentsRef.scrollHeight;
    }
}

function validateComment(index, inputRef, inputValue) {
    let emptyCommentWarning = document.getElementById("empty_comment_" + index);
    if (inputValue !== "" && inputValue.length > 2) {
        inputRef.value = "";
        hideAllEmptyCommentWarning();
        return true;
    } else {
        hideAllEmptyCommentWarning();
        emptyCommentWarning.style.display = "block";
    }
}

function hideAllEmptyCommentWarning() {
    document.querySelectorAll('.empty_comment').forEach(el => {
        el.style.display = 'none';
    });
}

function renderComments(index) {
    let comments = getComments(index);
    let commentsRef = document.getElementById("comments_" + index)
    commentsRef.innerHTML = comments;
}

function getComments(index) {
    if (books[index].comments.length > 0) {
        let comments = "";
        for (let i = 0; i < books[index].comments.length; i++) {
            comments += getCommentsTemplate(index, i);
        }
        return comments;
    }
    return getCommentsEmptyTemplate();
}

function deleteComment(book_index, comment_index) {
    books[book_index].comments.splice(comment_index, 1);
    saveInLocalStorage();
    renderComments(book_index);
}

function renderLikes(index) {
    let likesRef = document.getElementById("book_likes_number_" + index);
    let likesImgRef = document.getElementById("books_likes_img_" + index);

    likesRef.textContent = books[index].likes;
    likesImgRef.setAttribute("src", `./assets/icons/heart_${books[index].liked == true ? "full" : "empty"}.png`)
}

function likeBook(index) {
    if (!books[index].liked) {
        books[index].liked = true;
        books[index].likes += 1;
    } else {
        books[index].liked = false;
        books[index].likes -= 1;
    }
    renderLikes(index);
    saveInLocalStorage();
}

function getFromLocalStorage() {
    let booksLocal = JSON.parse(localStorage.getItem("books"));
    if (booksLocal) {
        books = booksLocal;
    }
}

function saveInLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}