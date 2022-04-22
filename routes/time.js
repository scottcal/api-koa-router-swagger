// Import Our Data
const { Time, timeEntries } = require("../data/time-data");
const Router = require('@koa/router')
const router = new Router({
    prefix: '/time'
});


// Index Route
// context is a combo of the node request/response objects
router.get("/", async (context) => {
    // The response is the value of the context body
    context.body = timeEntries
})

// Show Route
router.get("/:id", async (context) => {
    // get the id
    const id = context.params.id
    // send the item as a response
    context.body = timeEntries[id]
})

// the Create Route
router.post("/", async (context) => {
    // get the body from context
    const data = context.request.data
    // create the new time, the data sent over is in the request body
    time = new Time(data.hours, data.job, data.user, data.notes)
    // push the new time in the timeEntries array
    timeEntries.push(time)
    // return the new time as json
    context.data = time
})

// The Update Route
router.put("/:id", async (context) => {
    // get the id from the url
    const id = context.params.id
    // get the request data
    const data = context.request.data
    // get the item to be updated
    const time = timeEntries[id]
    // update the item
    time.hours = data.hours
    time.job = data.job
    time.user = data.user
    time.notes = data.notes
    // return the updated item as a json response
    context.data = time
})

// The Destroy Route
router.delete("/:id", async (context) => {
    // get the id from the url
    const id = context.params.id
    // splice it from the array (remove it)
    const post = posts.splice(id, 1)
    // return the deleted post as json
    context.body = post
})

module.exports = router;