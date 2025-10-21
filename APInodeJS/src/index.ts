import * as http from 'http';
import { getPodcasts } from './controllers/podcast-controller';

// Create an HTTP server
const server = http.createServer(async (request: http.IncomingMessage, res: http.ServerResponse) => {
  res.statusCode = 200;
  //criando o cabeçalho da resposta content-type application/json servemdo para informar que o corpo da resposta é um json
  if (request.method === 'GET') {
    //se o método for GET responder com um json
    await getPodcasts(request, res);
  }
});

// Listen on port 3050
const port = process.env.PORT;
server.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
