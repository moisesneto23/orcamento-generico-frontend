import Axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'
import Request from '@/axios/request';
import Response from '@/axios/response';
import Error from '@/axios/error';
export default class AppHttpAxios {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = Axios.create({
      baseURL
    });
    this.axiosInstance.interceptors.request.use(Request);
    this.axiosInstance.interceptors.response.use(Response,Error)
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    console.log(url)
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
/*
import Request from "@/axios/request";
import Response from "@/axios/response";
import Error from "@/axios/error";

export default class AppHttpAxios {
    private axiosInstance: AxiosInstance;
  
    constructor(baseURL: string) {
      this.axiosInstance = Axios.create({
        baseURL
      });
      //this.axiosInstance.interceptors.request.use(Request);
      this.axiosInstance.interceptors.response.use(Response, Error);
    }
  
    public get<T = any>(url: string): AxiosPromise<T> {
      return this.axiosInstance.get(url);
    }
  
    public delete(url: string): AxiosPromise {
      return this.axiosInstance.delete(url);
    }
  
    public head(url: string): AxiosPromise {
      return this.axiosInstance.head(url);
    }
  
    public post<T = any>(url: string, data?: any): AxiosPromise<T> {
      return this.axiosInstance.post(url, data);
    }
  
    public put<T = any>(url: string, data?: any): AxiosPromise<T> {
      return this.axiosInstance.put(url, data);
    }
  
    public patch<T = any>(url: string, data?: any): AxiosPromise<T> {
      return this.axiosInstance.patch(url, data);
    }
  }8*/
