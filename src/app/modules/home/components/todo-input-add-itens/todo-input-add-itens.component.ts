import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent {
  @Output() public emmitItemTaskList = new EventEmitter();

  public addItemTaskList: string = '';
  constructor() {}

  ngOnInit(): void {}

  public submitItemTaskList() {

    this.addItemTaskList = this.addItemTaskList.trim() //remove todos os espaços da frente ou de trás

    if (this.addItemTaskList) {
      this.emmitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = '';
    }
  }
}
