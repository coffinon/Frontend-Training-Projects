const section = document.querySelector("section")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function renderPage(postsArray) {
    for (let i = 0; i < postsArray.length; i++) {
        renderPost(postsArray[i])
        if (i !== postsArray.length - 1) {
            renderSpace()
        }
    }
}

function renderPost(postElement) {
    section.innerHTML += 
        `<div class="post-section">
            <div class="post-header">
                <img class="avatar" src="${postElement.avatar}">
                <div>
                    <p class="name">${postElement.name}</p>
                    <p class="location">${postElement.location}</p>
                </div>
            </div>
            <img class="post" src="${postElement.post}">
            <div class="post-footer">
            <div class="icons">
                <img class="icon" src="images/icon-heart.png">
                <img class="icon" src="images/icon-comment.png">
                <img class="icon" src="images/icon-dm.png">
            </div>
                <p class="likes">${postElement.likes} likes</p>
                <p class="description"><span class="text-bold">${postElement.username}</span> ${postElement.comment}</p>
            </div>
        </div>`
}

function renderSpace() {
    section.innerHTML += 
        `<div class="space"/>`
}


/* Main code execution area */
renderPage(posts)
