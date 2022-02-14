const routes = require("express").Router();
const multer = require("multer");
const fs = require("fs");

const multerConfig = require("./config/multer");
const criarImagem = require("./config/jimpService");

routes.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
  // await removeFile("C:/Users/galima/Desktop/Pessoal/youtube-upload-nodejs-reactjs-backend/src/images/newImage.png");

  console.log("IMAGEM TEMP SALVA");
  
  criarImagem(req.file.path);

  await removeFile(req.file.path);

  console.log("IMAGEM CRIADA");

  // return res.json({oi: "oi"});

  let imagemcriada = imgToBase64();

  return res.json(imagemcriada);
});

function imgToBase64(){
  console.log("CONVERTENDO IMAGEM");
  return fs.readFileSync('C:/Users/galima/Desktop/Pessoal/youtube-upload-nodejs-reactjs-backend/src/images/newImage.png', {encoding: 'base64'});
}

async function removeFile(path) {
  try{
    console.log("REMOVER ", path);

    await fs.unlinkSync(path);

    console.log("IMAGEM REMOVIDA");
  }
  catch(e){
    console.log(e);
  }
}

module.exports = routes;