import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		    "x-rapidapi-key": "fdd021184dmshedf56ada3346800p129d41jsn2ae7ae40be91"
      },
      setParams: {
        key: '7853958dd1c4449cac823d6c4bd80815',
      }
    });
    return next.handle(req);
  }
}


