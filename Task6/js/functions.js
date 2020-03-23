function displayFilter() {
    document.getElementById("filter").style.display = "block";
}
function addFilterParams(){
    let author = document.getElementById('author').value;
    let tag = document.getElementById('tag').value;
    let date = document.getElementById('date').value;
    document.getElementById("filter").style.display = "none";
    let postsToLoad = getPosts(0, posts.length, {author: author, createAt: date, tags: tag});
    createPosts(postsToLoad);

}
