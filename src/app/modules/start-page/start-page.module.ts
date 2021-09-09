import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StartPageComponent} from "./start-page/start-page.component";
import {TitleCardComponent} from "./title-card/title-card/title-card.component";
import {StartPageRoutingModule} from "./start-page-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { ConfirmComponent } from './confirm/confirm.component';



@NgModule({
  declarations: [StartPageComponent,TitleCardComponent, ConfirmComponent],
    imports: [
        CommonModule, StartPageRoutingModule, MatCardModule, MatButtonModule, MatDividerModule, MatDialogModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule
    ]
})
export class StartPageModule { }
