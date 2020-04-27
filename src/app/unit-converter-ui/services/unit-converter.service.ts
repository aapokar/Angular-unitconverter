import { Injectable } from '@angular/core';

import { ConverterCategory, UnitConverter } from '../classes/templates';
import { TemperatureConverterCategory } from '../classes/temperatures/TemperatureConvertersCategory';
import { DistanceConverterCategory } from '../classes/distances/DistanceConvertersCategory';
import { CurrencyConvertersCategory } from '../classes/currencies/CurrencyConvertersCategory'

@Injectable({
  providedIn: 'root'
})
export class UnitConverterService {

  categories = [];
  constructor() {
    const temperatureconvertersCategory = new TemperatureConverterCategory();
    const distanceconvertersCategory = new DistanceConverterCategory();
    const currencyconvertersCategory = new CurrencyConvertersCategory();
    this.categories = [temperatureconvertersCategory,
      distanceconvertersCategory,
    currencyconvertersCategory];
   }

}
