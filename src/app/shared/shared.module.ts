import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  imports: [RouterModule],
  exports: [LogoComponent],
  declarations: [LogoComponent],
})
export class SharedModule {}
