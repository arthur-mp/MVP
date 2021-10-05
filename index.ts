import express from 'express';
const app = express();
const port = 3333

app.use(express.json());

app.listen(port, () => {
    console.log("Rodando a aplicação em: http://localhost:" + port);
});

app.get("/", (request, response) => {
    return response.json({
        helloWord: "Hello Word",
        App: "NodeJs App"
    });
});