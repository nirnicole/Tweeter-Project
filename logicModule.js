

const TweeterLogic = function(){

    const _posts = []
    let _nextPostId = 1
    let _nextCommentId = 1

    const postIdMechanism = () => `p${_nextPostId++}`
    const commentIdMechanism = () => `c${_nextCommentId++}`

    const getPosts = () => _posts
    
    const addPost = str => {
        _posts.push( 
            {
                text: str,
                id: postIdMechanism(),
                comments: []
        } 
        )
    }

    const removePost = pid => {
        for(let index in _posts){
            if(_posts[index].id===pid){
                _posts.splice(index,1)
                break
            }
        }
    }

    const addComment = (pid, commentText) => {
        
        for(let post of _posts){
            if(post.id===pid){
                post.comments.push( 
                    {
                        id: commentIdMechanism(),
                        text: commentText,
                    }
                )
                break
            }
        }
    }
    
        
    const removeComment = (pid, cid) => {
        for(let index in _posts){
            if(_posts[index].id===pid){
                for(let cIndex in _posts[index].comments){
                    if(_posts[index].comments[cIndex].id===cid){
                        _posts[index].comments.splice(cIndex,1)
                        break
                    }
                }
                break
            }
        }
    }


    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}



