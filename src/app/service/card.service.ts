import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { Group } from '../model/group';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  // readonly ApiUrl = "https://localhost:5001/api/image/";
  readonly ApiUrl = "http://localhost:8080/api/images/";
  // readonly ApiNoteUrl = "https://localhost:5001/api/imagenote/";
  // readonly ApiDirectionUrl = "https://localhost:5001/api/imagedirection/";
  readonly ApiNoteUrl = "http://localhost:8080/api/imagenotes/";
  readonly ApiDirectionUrl = "http://localhost:8080/api/imagedirections/";
  // readonly ApiUrlConfigSettings = "https://localhost:5001/api/configsettings/";
  readonly ApiUrlConfigSettings = "http://localhost:8080/api/configsettings/";
  // readonly ImageUrl = "https://localhost:5001/photos/";
  constructor(private http: HttpClient) { }

  private cards: Card[] = [
    { "name": "Seldlog Number"},
    { "name": "Tracking Number" },
    { "name": "Part Number"},
    { "name": "MSN" },
  ];
  private groups: Group[] = [
    { "id": "1", "name": "January", "complete": "82", "late": "1", "ontime": "81", "latep": "1.22%" },
    { "id": "2", "name": "December", "complete": "400", "late": "1", "ontime": "81", "latep": "4%" },
    { "id": "3", "name": "November", "complete": "393", "late": "1", "ontime": "81", "latep": "1.22%" },
    { "id": "4", "name": "Octember", "complete": "82", "late": "21", "ontime": "81", "latep": "1.22%" },
    { "id": "5", "name": "September", "complete": "82", "late": "8", "ontime": "81", "latep": "2.75%" },
    { "id": "6", "name": "August", "complete": "82", "late": "19", "ontime": "81", "latep": "1.22%" },
    { "id": "7", "name": "July", "complete": "82", "late": "2", "ontime": "81", "latep": "1.22%" },
    { "id": "8", "name": "June", "complete": "82", "late": "42", "ontime": "81", "latep": "1.22%" },
    { "id": "9", "name": "May", "complete": "82", "late": "1", "ontime": "81", "latep": "1.22%" },
    { "id": "10", "name": "April", "complete": "82", "late": "1", "ontime": "81", "latep": "1.22%" },
    { "id": "11", "name": "March", "complete": "82", "late": "1", "ontime": "81", "latep": "1.22%" },
    { "id": "12", "name": "Febury", "complete": "82", "late": "1", "ontime": "81", "latep": "1.22%" },
    { "id": "13", "name": "Janurary", "complete": "82", "late": "1", "ontime": "81", "latep": "1.22%" },
  ];
  private users: Group[] = [
    { "tall": "890021 801067", "moun":"pylon", "date":"04-08-07", "adt":"14-aug-08", "prj":"14-jan-08"},
    { "tall": "890021 801067", "moun":"pylon:cdd", "date":"04-08-07", "adt":"14-aug-08", "prj":"14-jan-08"},
    { "tall": "890021 801067", "moun":"cutboard pylon", "date":"04-08-07", "adt":"14-aug-08", "prj":"14-jan-08"},
    { "tall": "890021 801067", "moun":"pylo:ned", "date":"04-08-07", "adt":"14-aug-08", "prj":"14-jan-08"},
  ];
  
  private width: number;

  public getCards(): Card[] {
    return this.cards;
  }

  public getGroups(): Group[] {
    return this.groups;
  }

  public getUsers(): Group[] {
    return this.users;
  }

  setWidth(w: number) {
    this.width = w;
  }

  getWidth() {
    return this.width;
  }

  getImageList(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl);
  }

  getConfigSettings(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrlConfigSettings);
  }

  setConfigSettings(cs: any) {
    return this.http.put(this.ApiUrlConfigSettings, cs);
  }

  getImageDirectionList(): Observable<any[]> {
    return this.http.get<any>(this.ApiDirectionUrl);
  }

  getImageNotesList(): Observable<any[]> {
    return this.http.get<any>(this.ApiNoteUrl);
  }

  getImageNotesByImageId(val: any): Observable<any[]> {
    return this.http.get<any>(this.ApiNoteUrl  + val);
  }

  getImageDirectionssByImageId(val: any): Observable<any[]> {
    return this.http.get<any>(this.ApiDirectionUrl + val);
  }
  getImageByImageId(val: any): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + 'getImageById/' + val);
  }

  saveIfImagePaging(val: any) {
    return this.http.put<any>(this.ApiUrlConfigSettings, val);
  }

  getIfImagePaging(val: any): Observable<boolean> {
    return this.http.get<any>(this.ApiUrlConfigSettings + 'getIfImagePaging/' + val);
  }
}
