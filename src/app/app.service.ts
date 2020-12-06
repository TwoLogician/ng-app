import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    get(route: string) {
        return this.http.get(route)
    }
}