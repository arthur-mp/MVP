import express from 'express';
import cors from 'cors';
import router from './API/routes';
const app = express();
const port = 3333

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log("Rodando a aplicação em: http://localhost:" + port);
});

app.use((req, res, next) => {
    return res.sendStatus(404);
});
