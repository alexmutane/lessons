import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsecompomentPage } from './usecompoment';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    UsecompomentPage,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    IonicPageModule.forChild(UsecompomentPage),
    ComponentsModule
  ],
})
export class UsecompomentPageModule {}
