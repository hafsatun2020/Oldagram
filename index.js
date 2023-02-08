const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        id: 0,
        isLiked: false,
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        id: 1,
        isLiked: false,
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        id: 2,
        isLiked: false,
        likes: 152
    }
]

const feed =document.querySelector('.container')

let postsLS = JSON.parse(localStorage.getItem('posts'))
let allPosts = posts

if(postsLS){
allPosts = postsLS
}
document.addEventListener('click', function(e){
    if(e.target.dataset.like){
        handleClickLike(e.target.dataset.like)
    }
})


function handleClickLike(postId){
    const targetPostObj = allPosts.filter(function(post){
        postId = Number(postId)
       // console.log(postId)
        return post.id === postId
    })[0]
    
    console.log(targetPostObj)
    if(!targetPostObj.isLiked){
         targetPostObj.likes++
         
    } else{
        targetPostObj.likes--
    }
    targetPostObj.isLiked = !targetPostObj.isLiked
         render()
}



function getFeedHtml(){
    let feedHtml = ``
    
    allPosts.forEach(function(post){
        let likeiconClass = ''
        if(post.isLiked) {
            likeiconClass = 'liked'
        }
        feedHtml += `
            <div class="avatar">
                <img class="avatar-img" src="${post.avatar}">
                <div id="avatar-inner">
                    <p id="name">${post.name}</p>
                    <p id="location">${post.location}</p>
                </div>
            </div>
            <div id="post" class="post">
                <img src="${post.post}" alt="van-gogh" id="post-img" data-like="${post.id}">
                <div class="icons" id="icons">
                    <span><i class="fa-solid fa-heart icon ${likeiconClass}" data-like="${post.id}"></i></span>
                    <i class="fa-regular fa-comment icon" data-id="icon"></i>
                    <i class="fa-regular fa-paper-plane icon" data-dm="icon"></i>
                    
                </div>
                <p id="likes">${post.likes} likes</p>
                <div class="last">
                    <p id="user-name">${post.username}</p>
                    <p id="comment">${post.comment}</p>
                </div>
            </div>
        <div>
            
        </div>
        
        `
    })
    
  return feedHtml
}

getFeedHtml()

function render(){
     feed.innerHTML = getFeedHtml()
     localStorage.setItem("posts", JSON.stringify(allPosts))
}

render()