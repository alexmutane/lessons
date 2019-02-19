import { NgModule } from '@angular/core';
import { BlocoComponent } from './bloco/bloco';
import { ComInputComponent } from './com-input/com-input';
@NgModule({
	declarations: 
	[
		BlocoComponent,
		ComInputComponent
	],
	imports: [],
	exports: [
		BlocoComponent,
    	ComInputComponent
	]
})
export class ComponentsModule {}
