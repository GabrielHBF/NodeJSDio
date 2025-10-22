import fastify from 'fastify';
import cors from '@fastify/cors';

// Cria uma instância do Fastify com logging habilitado 
//que serve para facilitar o debug
const server = fastify({logger: true});


//cors e um mecanismo de segurança para que consiga escolher quem
//pode fazer requisições a api, assim consguimos tem mais segurança
server.register(cors,{
    origin: "*",
});

const teams = [
        { id: 1, name: 'Mercedes' },
        { id: 2, name: 'Red Bull Racing' },
        { id: 3, name: 'Ferrari' },
];

const drivers = [
        { id: 1, name: 'Lewis Hamilton', teamId: 1 },
        { id: 2, name: 'Max Verstappen', teamId: 2 },
        { id: 3, name: 'Charles Leclerc', teamId: 3 },
];

// Define routes com Fastify 
server.get('/teams', async (request, response) => {
    response.type('application/json').code(200);
    return { teams  };
});

server.get('/drivers', async (request, response) => {
    response.type('application/json').code(200);
    return { drivers };
});

// Inicia o servidor na porta 3000 .listen é assíncrono e aceita um callback
// que é executado quando o servidor está pronto para receber requisições
server.listen({ port: 3000}, () => {
    console.log('Server is running on http://localhost:3000');
});
// Define interfaces para os tipos de dados
// TypeScript interfaces para os tipos de dados
interface Driver {
    id: string;
}

//<{Params: Driver}> define o tipo dos parâmetros da rota
//assim o TypeScript pode fazer a verificação de tipos corretamente
server.get<{Params: Driver}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    //procura na lista de driver o id para comparalos
    const driver = drivers.find((d) => d.id === id);

    // verifica se existe o corredor na lista e retorna statos code e nessage negativos
    if(!driver){
        response.type("application.json").code(404);
        return {message: "Driver not Found"};
    }else{
        response.type("application.json").code(200);
        return {driver};
    }

});