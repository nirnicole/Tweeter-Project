/*
  Author: Nir Nicole
  Date: 24/8/22

  M |V| C architecture:
  this is the View module.
  this script contains all of the page rendering flow,
  driven by the Controller and according to the Model(logicModule).
*/
const TweeterRender = function () {
  let noUserPosts = true

  const renderPosts = function (posts) {
    $("#posts").empty()

    if (posts.length === 0 && noUserPosts) {
      noUserPosts = false
      let postDiv = createPostElement({
        text: `it seems like nothing has been posted yet, be the first to post!`,
        id: "p0",
        comments: [
          {
            text: `you can try to comment in our post, but it just wont work! :)`,
            id: "c0",
          },
          {
            text: `just go ahad and write your own!!!`,
            id: "c00",
          },
        ],
      })
      $("#posts").append(postDiv)
    } else {
      noUserPosts = true
      for (let post of posts) {
        let postDiv = createPostElement(post)
        $("#posts").append(postDiv)
      }
    }
  }

  return {
    renderPosts: renderPosts,
  }
}

const createPostElement = function (post) {
  let deletePost = `<div class="delete-post">&#10006</div>`
  let postHeader = `<h1 class="post-text"> ${post.text} </h1>`
  let comments = createCommentElements(post.comments)
  let commentsContainerDiv = `<div class=commentsContainer>${comments}</div>`
  let commentInput = `<input type="text" class="comment-input" placeholder="write something nice!"></input> `
  let commentBtn = `<button class="comment-btn">comment</button> `
  let postDiv = `<div class="post" ; id=${post.id}> ${deletePost}${postHeader}${commentsContainerDiv}${commentInput}${commentBtn} </div>`

  return postDiv
}

const createCommentElements = function (commentsArray) {
  let concatedLines = ``

  for (let comment of commentsArray) {
    let concatedComment = `<div class=delete-comment>&#215</div>`
    concatedComment += `<div class="comment-text" ; id=${comment.id}>${comment.text}</div>`
    concatedLines += `<div class="commentLine">${concatedComment}</div>`
  }

  return concatedLines
}
