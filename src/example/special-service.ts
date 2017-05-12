import {AbstractBaseService} from './base-service';

export class SpecialService extends AbstractBaseService {
  public doServiceThings() {
    console.log('services can also do special things');
  }
}