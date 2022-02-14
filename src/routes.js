const routes = require("express").Router();
const multer = require("multer");
const fs = require("fs");

const multerConfig = require("./config/multer");
const criarImagem = require("./config/jimpService");

routes.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
  
  await criarImagem(req.file.path);

  await removeFile(req.file.path);

  let imagemcriada = imgToBase64();

  if(imagemcriada){
    await removeFile("C:/Users/galima/Desktop/Pessoal/youtube-upload-nodejs-reactjs-backend/src/images/newImage.png");
  }

  return res.json(imagemcriada);
});

function imgToBase64(){
  return fs.readFileSync('C:/Users/galima/Desktop/Pessoal/youtube-upload-nodejs-reactjs-backend/src/images/newImage.png', {encoding: 'base64'});
}

async function removeFile(path) {
  try{
    await fs.unlinkSync(path);
  }
  catch(e){
    console.log(e);
  }
}

module.exports = routes;