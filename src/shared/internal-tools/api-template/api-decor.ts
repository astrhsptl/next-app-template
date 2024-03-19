export class APIService {
  private prefixUrl;
  private createType;
  private readType;

  constructor(prefixUrl, readType, createType) {
    this.prefixUrl = prefixUrl;
    this.readType = readType;
    this.createType = createType;
  }
}
