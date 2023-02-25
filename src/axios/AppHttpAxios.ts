import Axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'
import Request from '@/axios/request';
import Response from '@/axios/response';
import Error from '@/axios/error';

/*type ValidInterceptor = 'request' | 'response' | 'error';

const defaultInterceptors = {
  request: (req: any) => req,
  response: (res: any) => res,
  error: (err: any) => Promise.reject(err),
};

function getAxiosInterceptor(type: ValidInterceptor) {
  try {
    const requiredInterceptor = require(`@axios/${type}`);
    return requiredInterceptor.default;
  } catch (error) {
    return defaultInterceptors[type];
  }
}*/

export class AppHttpAxios {
  public axiosInstance: AxiosInstance;

  //meu construtor
  constructor() {
    this.axiosInstance = Axios.create({
      baseURL : 'https://localhost:7068/api/'
    });
    this.axiosInstance.interceptors.request.use(Request);
    this.axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('ocirenegotnemacro') || '';
    /*this.axiosInstance.interceptors.response.use(ok=>{
      console.log('resposta boa funciona');
    },e=>{
      if(e.response.status === 400){
        alert(e.response.data.aviso);
      }
   })*/
  }
//--construtor rematricula
  /*constructor() {
    this.axiosInstance = Axios.create({
      baseURL: process.env.API_URL || process.env.VUE_APP_API_URL,
    });
    this.axiosInstance.interceptors.request.use(getAxiosInterceptor('request'));
    this.axiosInstance.interceptors.response.use(getAxiosInterceptor('response'), getAxiosInterceptor('error'));
  }*/

  public get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.axiosInstance.get(url, config);
  }

  public post<T = any>(url: string, data?: any): AxiosPromise<T> {
    return this.axiosInstance.post(url, data);
  }

  public patch<T = any>(url: string, data?: any): AxiosPromise<T> {
    return this.axiosInstance.patch(url, data);
  }

  public put<T = any>(url: string, data?: any): AxiosPromise<T> {
    return this.axiosInstance.put(url, data);
  }
  
  public delete(url: string): AxiosPromise {
    return this.axiosInstance.delete(url);
  }

  public head(url: string): AxiosPromise {
    return this.axiosInstance.head(url);
  }
}
const http = new AppHttpAxios();
export default http;
