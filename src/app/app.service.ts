import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private registerurl = "https://mienem.xyz"
    constructor(private http: HttpClient) { }

    IndeedSearch(search: any) {
        return this.http.post(this.registerurl + "/indeed/get", search)
    }

    JobankSearch(search: any) {
        return this.http.post(this.registerurl + "/jobank/get", search)
    }

    LinkdinSearch(search: any) {
        return this.http.post(this.registerurl + "/linkdin/get", search)
    }

}