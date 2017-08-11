export abstract class AbstractBaseService {

  public doServiceThings(): void {
    throw new Error('abstract services don\'t do things');
  }
}
