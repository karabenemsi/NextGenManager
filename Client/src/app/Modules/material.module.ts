import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatListModule, MatExpansionModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatExpansionModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatExpansionModule,
    ],
})
export class MaterialModule { }
