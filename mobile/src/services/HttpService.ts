import { ProductpagePage } from './../pages/productpage/productpage';
/**
 * Created by DRAGAN on 3/22/2017.
 */
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class HttpService {

  BASE_URL = 'http:/myshop.guidersmap.com/';
  GET_PRODUCT_URL = this.BASE_URL + 'index.php/api/get_products';
  GET_CATEGORY_URL = this.BASE_URL + 'index.php/api/get_categories';
  ADD_ORDER_URL = this.BASE_URL + "index.php/api/sent_order";
  // public static String LOGIN_URL = BASE_URL + "index.php/api/login";

  pageNumberStack = [];

  constructor(private http: HttpClient) { }

  sendData(email: string) {
    return this.http.get("http://facebook.us14.list-manage.com/subscribe/post-json?u=2c0f7baa8dc004a62ff3922e3&id=456928d791&EMAIL=" + encodeURI(email) + "&b_2c0f7baa8dc004a62ff3922e3_456928d791");
  }

  getproducts(cat_id: string): Observable<any> {
    let params = new HttpParams().set('cat_id', cat_id);
    return this.http.get('http://myshop.guidersmap.com/index.php/api/get_products', { params });
  }

  getUserData(user_id: string): Observable<any> {
    let params = new HttpParams().set('user_id', user_id);
    return this.http.get('http://myshop.guidersmap.com/index.php/api/get_user_data', { params });
  }

  getCategories(): Observable<any> {
    return this.http.get('http://myshop.guidersmap.com/index.php/api/get_categories');
  }

  getOrderList(user_id: string): Observable<any> {
    let params = new HttpParams().set('user_id', user_id);
    return this.http.get('http://myshop.guidersmap.com/index.php/api/my_order_list', { params });
  }

  cancelOrder(sale_id: string, user_id: string): Observable<any> {
    let params = new HttpParams().set('user_id', user_id).set('sale_id', sale_id);
    return this.http.get('http://myshop.guidersmap.com/index.php/api/cancel_order_by_id', { params });
  }

  updateToken(userId: string, token: string): Observable<any> {
    let params = new HttpParams().set('user_id', userId).set('token', token);
    return this.http.get('http://myshop.guidersmap.com/index.php/api/update_token', { params });
  }

  send_order(products: any, str_id: any) {
    let params = new HttpParams().set('id', JSON.stringify(products)).set('store_id', str_id);
    return this.http.get('http://myshop.guidersmap.com/index.php/api/sent_order', { params });
  }

  check_order(products: any, str_id: any) {
    let params = new HttpParams().set('id', JSON.stringify(products)).set('store_id', str_id);
    return this.http.get('http://myshop.guidersmap.com/index.php/api/check_order', { params });
  }


  doLogin(email: any, password: any): Observable<any> {
    let params = new HttpParams().set('user_email', email).set('password', password);
    console.log("params",params);
    return this.http.get('http://myshop.guidersmap.com/index.php/api/app_login', { params });
  }

  doRegister(formData): Observable<any> {
    let params = new HttpParams().set('user_name', formData.username).set('user_mobile', formData.mobile).set('user_email', formData.email).set('password', formData.password);
    console.log("params",params);

    return this.http.get('http://myshop.guidersmap.com/index.php/api/signup', { params });
  }

}