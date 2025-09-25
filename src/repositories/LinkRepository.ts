import fs from 'fs';
import path from 'path';
import Link from '../models/Link';


export default class LinkRepository {
    private filePath: string;
    private data: Link[] = [];


    constructor(dataFile = path.join(process.cwd(), 'data', 'links.json')){
        this.filePath = dataFile;
        this.load();
    }


    private load(){
        try{
            if(!fs.existsSync(this.filePath)){
                this.data = [];
                this.persist();
            } else {
                const raw = fs.readFileSync(this.filePath, 'utf-8');
                this.data = JSON.parse(raw);
            }
        }catch(e){
            console.error('Failed to load links data', e);
            this.data = [];
        }
    }


    private persist(){
        try{
            fs.mkdirSync(path.dirname(this.filePath), {recursive:true});
            fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2), 'utf-8');
        }catch(e){ console.error('Failed to persist links', e) }
    }


    public getAll(): Link[]{
        return [...this.data];
    }


    public getById(id: string): Link | undefined{
        return this.data.find(d => d.id === id);
    }


    public create(link: Link): Link{
        this.data.push(link);
        this.persist();
        return link;
    }


    public update(id: string, patch: Partial<Link>): Link | null{
        const idx = this.data.findIndex(d => d.id === id);
        if(idx === -1) return null;
        const updated = {...this.data[idx], ...patch};
        this.data[idx] = updated as Link;
        this.persist();
        return this.data[idx];
    }


    public delete(id: string): boolean{
        const idx = this.data.findIndex(d => d.id === id);
        if(idx === -1) return false;
        this.data.splice(idx,1);
        this.persist();
        return true;
    }
}