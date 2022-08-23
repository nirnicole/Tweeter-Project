const tweeter = TweeterLogic();
const tweeterRendering = TweeterRender();

tweeter.addPost("This is my own post!");
tweeter.addPost("2 post");
tweeter.addPost("3 post");
tweeter.addPost("My fourth post");
tweeter.addPost("Become A New York Times Subscriber Today!");
console.log(tweeter.getPosts());

tweeter.removePost("p2");
tweeter.removePost("p3");
console.log(tweeter.getPosts());

tweeter.addComment("p1", "im a comment");
tweeter.addComment("p1", "biiiii");
tweeter.addComment("p4", `אלכסיי ליאונוב היה האדם הראשון בהיסטוריה שביצע הליכת חלל. ב-18 במרץ 1965 יצא אל מחוץ לחללית ווסחוד 2 לריחוף שנמשך 23 דקות ו-41 שניות. המשימה תוכננה ל-12 דקות בלבד, אבל לחץ האוויר בחליפת החלל שלו ניפח אותה והוא לא הצליח להיכנס חזרה דרך הפתח. רק לאחר שחרור אוויר לחלל הצליח ליאונוב להידחק חזרה לחללית. בחזרה לכדור הארץ, ארעה תקלה במערכת ההנחיה האוטומטית והטייס פאבל בלייב נאלץ לנווט את תא הנחיתה באופן ידני. הצמד נחת כ-1,000 ק"מ מהיעד והם נאלצו לבלות יומיים בקור המקפיא של הרי אוראל עד שחולצו. למעשה, הם שהו בהרים זמן רב יותר מאשר בחלל.`);
tweeter.addComment("p5", "eiiiii");
tweeter.addComment("p5", "eiiiii");
tweeter.addComment("p5", "gnldskfnglkdfnglkdnfglkndslkfgnlkdsfngldfskg");
tweeter.addComment("p5", "sadfvasannnnnnnnnnnnnnnnnnsadfvasannnnnnnnnnnnnnnnnnsadfvasannnnnnnnnnnnnnnnnnsadfvasannnnnnnnnnnnnnnnnnsadfvasannnnnnnnnnnnnnnnnnsadfvasannnnnnnnnnnnnnnnnn");
tweeter.addComment("p5", "יקיפדיה היא אנציקלופדיה מקוונת רב-לשונית, המבוססת על תוכן חופשי ומשתמשת בטכנולוגיית ויקי. ויקיפדיה היא האנציקלופדיה הכללית הגדולה והפופולרית ביותר באינטרנט. מאחורי האתר עומדת קרן ויקימדיה, מוסד ללא כוונת רווח שמרכזו בארצות הברית. ");
tweeter.addComment("p5", "eiiiii");
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