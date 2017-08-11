import {AbstractBaseService} from './base-service';

export class SpecialService extends AbstractBaseService {

  public doServiceThings(): void {
    console.log('services can also do special things');
  }
}
