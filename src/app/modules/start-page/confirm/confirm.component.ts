import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
// @ts-ignore
  message: string
  allowCancel: boolean = false

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.message = data.message;
    this.allowCancel = data.cancel
  }

  ngOnInit(): void {
  }


  //Закрываем подтверждалку с ответом. "нет"="отмена"= false
  closeDialog(yes: boolean) {
    this.dialogRef.close(yes)
  }
}
