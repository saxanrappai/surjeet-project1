import { Component, Input, ViewChild, OnChanges, Injectable } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'expandable-layout-3',
  templateUrl: 'expandable.html'
})
export class ExpandableLayout3 implements OnChanges {

  ngOnChanges(changes: { [propKey: string]: any }) {
    console.log('cu data:' + JSON.stringify(this.data));
    this.data = changes['data'].currentValue;
    this.mainItems = this.data;
  }

  @Input() data: any;
  @Input() events: any;
  mainItems = [];
  @ViewChild(Content)
  content: Content;

  iconAdd = 'ios-add-outline';
  iconRemove = 'ios-remove-outline';
  constructor() {
    console.log(this.data);

  }

  onEvent(event: string, item: any, e: any) {
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

  onIncrement(group: any, e) {
    if (e) {
      // event.preventDefault();
      e.stopPropagation()
    }
    if (group.increament < group.unit_value) {
      group.increament++
    }
  }

  onDecrement(group: any, e) {
    if (e) {
      e.stopPropagation()
    }
    if (group.increament > 0) {
      group.increament--
    }
  }

  search(search?: any) {
    let dataSearch = [];
    this.mainItems.forEach(element => {
      if (element.product_name.toLowerCase().includes(search.target.value.toLowerCase())) {
        dataSearch.push(element);
      }
    });
    this.data = dataSearch;
  }

  onCancelSearch() {
    this.data = this.mainItems;
  }


}
