import axios from 'axios';


export default class GitHubClient {
    private base = 'https://api.github.com/repos/';


    public async fetchRepo(ownerRepo: string){
        const url = this.base + ownerRepo;
        const res = await axios.get(url, {
            headers: { 'Accept': 'application/vnd.github.v3+json' }
        });
        return res.data;
    }
}