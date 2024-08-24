import { Component } from '@angular/core';
import { CheckboxItem } from '../models/checkbox-item.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

@Component({
  selector: 'app-checkbox-list',
  standalone: true,
  imports: [

    FormsModule,
    CommonModule
  ],
  templateUrl: './checkbox-list.component.html',
  styleUrl: './checkbox-list.component.scss'
})
export class CheckboxListComponent {
  items: CheckboxItem[] = [
    {
      name: 'Sweetdish',
      checked: false,
      subItems: [
        { name: 'Cakes', checked: false },
        { name: 'Sugarcone', checked: false }
      ]
    },
    {
      name: 'Meat',
      checked: false,
      subItems: [
        { name: 'Beef', checked: false },
        { name: 'Mutton', checked: false },
        { name: 'Bacon', checked: false }
      ]
    }
  ];

  onParentCheckboxChange(item: CheckboxItem) {
    if (item.subItems) {
      item.subItems.forEach(subItem => subItem.checked = item.checked);
    }
  }

  save(){
    debugger
    let chked = this.items.filter(i => i.checked)
    .map(i => ({
      ...i,
      subItems : i.subItems ? (i.subItems).filter(x => x.checked) : []
    }))

    console.log(chked)
  }
}
