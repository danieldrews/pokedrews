import { Injectable } from '@angular/core';
import { HttpCacheService } from '../services/http-cache.service';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cacheService: HttpCacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // pass along non-cacheable requests and invalidate cache
    if(req.method !== 'GET') {  
      environment.showCacheLog ? console.log(`Invalidating cache: ${req.method} ${req.url}`) : undefined;  
      this.cacheService.invalidateCache();  
      return next.handle(req);  
    }
    
    // attempt to retrieve a cached response  
    const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

    // return cached response  
    if (cachedResponse) {  
      environment.showCacheLog ? console.log(`Returning a cached response: ${cachedResponse.url}`, cachedResponse) : undefined;  
      return of(cachedResponse);  
    }

    // send request to server and add response to cache  
    return next.handle(req)  
      .pipe(  
        tap(event => {  
          if (event instanceof HttpResponse) {  
            environment.showCacheLog ? console.log(`Adding item to cache: ${req.url}`) : undefined;  
            this.cacheService.put(req.url, event);  
          }  
        })  
      );
  }
}
