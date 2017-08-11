import {AbstractBaseService} from './base-service';

export class StandardService extends AbstractBaseService {

  public doServiceThings(): void {
    console.log('this service does nothing special');
  }
}
