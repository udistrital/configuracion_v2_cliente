import { PerfilXMenuOpcionRoutingModule, routedComponents } from './perfil_x_menu_opcion-routing.module';
import { NgModule } from '@angular/core';
import { ConfiguracionService } from '../../@core/data/configuracion.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from '../../shared/shared.module';
import { CrudPerfilXMenuOpcionComponent } from './crud-perfil_x_menu_opcion/crud-perfil_x_menu_opcion.component';
import { TreeModule } from '@circlon/angular-tree-component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    TreeModule,
    CommonModule,
    MatTabsModule,
    MatCardModule,
    PerfilXMenuOpcionRoutingModule,
    Ng2SmartTableModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    ConfiguracionService,
  ],
  exports: [
    CrudPerfilXMenuOpcionComponent,
  ],
})
export class PerfilXMenuOpcionModule { }
