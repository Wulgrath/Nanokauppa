import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BuyformService } from '../../services/buyform.service';
import { AppComponent } from '../app.component';
import { DataService } from '../data.service';



@Component({
  selector: 'app-buypage',
  templateUrl: './buypage.component.html',
  styleUrls: ['./buypage.component.css'],
  providers: [ AppComponent ]
})
export class BuypageComponent implements OnInit {
  private buyForm: FormGroup;
  private firstnamePattern  = '^[a-zA-Zäåö-]{2,24}$';
  private lastnamePattern   = '^[a-zA-Zäåö-]{2,24}$';
  private emailPattern      = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,3})$';
  private walletPattern     = '^[a-zA-Z0-9_]{64}$';
  private buyAmountPattern  = '^[0-9]{1,4}$';
  private sendError: string;
  value: any;
  cryptos: any;
  submitted = false;
  form = {
      firstname: '',
      lastname: '',
      email: '',
      wallet: '',
      buyAmount: ''
    };
  constructor(
    private _data: DataService,
    private fb: FormBuilder,
    private BuyformService: BuyformService
  ) {

   }

  ngOnInit() {
    this._data.getPrices()
    .subscribe(res => {
      this.cryptos = res;
      console.log(res);
    });
    this.buyForm = new FormGroup({
      'firstname': new FormControl(this.form.firstname, [
        Validators.required,
        Validators.pattern(this.firstnamePattern)
      ]),
      'lastname': new FormControl(this.form.lastname, [
        Validators.required,
        Validators.pattern(this.lastnamePattern)
      ]),
      'email': new FormControl(this.form.email, [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      'wallet': new FormControl(this.form.wallet, [
        Validators.required,
        Validators.pattern(this.walletPattern)
      ]),
      'buyAmount': new FormControl(this.form.buyAmount, [
        Validators.required,
        Validators.pattern(this.buyAmountPattern)
      ])
    });
  }

// lähetetään lomake, tyhjennetään formi
  submit() {
    this.BuyformService
    .sendBuyForm(this.buyForm.value);
      this.buyForm.reset();
      this.submitted = true;
  }

  setBuyValue(value) {
    this.value = value;
  }
// haetaan kenttien arvot, jolloin niitä voidaan verrata validaattoreihin
  get firstname() { return this.buyForm.get('firstname'); }
  get lastname() { return this.buyForm.get('lastname'); }
  get email() { return this.buyForm.get('email'); }
  get wallet() { return this.buyForm.get('wallet'); }
  get buyAmount() { return this.buyForm.get('buyAmount'); }
}
