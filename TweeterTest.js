const tweeter = TweeterLogic();
const tweeterRendering = TweeterRender();




tweeterRendering.renderPosts(tweeter.getPosts())


//controller functions (events)

//add post
$('body').on('click', '#postbtn', function() {
    let postText = $("#input").val()
    $("#input").val('')

    if(postText!==""){
    tweeter.addPost(postText)
    tweeterRendering.renderPosts(tweeter.getPosts())
    }
  })
  
//delete comment
$('#posts').on('click','.delete-comment', function() {
    let commentId = $(this).siblings("div.comment").attr("id")
    let postId = $(this).closest(".post").attr("id")
    tweeter.removeComment(postId,commentId);
    tweeterRendering.renderPosts(tweeter.getPosts())
  })
    

//delete post
$('#posts').on('click','.delete-post', function() {
    let postId = $(this).closest(".post").attr("id")
    tweeter.removePost(postId)
    tweeterRendering.renderPosts(tweeter.getPosts())
  })

      
//add comment
$('#posts').on('click','.comment-btn', function() {
    const commentText = $(this).siblings(".comment-input").val()
    const postId = $(this).closest(".post").attr("id")
    if(commentText!==""){
    tweeter.addComment(postId, commentText)
    tweeterRendering.renderPosts(tweeter.getPosts())
    }
  })
