export class Pokemon {
    public id: number
    public padId: string
    public imgUrl: string

    constructor(public name: string, url: string) { 
        this.id = this.getIdFromUrl(url)
        this.padId = this.id.toString().padStart(3,'0')
        this.imgUrl = this.getImghUrl(this.padId)
    }

    private getIdFromUrl(url: string): number {
        let arrUrl = url.split('/')
        return Number.parseInt(arrUrl[arrUrl.length - 2])
    }

    private getImghUrl(padId: string): string {
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${ padId }.png`
    }
}