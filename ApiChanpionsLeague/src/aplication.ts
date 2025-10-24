import express from "express"
import router from "./routs";



function createApp(){
        //criando conexão 
        const app = express();
        //definindo o tipo de arquivo que sera mandado
        app.use(express.json())
        //fazendo requisição
        app.use("/api", router);

        return app;
}
 
export default {
    createApp
}