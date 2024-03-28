import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
