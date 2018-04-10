import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatIconModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatIconModule,
    ],
})
export class MaterialModule { }