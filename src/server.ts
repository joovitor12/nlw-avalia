
import "reflect-metadata";
import express from "express";
import "./database";
import { router } from "./routes";

// @types/express
const app = express();
//criação de rota
app.use(express.json());
app.use(router);
app.get("/test", (request, response) => {
  //request >> entrando
  //response >> saindo
  return response.send("mensagem")
});

app.post("/test-post" , (request, response) => {
  return response.send("mensagem com post")
})

//http://localhost:3000
app.listen(3000, () => console.log("Server is running "))

//yarn tsc -> conversão manual de ts para js