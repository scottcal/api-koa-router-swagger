const { HttpError } = require("koa");

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My Test API',
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
        },
        components: {
            securitySchemes: {
                basicAuth: {
                    type: "http",
                    scheme: "basic"
                },
            }
        },
        security: {
            basicAuth: [],
        }
    },
    apis: ['./routes/*.js'], // files containing annotations as above
};


module.exports = options;

