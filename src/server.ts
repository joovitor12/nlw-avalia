
import "reflect-metadata";
import "./database";
import { router } from "./routes";
import express, {Request, Response, NextFunction} from "express";
import "express-async-errors";

// @types/express
const app = express();
//criação de rota
app.use(express.json());
app.use(router);
app.use((err: Error ,request: Request,response: Response,next: NextFunction) => {
  if(err instanceof Error){
    return response.status(400).json({
      error: err.message
    })
  }
  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})
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