import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AppComponent } from '../app.component';
import { DataService } from '../data.service';
import { BuyformService } from '../../services/buyform.service';

@Component({
  selector: 'app-sellpage',
  templateUrl: './sellpage.component.html',
  styleUrls: ['./sellpage.component.css'],
  providers: [ AppComponent ]
})
export class SellpageComponent implements OnInit {
  private sellForm: FormGroup;
  private firstnamePattern  = '^[a-zA-Zäåö-]{2,24}$';
  private lastnamePattern   = '^[a-zA-Zäåö-]{2,24}$';
  private emailPattern      = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,3})$';
  private accountPattern    = '^[Ff]{1}[Ii]{1}[a-zA-Z0-9 ]{16}$';
  private walletPattern     = '^[a-zA-Z0-9_]{64}$';
  private sellAmountPattern = '^[0-9]{0,4}\.[0-9]{0,2}$';

  value: any;
  cryptos: any;
  submitted = false;
  form = {
    firstname: '',
    lastname: '',
    email: '',
    wallet: '',
    account: '',
    sellAmount: ''
  };
  constructor(
    private _data: DataService,
    private fb: FormBuilder,
    private BuyformService: BuyformService
  ) {}

  ngOnInit() {
    this._data.getPrices()
    .subscribe(res => {
      this.cryptos = res;
      console.log(res);
    });
    this.sellForm = new FormGroup({
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
      'account': new FormControl(this.form.wallet, [
        Validators.required,
        Validators.pattern(this.accountPattern)
      ]),
      'sellAmount': new FormControl(this.form.sellAmount, [
        Validators.required,
        Validators.pattern(this.sellAmountPattern)
      ])
    });
  }

// lähetetään lomake, tyhjennetään formi
  submit() {
    this.BuyformService
    .sendSellForm(this.sellForm.value);
    this.sellForm.reset();
    this.submitted = true;
  }

  setSellValue(value) {
    this.value = value;
  }
// haetaan kenttien arvot, jolloin niitä voidaan verrata validaattoreihin
  get firstname() { return this.sellForm.get('firstname'); }
  get lastname() { return this.sellForm.get('lastname'); }
  get email() { return this.sellForm.get('email'); }
  get wallet() { return this.sellForm.get('wallet'); }
  get account() { return this.sellForm.get('account'); }
  get sellAmount() { return this.sellForm.get('sellAmount'); }
}
