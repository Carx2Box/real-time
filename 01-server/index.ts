import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

server.app.use(bodyParser.urlencoded( {extended: true}));
server.app.use( bodyParser.json())

// Cors
server.app.use(cors({
    origin: true,
    credentials: true
}))

// Routes
server.app.use('/', router)

// Start service
 server.start(() =>  {
     console.log(`Server running in ports: ${ server.port }`)
})