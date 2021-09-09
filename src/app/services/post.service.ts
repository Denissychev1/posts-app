import {Injectable} from "@angular/core";

@Injectable()

export class PostService {
  infos = [
    {
      id: 1,
      text: 'text1',
      title: 'title1'
    },
    {
      id: 2,
      text: 'text12',
      title: 'title12'
    },
    {
      id: 3,
      text: 'text123',
      title: 'title123'
    },
    {
      id: 4,
      text: 'text134',
      title: 'title134'
    },
    {
      id: 5,
      text: 'text145',
      title: 'title145'
    },
    {
      id: 6,
      text: 'text156',
      title: 'title156'
    },
    {
      id: 7,
      text: 'text167',
      title: 'title167'
    },
    {
      id: 8,
      text: 'text178',
      title: 'title178'
    },
  ];


  // Метод получения данных. когда есть сервер то отправляем get-запрос на сервер
  getPosts() {
    return this.infos;
  }
}
