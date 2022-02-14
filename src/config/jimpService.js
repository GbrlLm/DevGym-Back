const Jimp = require('jimp') ;

let criarImagem = async function imageOverlay(imageOverlay) {
        let watermark = await Jimp.read(imageOverlay);
        watermark = watermark.resize(383,383); 

        const image = await Jimp.read('C:/Users/galima/Desktop/Pessoal/youtube-upload-nodejs-reactjs-backend/src/images/fundo.jpg');
        watermark = await watermark
        image.composite(watermark, 225, 133, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
        })
        await image.writeAsync('C:/Users/galima/Desktop/Pessoal/youtube-upload-nodejs-reactjs-backend/src/images/newImage.png');
    
        console.log("Image is processed successfully");    
    }


module.exports = criarImagem; 