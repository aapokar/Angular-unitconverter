import { Component, OnInit } from '@angular/core';
import { UnitConverterService } from './services/unit-converter.service';
import { UnitConverter } from './classes/templates';

@Component({
  selector: 'app-unit-converter-ui',
  templateUrl: './unit-converter-ui.component.html',
  styleUrls: ['./unit-converter-ui.component.css']
})
export class UnitConverterUiComponent implements OnInit {

  categoryValueCopy: string;
  converterValueCopy: string;
  inputValueCopy: string;
  outputValueCopy: string;

  currentIcon: string;
  currentConverter: UnitConverter;

  inputPrompt = '';
  outputPrompt = '';

  categories = [];
  converters = [];

  constructor(private unitConverterService: UnitConverterService) {
  }

  ngOnInit(): void {
    // Todo initialize categories and converters
    this.categories = this.unitConverterService.categories;
    this.currentIcon = '';
  }
  onSubmit(e) {
    console.log('Submit');
  }

  // set icon and converters when category changes
  categoryChanged(e) {
    const category = this.categories[this.categoryValue];
    this.currentIcon = category.getIcon();
    this.converters = category.getConverters();
    this.inputValue = '';
    this.outputValue = '';
  }

  // set current converter and labels when converter changes
  converterChanged(e) {
    const category = this.categories[this.categoryValue];
    const converter = category.getConverter(e);
    this.currentConverter = converter;
    this.inputPrompt = converter.getInputUnit();
    this.outputPrompt = converter.getOutputUnit();
    this.inputValue = '';
    this.outputValue = '';
  }

  // Use current converter to output conversion when input changes
  inputChanged(e) {
    this.outputValue = this.currentConverter.convert(this.inputValue);
  }

  get inputValue(): string {
    return this.inputValueCopy;
  }
  set inputValue(value: string) {
    this.inputValueCopy = value;
  }

  get converterValue(): string {
    return this.converterValueCopy;
  }
  set converterValue(value: string) {
    this.converterValueCopy = value;
  }

  get categoryValue(): string {
    return this.categoryValueCopy;
  }
  set categoryValue(value: string) {
    this.categoryValueCopy = value;
    this.converterValue = '0';
  }

  get outputValue(): string {
    return this.outputValueCopy;
  }
  set outputValue(value: string) {
    this.outputValueCopy = value;
  }
}
