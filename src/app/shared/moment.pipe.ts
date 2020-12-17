import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment',
  pure: false,
})
export class MomentPipe implements PipeTransform {

  public transform(m: moment.Moment, format: string = 'dd'): string {
    return m.format(format);
  }
}
