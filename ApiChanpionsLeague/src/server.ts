import aplication from './aplication';


const app = aplication.createApp();

//defindo porta de acesso ao app
app.listen(process.env.PORT)
console.log(`rodando na porta ${process.env.PORT}`)