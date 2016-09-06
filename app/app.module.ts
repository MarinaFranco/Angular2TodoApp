import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent }        from './app.component';
import { TodoDetailComponent } from './todo-detail.component';
import { TodosComponent }     from './todos.component';
import { TodoService }         from './todo.service';
import { DashboardComponent} from './dashboard.component'; 

@NgModule({
  	imports: [ 
  		BrowserModule ,
		FormsModule,
		routing
	],
	declarations: [ 
		AppComponent, 
		DashboardComponent,
		TodoDetailComponent,
		TodosComponent,  
		
	],
	providers:[
		TodoService
	],
  	bootstrap: [ 
  		AppComponent 
  	]
})
export class AppModule { }
