import { NotificacionConfiguracionPerfilRoutingModule, routedComponents } from './notificacion_configuracion_perfil-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ConfiguracionService } from '../../@core/data/configuracion.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
;
import { SharedModule } from '../../shared/shared.module';
import { CrudNotificacionConfiguracionPerfilComponent } from './crud-notificacion_configuracion_perfil/crud-notificacion_configuracion_perfil.component';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    ThemeModule,
    NotificacionConfiguracionPerfilRoutingModule,
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
    CrudNotificacionConfiguracionPerfilComponent,
  ],
})
export class NotificacionConfiguracionPerfilModule { }
