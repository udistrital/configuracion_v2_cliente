import { NotificacionEstadoUsuarioRoutingModule, routedComponents } from './notificacion_estado_usuario-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ConfiguracionService } from '../../@core/data/configuracion.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudNotificacionEstadoUsuarioComponent } from './crud-notificacion_estado_usuario/crud-notificacion_estado_usuario.component';
import { ToasterService} from 'angular2-toaster';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    ThemeModule,
    NotificacionEstadoUsuarioRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    ConfiguracionService,
    ToasterService,
  ],
  exports: [
    CrudNotificacionEstadoUsuarioComponent,
  ],
})
export class NotificacionEstadoUsuarioModule { }
