const express = require ('express');
const app = express();
const port = process.env.PORT || 3003

const apiVersion = {
    name : 'Sample Express Api',
    version: '1.0.0',
    author: 'lautaro',
    contactInfo: {
        facebook: 'Lautaro Sosa',
        Insta: 'Lautaro Sosa', 
        twitter: 'Wcio'
        
    }
}

app.get('/', function(req, res){
    res.send('Hello word')
})

app.get('/version' , (req,res) =>{
    res.send(apiVersion.version)
})

app.get('/version/cantacto' , (req,res) =>{
    res.send(apiVersion.contactInfo)
})



app.listen(port,()=>console.log('Escuchando en el puerto ' + port))
