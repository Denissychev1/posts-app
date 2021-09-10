import {Component, OnInit} from '@angular/core';
import {TitleCardComponent} from "../title-card/title-card/title-card.component";
import {MatDialog} from "@angular/material/dialog";
import {PostService} from "../../../services/post.service";
import {ConfirmService} from "../../../services/confirm.service";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
  providers: [PostService, ConfirmService]
})
export class StartPageComponent implements OnInit {
  infos: any;

  constructor(public dialog: MatDialog,
              public service: PostService, public confirm: ConfirmService
  ) {
  }


  ngOnInit(): void {
    //При инициализации компонента получаем дату
    this.infos = this.service.getPosts();
  }


  // Кнопка удаления записи
  onDeleteButtonClick(e: number) {
    this.confirm.askConfirm('Точно хотите удалить?', true).subscribe(
      data => {

        //Если да, удалить
        if (data) {
          const deletingPostId = this.infos.map((x: { id: any; }) => x.id).indexOf(e);
          if (deletingPostId > -1) {
            this.infos.splice(deletingPostId, 1);
          }
          return this.infos;
        }
      }
    )

  }

  // Функция для определения максимального айди в массиве
  getMaxOfArray(numArray: number[]) {
    return Math.max.apply(null, numArray);
  }

// Кнопка создания/редактирования записи
  onOpenButtonClick(e?: number) {
    let dialogData = e ? this.infos.filter((x: { id: number; }) => x.id === e) : []
    const dialogRef = this.dialog.open(TitleCardComponent, {
        width: '60%',
        maxHeight: '100vh - 100px',
        data: dialogData
      }
    );
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        if (data.isNew) {
          //Если есть новая запись, то пушим ее в массив
          //Создадим ей айди
          const newId = this.infos.length > 0 ? (this.getMaxOfArray(this.infos.map((x: { id: number; }) => x.id)) + 1) : 1
          // Теперь пушим данные и новый айди
          this.infos.push({
            id: newId,
            text: data.values.text,
            title: data.values.title
          })
        } else {

          //Если запись старая и отредактированная
          let editedPost = this.infos.find((x: { id: number; }) => x.id === data.id);
          editedPost.text = data.values.text;
          editedPost.title = data.values.title;
        }
      }
    });
  }

}
