import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatListModule, MatExpansionModule, MatTableModule, MatTabsModule, MatCardModule, MatTooltipModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatExpansionModule,
      MatTableModule,
      MatTabsModule,
      MatCardModule,
      MatTooltipModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatExpansionModule,
      MatTableModule,
      MatTabsModule,
      MatCardModule,
      MatTooltipModule,
    ],
})
export class MaterialModule { }
