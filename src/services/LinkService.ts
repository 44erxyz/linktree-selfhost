import { v4 as uuidv4 } from 'uuid';
import LinkRepository from '../repositories/LinkRepository';
import Link from '../models/Link';
import { LinkDTO } from '../dtos/LinkDTO';


export default class LinkService {
    constructor(private repo: LinkRepository){ }


    public list(): Link[]{
        return this.repo.getAll();
    }


    public get(id: string): Link | undefined{
        return this.repo.getById(id);
    }


    public create(dto: LinkDTO): Link{
        const link = new Link(uuidv4(), dto.title, dto.url, dto.emoji);
        return this.repo.create(link);
    }


    public update(id: string, dto: Partial<LinkDTO>): Link | null{
        return this.repo.update(id, dto as Partial<Link>);
    }


    public remove(id: string): boolean{
        return this.repo.delete(id);
    }
}