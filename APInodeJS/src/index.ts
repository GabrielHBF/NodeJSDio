import * as http from 'http';
import {app} from './app';

// Create an HTTP server
const server = http.createServer(app);

// Listen on port 3050
const port = process.env.PORT;

server.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
