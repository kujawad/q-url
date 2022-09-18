import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QurlService} from "../service/qurl.service";

@Component({
  selector: 'app-qurl',
  templateUrl: './qurl.component.html',
  styleUrls: ['./qurl.component.scss']
})
export class QurlComponent implements OnInit {

  constructor(private route: ActivatedRoute, private qUrlService: QurlService) {
  }

  ngOnInit(): void {
    const _this = this;
    this.route.params.subscribe({
      next(params) {
        _this.qUrlService.serveUrl('/urls/' + params['stamp'] + '/generate').subscribe({
          next(response) {
            window.location.href = response.body.rlink;
          }
        })
      }
    });
  }
}
