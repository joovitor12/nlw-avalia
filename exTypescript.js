//aplicando tipos a variavel
// variavel: tipo
function enviaEmail(_a) {
    var email = _a.email, nome = _a.nome, fone = _a.fone;
    console.log("Ola " + nome + " seu e-mail e " + email + " e seu telefone e " + fone);
    //
    //
    //
}
enviaEmail({
    email: "pessoa.junior12@gmail.com",
    nome: "Pessoa"
});
