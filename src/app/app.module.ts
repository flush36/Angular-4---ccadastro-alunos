import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlunoService } from './services/aluno-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
