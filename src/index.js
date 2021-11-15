const baseURL = "https://distinct-vaulted-freesia.glitch.me/image";
//to get our data 
const flortagorm = document.querySelector(".image-container")
let imageData;
 
const commentList = document.getElementById("fg-comments");

 
fetch(baseURL)
    .then((res) => res.json())
    .then(json => {
        imageData = json; //saving the data we got back into json instead of html
        renderImage(imageData);
    })
   
document
    .getElementById('like-button')
    .addEventListener("click", incrementLikes) 

document.getElementById("comment-form").addEventListener('submit', addComment);

function renderImage(image) {
    const title = document.getElementById('fg-title');

    title.textContent = image.title;

    document.getElementById('fg-image').src = image.image;
    renderLikes(image.likes);
    renderComments(image.comments);

}

function incrementLikes() {
    
    imageData.likes += 1; 
    renderLikes(imageData.likes);
}

function renderLikes(likes) {
    document.getElementById("fg-likes").textContent = `${likes} likes`;
}
 
function addComment(event) {
    event.preventDefault(); 
    const commentText = event.target.comment.value;
    
    image.Data.comments.push({ content: commentText })
    renderComments(imageData.comments)
    console.log(commentText)
    
}

function renderComments(comments) {
    commentList.innerHTML =  ""; 
    comments.forEach(renderUserComments);
}
function renderUserComments(comment) {
    const li = document.createElement("li");
    li.textContent = comment.content;
    commentList.append(li);
}
// Needs to show for Question #1: 
// fg-title
// fg-image
// likes-section
// fg-comments - nuke out everything