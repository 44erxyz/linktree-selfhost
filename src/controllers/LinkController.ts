import { Request, Response } from 'express';
import LinkService from '../services/LinkService';
import { LinkDTO } from '../dtos/LinkDTO';
import GitHubClient from '../utils/GitHubClient';


export default class LinkController {
    constructor(private service: LinkService, private gh: GitHubClient){ }


    public list = (req: Request, res: Response) => {
        res.json(this.service.list());
    }


    public create = (req: Request, res: Response) => {
        const dto = req.body as LinkDTO;
        if(!dto.title || !dto.url) return res.status(400).json({error:'title and url required'});
        const created = this.service.create(dto);
        res.status(201).json(created);
    }


    public get = (req: Request, res: Response) => {
        const link = this.service.get(req.params.id);
        if(!link) return res.status(404).json({error:'not found'});
        res.json(link);
    }


    public update = (req: Request, res: Response) => {
        const updated = this.service.update(req.params.id, req.body);
        if(!updated) return res.status(404).json({error:'not found'});
        res.json(updated);
    }


    public remove = (req: Request, res: Response) => {
        const ok = this.service.remove(req.params.id);
        if(!ok) return res.status(404).json({error:'not found'});
        res.status(204).send();
    }


    public async repoInfo(req: Request, res: Response){
        const repo = req.query.repo as string;
        if(!repo) return res.status(400).json({error:'repo query required (owner/repo)'});
        try{
            const data = await this.gh.fetchRepo(repo);
            res.json({
                full_name: data.full_name,
                description: data.description,
                stargazers_count: data.stargazers_count,
                forks_count: data.forks_count,
                language: data.language,
                owner: { avatar_url: data.owner?.avatar_url }
            });
        }catch(err){
            res.status(502).json({error:'github fetch failed', details: String(err)});
        }
    }
}