import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'boot-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit {

  @Input() product: any;

  form: FormGroup;

  categories: any[] = [{
    label: 'BMW'
  }, {
    label: 'Mercedes'
  }, {
    label: 'Zhyguli'
  }, {
    label: 'Audi'
  }, {
    label: 'Toyota'
  }];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [{ value: null }, Validators.required],
      description: [null, Validators.maxLength(300)],
      price: [null, Validators.maxLength(5)],
      category: null,
      imgUrl: [null, this.validateUrl],
      isHidden: null,
      //checkboxes: this.fb.array([new FormControl(true), new FormControl(false)])
    });

    this.form.valueChanges.subscribe(value => {
      Object.assign(this.product, value);
    })

    if (this.product) {
      this.form.patchValue(this.product, { emitEvent: false });
      //this.form.get('name').
    }
    this.form.get('isHidden').valueChanges.subscribe(value => {
      if (value) {
        this.form.get('price').disable({ emitEvent: false });
      } else {
        this.form.get('price').enable();
      }
    });
  }

  validateUrl(control: AbstractControl) {
    if (control.value && !control.value.startsWith('http')) {

      return { invalid: true }
    }

    return null;
  }

  arr = ['a', 'b', 'c'];

  add() {
    //change detection
    setTimeout(() => {
      //this.arr = ['1', '2', '3'];
      this.product.name = 'Test';
    });

    
  }
}
