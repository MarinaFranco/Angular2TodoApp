import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }        from './app.component';
import { TodoDetailComponent } from './todo-detail.component';
import { TodosComponent }     from './todos.component';
import { TodoService }         from './todo.service';

@NgModule({
  	imports: [ 
  		BrowserModule ,
		FormsModule
	],
	declarations: [ 
		AppComponent, 
		TodoDetailComponent,
		TodosComponent
	],
	providers:[
		TodoService
	],
  	bootstrap: [ 
  		AppComponent 
  	]
})
export class AppModule { }
