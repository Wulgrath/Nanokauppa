import { Component, OnInit } from '@angular/core';
import { GetformsService } from '../getforms.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-orderpagesell',
  templateUrl: './orderpagesell.component.html',
  styleUrls: ['./orderpagesell.component.css']
})
export class OrderpagesellComponent implements OnInit {
  private Sellforms: any[] = [];
  constructor(
    public formsService: GetformsService
  ) { }

  ngOnInit() {
    this.getSellForms();
  }
// haetaan myyntiformit sivulle
  getSellForms(): Promise<any> {
    return this.formsService.getSellForms().then((result) => {
      this.Sellforms = result;
      console.log(this.Sellforms);
    });
  }
}
