export default {
    api: {
        baseUrl: process.env.API_URL,
    },
    helmet: {
        title: 'React Starter',
        titleTemplate: 'React Starter - %s',
        htmlAttributes: {
            lang: 'en',
        },
        meta: [
            {
                name: 'description',
                content: 'React starter kit',
            },
        ],
    },
    server: {
        host: process.env.HOST,
        port: process.env.PORT,
        sslPort: process.env.SSL_PORT,
    },
};
