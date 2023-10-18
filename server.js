import express from 'express';
import bodyParser from 'body-parser'

const router = express.Router();
const app = express();
app.use(bodyParser.json())
app.use(router)
/*app.use('/', function (req, res){
    res.send('Hola');
});*/


router.get('/' ,(req, res) => {
    res.send('Lista de mensajes')
});

router.post('/' ,(req, res) => {
    console.log(req.headers)
    console.log(req.body)
    console.log(req.query)
    res.header({
        'custom-header': 'Valor personalizado'
    })
    res.send('Lista de mensajes desde post')
});

app.listen(3000);

console.log("La aplicacion esta escuchando en el puerto 3000")