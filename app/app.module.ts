import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule }    from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { TodoDetailComponent } from './todo-detail.component';
import { TodosComponent }     from './todos.component';
import { TodoService }         from './todo.service';
import { DashboardComponent} from './dashboard.component'; 

@NgModule({
  	imports: [ 
  		BrowserModule ,
		FormsModule,
		routing,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
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
