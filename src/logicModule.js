/*
  Author: Nir Nicole
  Date: 24/8/22

  |M| V C architecture:
  this is the Model module.
  this script contains all of the page data,
  driven by the Controller and used by the View(renderModule).
*/
const TweeterLogic = function () {
  const _postMap = new Map()

  // those will use the module(by its closure) to keep uniq identifires
  // to each post, untill the progrem will end.
  let _nextPostId = 1
  let _nextCommentId = 1

  const postIdMechanism = () => `p${_nextPostId++}`
  const commentIdMechanism = () => `c${_nextCommentId++}`

  const getPosts = () => {
    const valuesArray = Array.from(_postMap.values())
    return JSON.parse(JSON.stringify(valuesArray))
  }

  const addPost = (str) => {
    const generatedPostId = postIdMechanism()
    _postMap.set(generatedPostId, createPost(str, generatedPostId))
  }
  const removePost = (pid) => (_postMap.has(pid) ? _postMap.delete(pid) : null)

  const addComment = (pid, commentText) => {
    if (_postMap.has(pid)) {
      const postComments = _postMap.get(pid).comments
      postComments.push(createComment(commentText, commentIdMechanism()))
    }
  }

  const removeComment = (pid, cid) => {
    if (_postMap.has(pid)) {
      const relevantPost = _postMap.get(pid)
      for (let cIndex in relevantPost.comments) {
        if (relevantPost.comments[cIndex].id === cid) {
          relevantPost.comments.splice(cIndex, 1)
          break
        }
      }
    }
  }

  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  }
}

/*
    Utils:
 */
const createPost = (data, pid) => {
  return {
    text: data,
    id: pid,
    comments: [],
  }
}
const createComment = (data, cid) => {
  return {
    id: cid,
    text: data,
  }
}
