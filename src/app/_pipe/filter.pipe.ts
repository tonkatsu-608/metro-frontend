import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapFilter'
})

export class FilterPipe implements PipeTransform {
  // transform(items: any[], searchText: string): any[] {
  //   if (!items) return [];
  //   if (!searchText) return items;
  //   searchText = searchText.toLowerCase();
  //   return items.filter(it => {
  //     console.log("it: " + it);
  //     return it.toLowerCase().includes(searchText);
  //   });
  // }
  transform(mapList: any[], filterValue: string): any[] {
    if (!mapList || !filterValue) return mapList;
    filterValue = filterValue.toLowerCase();
    return mapList.filter((map: any) =>
      map.name.toLowerCase().includes(filterValue) || 
      map.firstname.toLowerCase().includes(filterValue) || 
      map.lastname.toLowerCase().includes(filterValue) || 
      map.email.toLowerCase().includes(filterValue)
    );
  }
}