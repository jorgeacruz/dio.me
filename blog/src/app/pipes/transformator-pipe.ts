import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformator',
})
export class TransformatorPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value + 'abc';
  }
}
