import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private _auth: any;
  private _member: any;
  private _guardian: any;
  private _family: any;
  private _students: any;
  private _schools: any;
  private _domain: any;
  private _context: any;

  get auth(): any {
    return this._auth || JSON.parse(sessionStorage.getItem('context')).auth;
  }

  set auth(value: any) {
    this._auth = value;
  }

  get member(): any {
    return this._member || JSON.parse(sessionStorage.getItem('context')).member;
  }

  set member(value: any) {
    this._member = value;
  }

  get guardian(): any {
    return this._guardian || JSON.parse(sessionStorage.getItem('context')).guardian;
  }

  set guardian(value: any) {
    this._guardian = value;
  }

  get family(): any {
    return this._family || JSON.parse(sessionStorage.getItem('context')).family;
  }

  set family(value: any) {
    this._family = value;
  }

  get students(): any {
    return this._students || JSON.parse(sessionStorage.getItem('context')).students;
  }

  set students(value: any) {
    this._students = value;
  }

  get schools(): any {
    return this._schools || JSON.parse(sessionStorage.getItem('context')).schools;
  }

  set schools(value: any) {
    this._schools = value;
  }

  get domain(): any {
    return this._domain || JSON.parse(sessionStorage.getItem('context')).domain;
  }

  set domain(value: any) {
    this._domain = value;
  }

  constructor() {
  }


}
