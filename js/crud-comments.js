var commentsData = [
  {
  content: "hola",
  style: {
    color: "white",
    background: "blue"
  }
},
{
  content: "adios",
  style: {
    color: "white",
    background: "lightblue"
  }
}
];

var commentsContainer = document.getElementById("comments-container");

function drawComment(data) {
  commentsContainer.innerHTML = "";
  for (var i = 0; i < commentsData.length; i++) {
    var sectionDom = createDomCommentFromData(commentsData[i]);
    commentsContainer.appendChild(sectionDom);
    }
}

function createDomCommentFromData(data) {
  var commentContent = data.content;
  var commentDom = document.createElement("section");
  commentDom.innerHTML = commentContent;
  commentDom.className = "comment";
  Object.assign(commentDom.style, data.style);
  return commentDom;
}

drawComment();

var sendBtn = document.getElementById("send-button");
sendBtn.addEventListener("click",addComment);

function addComment() {
  var commentPreview = document.getElementById("comment-preview");
  var newCommentText = commentPreview.innerHTML;
  var newComment = { content: "", style: {} };
  newComment.content = newCommentText;
  Object.assign(newComment.style, commentPreview.style);
  commentsData.unshift(newComment);
  drawComment();
}
