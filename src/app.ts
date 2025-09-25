import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import LinkRepository from './repositories/LinkRepository';
import LinkService from './services/LinkService';
import LinkController from './controllers/LinkController';
import GitHubClient from './utils/GitHubClient';


export function createApp(){
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(morgan('tiny'));


// static frontend
    app.use(express.static(path.join(process.cwd(), 'public')));


    const repo = new LinkRepository(path.join(process.cwd(), 'data', 'links.json'));
    const svc = new LinkService(repo);
    const gh = new GitHubClient();
    const ctrl = new LinkController(svc, gh);


// REST
    app.get('/api/links', ctrl.list);
    app.post('/api/links', ctrl.create);
    app.get('/api/links/:id', ctrl.get);
    app.patch('/api/links/:id', ctrl.update);
    app.delete('/api/links/:id', ctrl.remove);


// repo info proxy
    app.get('/api/repo', (req,res)=>ctrl.repoInfo(req,res));


// fallback to index.html for SPA
    app.get('*', (req,res) => {
        res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
    });


    return app;
}