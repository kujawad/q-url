export class QUrlRequest {
  url: string;
  stamp: string;
  usages: number

  constructor(url: string, stamp: string, usages: number) {
    this.url = url;
    this.stamp = stamp;
    this.usages = usages;
  }
}
