import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, CoreModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
