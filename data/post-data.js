// Class to Represent a Single Blog Post
class Post {
    // Constructor function for creating new posts
    constructor(title, body) {
        this.title = title
        this.body = body
    }
}

// Create an array to hold our posts
const posts = []

// Add a post to our posts array
posts.push(new Post("Title of Post", "Body of Post"))
posts.push(new Post("Hello World", "There is much to say about Hello World"))

// Export them to be used in other files
module.exports = {
    Post,
    posts
}
