import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent } from './todos.component';
import {DashboardComponent } from './dashboard.component';


const appRoutes : Routes= [
	{ path: 'todos'    , component: TodosComponent},
	{ path: 'dashboard', component: DashboardComponent},
	
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);