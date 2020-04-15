import { UtilsService } from '../../services/utils.service'

export class Pokemon {
    public id: number
    public padId: string
    public imgUrl: string
    
    //Extended data
    public frontSpriteUrl: string
    public stats: Array<any>
    public types: Array<any>
    public abilities: Array<any>
    public moves: Array<any>
    
    constructor(public name: string, url?: string) { 
        this.id = UtilsService.getIdFromUrl(url)
        this.padId = this.id.toString().padStart(3,'0')
        this.imgUrl = this.getImghUrl(this.padId)
    }

    private getImghUrl(padId: string): string {
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${ padId }.png`
    }

    public static BuildWithId(id: number) {
        return new Pokemon(undefined, `/${id}/`)
    }
}