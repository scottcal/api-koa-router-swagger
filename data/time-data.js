// Class to Represent a Single Blog Post
class Time {
    // Constructor function for creating new posts
    constructor(hours, job, user, notes) {
        this.hours = hours
        this.job = job
        this.user = user
        this.notes = notes
    }
}

// Create an array to hold our posts
const timeEntries = []

// Add a post to our posts array
timeEntries.push(new Time(1.2, "ABC-123", "ARC", "Mocksups for this"))
timeEntries.push(new Time(2.3, "BBB-453", "ADD", "Cherry pickin data"))

// Export them to be used in other files
module.exports = {
    Time,
    timeEntries
}
