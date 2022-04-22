// Import Our Data
const { Post, posts } = require("../data/post-data");
const Router = require('@koa/router')
const router = new Router({
    prefix: '/posts'
});


// Index Route
/**
 * @openapi
 * /posts:
 *   get:
 *     description: list all posts
 *     responses:
 *       200:
 *         description: Returns list of posts
 */
router.get("/", async (context) => {
    // The response is the value of the context body
    context.body = posts
})

/**
 * @openapi
 * /posts/{id}:
 *   get:
 *     description: list a post
 *     responses:
 *       200:
 *         description: Returns a post by id
 *     parameters:
 *       id: {id}
 */
// Show Route
router.get("/:id", async (context) => {
    // get the id
    const id = context.params.id
    // send the item as a response
    context.body = posts[id]
})

// the Create Route
/**
 * @openapi
 * /:
 *  post:
 *     description: Add Post
 *     responses:
 *       200:
 *         description: Adds a new post
 */
router.post("/", async (context) => {
    // get the body from context
    const body = context.request.body
    // create the new post, the data sent over is in the request body
    post = new Post(body.title, body.body)
    // push the new post in the posts array
    posts.push(post)
    // return the new post as json
    context.body = post
})

// The Update Route
/**
 * @openapi
 * /id:
 *   put:
 *     description: Update a post
 *     responses:
 *       200:
 *         description: Update a post's body and title
 */
router.put("/:id", async (context) => {
    // get the id from the url
    const id = context.params.id
    // get the request body
    const body = context.request.body
    // get the item to be updated
    const post = posts[id]
    // update the item
    post.title = body.title
    post.body = body.body
    // return the updated item as a json response
    context.body = post
})

// The Destroy Route
/**
 * @openapi
 * /id:
 *   delete:
 *     description: Delete a post
 *     responses:
 *       200:
 *         description: Delete a post by id
 */
router.delete("/:id", async (context) => {
    // get the id from the url
    const id = context.params.id
    // splice it from the array (remove it)
    const post = posts.splice(id, 1)
    // return the deleted post as json
    context.body = post
})

module.exports = router;