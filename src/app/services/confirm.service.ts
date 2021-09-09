import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmComponent} from "../modules/start-page/confirm/confirm.component";

@Injectable()

export class ConfirmService {
  constructor(public dialog: MatDialog) {
  }

  // @ts-ignore
  // Открываем диалоговое окно с подтверждением удаления
  public askConfirm(message: string, cancel: boolean = true) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {message: message, cancel: cancel},
      disableClose: true
    })
    return dialogRef.afterClosed()
  }
}
