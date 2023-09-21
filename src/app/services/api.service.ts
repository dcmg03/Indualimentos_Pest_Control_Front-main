import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly GET_ALL_ROUTE = "/getAll";
  private readonly GET_ALL_COUNT_ROUTE = "/getAllCount";
  private readonly GET_ALL_BY_PAGE_ROUTE = "/getAllByPage";
  private readonly GET_ALL_BY_FILTERS = "/getAllByFilters";
  private readonly COUNT_ALL_BY_FILTERS = "/countAllByFilters";
  private readonly GET_BY_ID_ROUTE = "/getById";
  private readonly CREATE_ROUTE = "/create";
  private readonly UPDATE_ROUTE = "/update";
  private readonly DELETE_ROUTE = "/delete";
  private readonly SAVEALL_ROUTE = "/createAll";
  private readonly DELETEALL_ROUTE = "/deleteAll";

  private readonly API_URL = "http://localhost:7879/api/"

  constructor(private httpClient: HttpClient) { }

  public getAll(model: string) {
    return this.httpClient.get(this.API_URL + model + "/getAll");
  }

  public getAllCount(model: string) {
    return this.httpClient.get(this.API_URL + model + "/getAllCount");
  }

  public getAllByPage(model: string) {
    return this.httpClient.get(this.API_URL + model + "/getAllByPage");
  }

  public getAllByFilters(model: string, body: any) {
    return this.httpClient.post(this.API_URL + model + "/getAllByFilters", [body]);
  }

  public countAllByFilters(model: string) {
    return this.httpClient.get(this.API_URL + model + "/countAllByFilters");
  }

  public getById(model: string) {
    return this.httpClient.get(this.API_URL + model + "/getById");
  }

  public create(model: string, body: any) {
    return this.httpClient.post(this.API_URL + model + "/create", [body]); // Puedes pasar los datos a crear si es necesario
  }

  public update(model: string, body: any) {
    return this.httpClient.put(this.API_URL + model + "/update", [body]); // Puedes pasar los datos a actualizar si es necesario
  }

  public delete(model: string) {
    return this.httpClient.delete(this.API_URL + model + "/delete");
  }

  public createAll(model: string, body: []) {
    return this.httpClient.post(this.API_URL + model + "/createAll", body); // Puedes pasar los datos a crear si es necesario
  }

  public deleteAll(model: string) {
    return this.httpClient.delete(this.API_URL + model + "/deleteAll");
  }



}
