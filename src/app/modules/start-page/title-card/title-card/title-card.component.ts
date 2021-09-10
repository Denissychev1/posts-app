import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PostService} from "../../../../services/post.service";

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.css'],
  providers: [PostService]
})
export class TitleCardComponent implements OnInit {
  article = {
    id: 0,
    title: '',
    text: ''
  };
  text = 'Новая запись';
  new = false;

  // @ts-ignore
  postForm: FormGroup;
  @Input() id: number | undefined

  constructor(public dialogRef: MatDialogRef<TitleCardComponent>, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {

    // Так как компонент для редактирования и создания нового поста один и тот же, то проверяем на наличие data
    // Если дата есть, то это карточка просмотра поста
    if (data.length > 0) {
      this.article = data[0]
      this.text = `Запись ${this.article.title}`
    } else {
      //Если даты нет, то это новый пост
      this.new = true
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  onTextValueChanged(e: any) {
    this.article.text = e;
  }

  onTitleValueChanged(e: any) {
    this.article.title = e;
  }

  // Создаем форму поста
  initForm() {
    this.postForm = this.fb.group({
      title: [`${this.article.title}`],
      text: [`${this.article.text}`],
    });
  }

  //Закрываем диалог
  closeDialog(save: boolean) {
    //если собираемся что-то сохранять (кнопка "соханить")
    if (save) {
      this.dialogRef.close({values: this.postForm.value, isNew: this.new, id: this.article.id})
    } else
      //если кнопка "закрыть"
      this.dialogRef.close();
  }
}
