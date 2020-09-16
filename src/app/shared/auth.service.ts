import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // public apiEndPoint = 'http://v2.schooldirectory.loc/api'; // moved to environment configuration.

  isLogedIn() {
    return Boolean(localStorage.auth);
  }

  getToken() {
    const auth = JSON.parse(localStorage.auth); 
    return auth.access_token;
    // return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM1ZGVjNGE1YjBiOTRkZTJjNzdlYTA4NmQ1MDM3ZTY2OWMxZTc1M2QxNTFmNTE2ZDI4ZWIwNjM3ZTE5NzY3ZTFmZDNhMmZlZGVhZTMxODA4In0.eyJhdWQiOiIxIiwianRpIjoiYzVkZWM0YTViMGI5NGRlMmM3N2VhMDg2ZDUwMzdlNjY5YzFlNzUzZDE1MWY1MTZkMjhlYjA2MzdlMTk3NjdlMWZkM2EyZmVkZWFlMzE4MDgiLCJpYXQiOjE1NzY0MjMzNjksIm5iZiI6MTU3NjQyMzM2OSwiZXhwIjoxNjA4MDQ1NzY5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.W2YkQhylYD0Jj9MryINLpjG5ZYiW48PH_1zEhBwDKqsvtp7zhpFzsGt7gKDexbOMpbibiOiZfjivq8K-OHdIASrzd3DF1-zqxH0vyJzC9uQzNNNxw9nxshg30h3sD_RzS0yi4CIOg64huxdfxXIWWPOzXJGd6eeH1usrnC6oBAaTHjj1c9KL2f8KLF4Uotqd6mKDyOLUjHLWGK7Pe3P5JCn0PlpR13ha-49VoIcUEv1argu7kjICbCgp0ejQi-96KCy0VsAtR536-joJADnfDUzSweARbl04ItdT2evQ-1f_BIiYBSYs9Q01bDV52NqNhzAdHN_v2cQdA6x8op4QxRRcRFCspBvz60dWVtRNb36F07ziGWXD4R0muWSzdF1BJNXC8hi4hK80tnvdAXOq38jlGNAqgF_dn9w-_k4M-VB3bUhppPUEVb2c3aOeWyQb-Ehp77oRuL8x2Q9vFsfw9A2YvTYGVyfXquaSEFu87xYR-L5kuFQOEyeqTiAD2fQj9h7rlKRwSKWBGrL2rQMi-r25HzsqLubIqfpc_n0v3zUBNYQwvFGvQgC93IsiIiGoqpzxn0mdoefmmiZRWRtyQ3aWDLkZskQe-0aai0AM4eEPbejX7jpTg-l7Qi4ZYQDoOjl2wZQnLtl0FiyktCJO5f9VEwZxA_MgUmVWxFNIVk4';
  }
}
