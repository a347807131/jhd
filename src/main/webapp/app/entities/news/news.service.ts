import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { INews } from '@/shared/model/news.model';

const baseApiUrl = 'api/news';

export default class NewsService {
  public find(id: number): Promise<INews> {
    return new Promise<INews>((resolve, reject) => {
      axios
        .get(`${baseApiUrl}/${id}`)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public retrieve(paginationQuery?: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      axios
        .get(baseApiUrl + `?${buildPaginationQueryOpts(paginationQuery)}`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public delete(id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      axios
        .delete(`${baseApiUrl}/${id}`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public create(entity: INews): Promise<INews> {
    return new Promise<INews>((resolve, reject) => {
      axios
        .post(`${baseApiUrl}`, entity)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public update(entity: INews): Promise<INews> {
    return new Promise<INews>((resolve, reject) => {
      axios
        .put(`${baseApiUrl}`, entity)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public prefer(id:number):Promise<INews>{
    return new Promise<INews>((resolve, reject) => {
      axios
        .post(`/api/prefer/news/${id}`)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public unprefer(id:number):Promise<INews>{
    return new Promise<INews>((resolve, reject) => {
      axios
        .delete(`/api/prefer/news/${id}`)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  public findPreferedNewsByLogin(login:string):Promise<any> {
    return new Promise<any>((resolve, reject) => {
      axios
        .get(`/api/prefer/news/`)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
