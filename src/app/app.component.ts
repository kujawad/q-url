import {Component} from '@angular/core';
import {QurlService} from "./service/qurl.service";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'q-url';
  url: any;
  stamp: any;
  usages: any;
  rlink: any;
  submitted = false;
  copied = false;
  hideError = false;
  qUrlService: QurlService;
  error: any;

  constructor(qUrlService: QurlService) {
    this.qUrlService = qUrlService;
  }

  onSubmit() {
    if (!this.url) {
      return
    }
    const _this = this;
    this.qUrlService.addUrl('/urls', {url: this.url, stamp: this.stamp, usages: this.usages})
      .subscribe({
        next(resp) {
          _this.submitted = resp.status == 201;
          _this.rlink = environment.QURL_URL + '/' + resp.body.stamp;
        },
        error(error) {
          _this.submitted = error.status == 201;
          _this.error = error.details;
          _this.fadeoutError();
        }
      });
  }

  fadeoutError() {
    setTimeout( () => {
      this.hideError = true;
    }, 3000);
    this.hideError = false;
  }

  copyLink(rlink: string) {
    this.copied = true;
    window.navigator.clipboard.writeText(rlink).then();
  }
}
