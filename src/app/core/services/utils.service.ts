import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public static getIdFromUrl(url: string): number {
    let arrUrl = url.split('/')
    return Number.parseInt(arrUrl[arrUrl.length - 2])
  }
}
