import express from 'express';
//GraphQL
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo Listo');
});

app.use ('/graphql', graphqlHTTP({
    //El schema va a utilizar
    schema,
    //Utilizar graphiql
    graphiql : true
}));

app.listen(8000, () => console.log("El Servidor esta funcionando") );

