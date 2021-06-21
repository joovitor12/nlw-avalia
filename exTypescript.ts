
//aplicando tipos a variavel
// variavel: tipo

interface User{
nome: string, email: string, fone ?: string  // ?: parâmetro opcional
}


function enviaEmail({email, nome, fone}: User){  //ou usuario: User
  console.log(`Ola ${nome} seu e-mail e ${email} e seu telefone e ${fone}`);
  //
  //
  //
}

enviaEmail({
  email: "pessoa.junior12@gmail.com",
  nome: "Pessoa"
  
});