import {Request, response, Response} from "express"
import { CreateUserService } from "../services/CreateUserService"

class CreateUserController{
  async handle(request: Request, response: Response){
  try{
    
      const{name, email, admin, password } = request.body
      const createUser = new CreateUserService();
      const user = await createUser.execute({name, email, admin, password});
      return response.json(user);
  }catch(erro){   //sees if the new user is already in the system
    return response.status(400).json({error: erro.message})
  }
  } 
}
export {CreateUserController}
