import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { VitalsComponent } from './vitals/vitals.component';
import { SensorsComponent } from './sensors/sensors.component';
import { CameraComponent } from './camera/camera.component';
import { MotorComponent } from './motor/motor.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: VitalsComponent},
    {path: 'sensors', component: SensorsComponent},
    {path: 'camera', component: CameraComponent},
    {path: 'motor', component: MotorComponent},
    {path: 'map', component: MapComponent}
];

@NgModule({
    imports: [
    RouterModule.forRoot(appRoutes)
  ],
    exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}