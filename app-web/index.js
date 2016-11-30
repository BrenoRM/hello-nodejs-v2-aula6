const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.post("/dosave", (req,res) => {
  console.log("os dados recebidos do formulário são:");
  console.log(req.body);
  res.send("<h1>Sucesso!</h1><a href='index.html'>voltar</a>");
});

app.post("/adivinha", (req,res) => {
  console.log("O número recebido foi:");
  console.log(req.body);
  if (req.body.numero == 20 && req.body ) res.send("<h1>Acertô Mizeravi!</h1><a href='numero.html'>voltar</a>");
  else res.send("<h1>ERRÔÔÔU</h1><a href='numero.html'>voltar</a>");
  
});

app.get("/convidados", (req,res) => {
  var convs = [{nomeconvidado:"Maria"},{nomeconvidado:"João"}];
  res.send(convs);
});

app.listen(3000);
console.log("app online");