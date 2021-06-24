import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

interface IAuthenticateRequest{
  email: string,
  password: string,
}



class AuthenticateUserService{
     async execute({email,password}: IAuthenticateRequest){
          const usersRepositories = getCustomRepository(UsersRepositories);
          const user = await usersRepositories.findOne({
            email
          });
          if(!user){
            throw new Error("Incorrect e-mail or password")
          }
          // verifying that the password or email is correct
          // the compare method uses the user's password and the hashed password 
          const passwordMatch = await compare(password, user.password)
          if(!passwordMatch){
            throw new Error("Incorrect e-mail or password")
          }

          //token generation
          const token = sign({
            email: user.email
          }, "c3f6b3329b130131d53eb318c0808882", {
            subject: user.id,
            expiresIn: "1d"
          });
          return token
     }
}

export{AuthenticateUserService}