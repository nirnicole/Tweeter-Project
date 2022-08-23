const TweeterRender  = function(){

    const renderPosts = function(posts){
        $("#posts").empty()

        for(let post of posts){
            let postDiv = createPostElement(post)
            $("#posts").append(postDiv)
        }
    }



    return {
        renderPosts: renderPosts 
    }
}

const createPostElement = function(post){

    let deletePost = `<div class="delete-post">X</div>`
    let postHeader = `<h1 class="post-text"> ${post.text} </h1>`
    let comments = createCommentElements(post.comments)
    let commentsContainerDiv = `<div class=commentsContainer>${comments}</div>`
    
    let commentInput = `<input type="text" class="comment-input" placeholder="write something nice!"></input> `
    let commentBtn = `<button class="comment-btn">comment</button> `
  
    let postDiv = `<div class="post" ; id=${post.id}> ${deletePost}${postHeader}${commentsContainerDiv}${commentInput}${commentBtn} </div>`

    return postDiv
}

const createCommentElements = function(commentsArray){

    let concatedLines=``

    for(let comment of commentsArray){

        let concatedComment = `<div class=delete-comment>delete</div>`
        concatedComment += `<div class="comment" ; id=${comment.id}>${comment.text}</div>`

        concatedLines += `<div class="commentLine">${concatedComment}</div>`

    }

    return concatedLines
}

//  <input type="text" id="my-input" placeholder="Some Text!"></input>
// <button>Click Me!</button>

/*
            {
                text: str,
                id: postIdMechanism(),
                comments: []
        } 

*/