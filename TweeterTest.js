const tweeter = TweeterLogic();
const tweeterRendering = TweeterRender();

tweeter.addPost("This is my own post!");
tweeter.addPost("2 post");
tweeter.addPost("3 post");
tweeter.addPost("My second post");
tweeter.addPost("Become A New York Times Subscriber Today!");
console.log(tweeter.getPosts());

tweeter.removePost("p2");
tweeter.removePost("p3");
console.log(tweeter.getPosts());

tweeter.addComment("p1", "im a comment");
tweeter.addComment("p4", `im a comment..`);
tweeter.addComment("p5", "eiiiii");
tweeter.addComment("p5", "eiiiii");
tweeter.addComment("p5", "blabla");
tweeter.addComment("p5", "a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text ");
tweeter.addComment("p5", "dont take me down!");
console.log(tweeter.getPosts());

tweeter.removeComment("p1", "c2");
console.log(tweeter.getPosts());


tweeterRendering.renderPosts(tweeter.getPosts())


//controller functions (events)

//add post
$('body').on('click', '#postbtn', function() {
    let postText = $("#input").val()
    console.log(postText)
    tweeter.addPost(postText);
    tweeterRendering.renderPosts(tweeter.getPosts())
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
    console.log(postId)
    tweeter.removePost(postId)
    tweeterRendering.renderPosts(tweeter.getPosts())
  })

      
//add comment
$('#posts').on('click','.comment-btn', function() {
    const commentText = $(this).siblings(".comment-input").val()
    const postId = $(this).closest(".post").attr("id")

    tweeter.addComment(postId, commentText)
    tweeterRendering.renderPosts(tweeter.getPosts())
  })
