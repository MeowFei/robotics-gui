import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { OutputComponent } from './output/output.component';
import { VitalsComponent } from './vitals/vitals.component';
import { CameraComponent } from './camera/camera.component';
import { SensorsComponent } from './sensors/sensors.component';
import { MotorComponent } from './motor/motor.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-route.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OutputComponent,
    VitalsComponent,
    CameraComponent,
    SensorsComponent,
    MotorComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
