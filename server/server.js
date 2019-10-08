import chalk from 'chalk';
import express from 'express';
import compression from 'shrink-ray';
// import fs from 'fs';
import hpp from 'hpp';
// import path from 'path';
import proxy from 'express-http-proxy';
// import spdy from 'spdy';
import universalCookie from 'universal-cookie-express';

// import favicon from 'serve-favicon';

// import reactApplication from './middleware/reactApplication';
import { PATH_DIST } from '../tools/paths';

const isDevelopment = process.env.NODE_ENV === 'development';

const app = express();

app.set('views', PATH_DIST);
app.set('view engine', 'ejs');

app.disable('x-powered-by');

app.use(hpp());
app.use(compression());
app.use(universalCookie());

if (isDevelopment) {
    app.get('*', proxy('http://localhost:3001/'));
} else {
    app.get('*', express.static(PATH_DIST));
}

// app.get('*', reactApplication);

app.listen(3000, () => {
    console.info(chalk.green('==> HTTP server listening at port 3000'));
});

export default app;

// app.use(favicon(path.resolve(process.cwd(), 'public/favicon.ico')));

// Server-Side Rendering

// Run HTTP Server

// app.listen(config.port, config.host, () => {
//     console.info(chalk.green(`==> HTTP server listening on http://${config.host}:${config.port}`));
// });

// Run HTTPS Server

// try {
//     const spdyOptions = {
//         key: fs.readFileSync(process.env.SSL_KEYFILE),
//         cert: fs.readFileSync(process.env.SSL_CRTFILE),
//     };

//     spdy.createServer(spdyOptions, app).listen(sslPort, host, () => {
//         console.info(chalk.green(`HTTPS server listening on https://${host}:${sslPort}`));
//     });
// } catch (error) {
//     console.info(chalk.yellow('HTTPS server not running.'));
// }

// Export Express App

