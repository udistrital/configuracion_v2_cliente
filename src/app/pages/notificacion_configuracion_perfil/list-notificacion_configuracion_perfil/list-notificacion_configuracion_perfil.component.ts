import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ConfiguracionService } from '../../../@core/data/configuracion.service';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'ngx-list-notificacion-configuracion-perfil',
  templateUrl: './list-notificacion_configuracion_perfil.component.html',
  styleUrls: ['./list-notificacion_configuracion_perfil.component.scss'],
})
export class ListNotificacionConfiguracionPerfilComponent implements OnInit {
  uid: number;
  cambiotab = false;
  settings: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private translate: TranslateService, private configuracionService: ConfiguracionService) {
    this.loadData();
    this.cargarCampos();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.cargarCampos();
    });
  }

  cargarCampos() {
    this.settings = {
      add: {
        addButtonContent: '<span class="material-icons md-30">add_circle</span>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<span class="material-icons">edit</span>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<span class="material-icons">delete</span>',
        confirmDelete: true,
      },
      mode: 'external',
      columns: {
        NotificacionConfiguracion: {
          title: this.translate.instant('GLOBAL.notificacion_configuracion'),
          // type: 'notificacion_configuracion;',
          valuePrepareFunction: (value) => value.EndPoint,
          // eslint-disable-next-line max-len
          filterFunction: (cell?: any, search?: string): boolean => (((cell.EndPoint).toLowerCase()).indexOf(search.toLowerCase()) !== -1 || search === ''),
        },
        Perfil: {
          title: this.translate.instant('GLOBAL.perfil'),
          // type: 'perfil;',
          valuePrepareFunction: (value) => value.Nombre,
          // eslint-disable-next-line max-len
          filterFunction: (cell?: any, search?: string): boolean => (((cell.Nombre).toLowerCase()).indexOf(search.toLowerCase()) !== -1 || search === ''),
        },
      },
    };
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadData(): void {
    this.configuracionService.get('notificacion_configuracion_perfil/?limit=0')
    .subscribe((res: any) => {
      if (res !== null) {
        const data = res;
        this.source.load(data);
      }
    });
  }

  ngOnInit() {
  }

  onEdit(event): void {
    this.uid = event.data.Id;
    this.activetab();
  }

  onCreate(event): void {
    this.uid = 0;
    this.activetab();
  }

  onDelete(event): void {
    const opt: any = {
      title: 'Deleting?',
      text: 'Delete NotificacionConfiguracionPerfil!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal.fire(opt)
      .then((willDelete) => {
        if (willDelete.value) {
          this.configuracionService.delete('notificacion_configuracion_perfil/', event.data).subscribe(res => {
            if (res !== null) {
              this.loadData();
              this.showToast('info', 'deleted', 'NotificacionConfiguracionPerfil deleted');
            }
          });
        }
      });
  }

  activetab(): void {
    this.cambiotab = !this.cambiotab;
  }

  selectTab(event): void {
    if (event.label === this.translate.instant('GLOBAL.lista')) {
      this.cambiotab = false;
    } else {
      this.cambiotab = true;
    }
  }

  onChange(event) {
    if (event) {
      this.loadData();
      this.cambiotab = !this.cambiotab;
    }
  }


  itemselec(event): void {
    // console.log("afssaf");
  }

  private showToast(type: string, title: string, body: string) {
console.log(type,body);
  }

}
