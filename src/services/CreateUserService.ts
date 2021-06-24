import { getCustomRepository } from "typeorm";

import { UsersRepositories } from "../repositories/UsersRepositories"
import {hash} from "bcryptjs"

interface IUserRequest{
  name: string;
  email: string;
  admin?: boolean;
  password: string
}

class CreateUserService{
  async execute({name, email, admin = false, password} : IUserRequest ){
     const usersRepositories = getCustomRepository(UsersRepositories);

    if(!email){
      throw new Error("Incorrect e-mail")
    }
     const userAlreadyExists = await usersRepositories.findOne({
          email,
     });
     if(userAlreadyExists){
       throw new Error("This user already exists")
     }
     const passwordHash = await hash(password, 8)  //encrypting password

     //creating a new user in the repository
     const user = usersRepositories.create({
       name,
       email,
       admin,
       password: passwordHash,
     })
     await usersRepositories.save(user)
     return user;
  }
}
export{CreateUserService}