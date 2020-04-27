// FahrenheitToCelsiusConverter.ts

import { UnitConverterBase } from "../UnitConverterBase";

export class EuroToDollarConverter extends UnitConverterBase {

  constructor(public name: string) {
    super(name);
  }
  getInputUnit(): string {
    return "€";
  }
  getOutputUnit(): string {
    return "$";
  }
  convert(inValue: string): string {
    let f = parseFloat(inValue);
    let c = (f * 1.08) ;
    return c.toFixed(2);
  }
}
