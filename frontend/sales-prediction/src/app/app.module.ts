import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        MatDialogModule,
        MatTableModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { } 
