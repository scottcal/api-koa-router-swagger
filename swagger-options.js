
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hello World',
            version: '1.0.0',
            description: 'this is our sample API, no muc here yet'
        },
        servers: [
            {
                "url": "localhost:4000/swagger",
                "description": "Development server"
            }
        ],
        paths: {
            "/pets": {}
        }
    },
    apis: ['./routes/*.js'], // files containing annotations as above
};


module.exports = options;

