import express from "express";

// @types/express
const app = express();

/**
 * get >> busca de informações
 * post >> inserir uma informação dentro da API(criação de usuarios, tags e etc)
 * put >> alterar uma informação (alteração de dados)
 * delete >> remover um dado 
 * patch >> alterar uma informação específica
 */

//criação de rota
app.get("/test", (request, response) => {
  //request >> entrando
  //response >> saindo
  return response.send("mensagem")
});

app.post("/test-post" , (request, response) => {
  return response.send("testando o post")
})

//http://localhost:3000
app.listen(3000, () => console.log("Server is running "))

//yarn tsc -> conversão manual de ts para js