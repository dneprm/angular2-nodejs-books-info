import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "search"
})


export class SearchPipe implements PipeTransform {
  transform(data: any[], searchTerm: string): any[] {
    if(data && searchTerm) {
      searchTerm = searchTerm.toUpperCase();
      return data.filter(item => {
        return item.title.toUpperCase().indexOf(searchTerm) !== -1||item.author.toUpperCase().indexOf(searchTerm) !== -1
      });
    }
    else {
      return data
    }
  }
}
