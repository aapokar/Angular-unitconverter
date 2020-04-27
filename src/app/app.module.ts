import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UnitConverterUiComponent } from './unit-converter-ui/unit-converter-ui.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import {MatCardModule} from '@angular/material/card';

import { UnitConverterService } from './unit-converter-ui/services/unit-converter.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    UnitConverterUiComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatGridListModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [UnitConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
