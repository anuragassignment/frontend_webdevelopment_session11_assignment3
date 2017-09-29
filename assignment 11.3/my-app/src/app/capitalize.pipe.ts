import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class Capitalize implements PipeTransform {
    transform(value: any) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}