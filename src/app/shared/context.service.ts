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
  private _meta: any;
  private _store:any;
  private _cart:any;
  
  get auth(): any {
    return this._auth || this.getFromStorageContext( 'auth');
  }

  set auth(value: any) {
    this._auth = value;
  }

  get member(): any {
    return this._member || this.getFromStorageContext( 'member');
  }

  set member(value: any) {
    this._member = value;
  }

  get guardian(): any {
    return this._guardian || this.getFromStorageContext( 'guardian');
  }

  set guardian(value: any) {
    this._guardian = value;
  }

  get family(): any {
    return this._family || this.getFromStorageContext( 'family');
  }

  set family(value: any) {
    this._family = value;
  }

  get students(): any {
    return this._students || this.getFromStorageContext( 'students');
  }

  set students(value: any) {
    this._students = value;
  }

  get schools(): any {
    return this._schools || this.getFromStorageContext( 'schools');
  }

  set schools(value: any) {
    this._schools = value;
  }

  get domain(): any {
    return this._domain || this.getFromStorageContext( 'domain');
  }

  set domain(value: any) {
    this._domain = value;
  }

  get meta(): any {
    return this._meta || this.getFromStorageContext( 'meta');
  }
  set meta(value: any) {
     this._meta = value;
  }

  get cart(): any {
    return this._cart || this.getFromStorageContext( 'cart');
  }
  set cart(value: any) {
     this._cart = value;
  }
  // set store(value:any){
  //   this._store = value;
  // }
  // get store():any{
  //   return this._store || this.getFromStorageContext( 'store');
  // }
  // constructor() {
  // }

  getFromStorageContext( property: string) {
    if ('context' in sessionStorage) {
      return JSON.parse(sessionStorage.getItem('context'))[`_${property}`];
    }
    return false;
  }

  isContextExist(){
    return ('context' in sessionStorage);
  }

  setCurrentSchool(schoolId) {
    let tmpMeta = this.meta;
    tmpMeta.current.school.id = schoolId;
    this.meta = tmpMeta;
  }

}
