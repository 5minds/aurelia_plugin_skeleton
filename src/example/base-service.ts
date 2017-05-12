export abstract class AbstractBaseService {
  public doServiceThings() {
    throw new Error('abstract services don\'t do things');
  }
}
