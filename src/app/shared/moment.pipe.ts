import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moment',
  pure: false,
})
export class MomentPipe implements PipeTransform {

  transform(m: moment.Moment, format: string = 'dd'): unknown {
    return m.format(format);
  }
 
}
