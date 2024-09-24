// GLOBAL VARIABLES

const likeButtonElement = document.querySelector("#like-button")
const dislikeButtonElement = document.querySelector("#dislike-button")
const commentButtonElement = document.querySelector("#comment-button")
const commentListElement = document.querySelector("ul")
const inputElement = document.querySelector("input")

let likesCount = 0
let dislikesCount = 0

// FUNCTIONS

const handleReaction = (event) => {
  if (event.target.id === "like-button") {
    // likesCount = likesCount + 1
    // likesCount += 1
    likesCount++
    likeButtonElement.textContent = likesCount
  } else {
    dislikesCount++
    dislikeButtonElement.textContent = dislikesCount
  }
}

// EVENT LISTENERS

likeButtonElement.addEventListener("click", handleReaction)
dislikeButtonElement.addEventListener("click", handleReaction)

commentButtonElement.addEventListener("click", () => {
  if (inputElement.value) {
    const commentElement = document.createElement("li")
    commentElement.textContent = inputElement.value
    commentListElement.appendChild(commentElement)
    inputElement.value = ""
  } else {
    alert("Field was empty!")
  }
})
