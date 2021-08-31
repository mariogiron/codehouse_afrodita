import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name', 'avatar', 'delete', 'update'];
  dataSource: any; //new MatTableDataSource(ELEMENT_DATA);

  constructor(private usersServices: UsersService) { }

  async ngOnInit() {
    const result: any = await this.usersServices.getAll();
    this.dataSource = new MatTableDataSource(result.data)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  actualizar() {
    alert('actualizando')
  }

  borrar() {
    alert('borrando')
  }


}
