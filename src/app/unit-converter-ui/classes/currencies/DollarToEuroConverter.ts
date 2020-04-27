// CelsiusToFahrenheitConverter.ts

import { UnitConverterBase } from '../UnitConverterBase'

export class DollarToEuroConverter extends UnitConverterBase {

  constructor(public name: string) {
    super(name);
  }
  getInputUnit(): string {
    return "$";
  }
  getOutputUnit(): string {
    return "€";
  }
  convert(inValue: string): string {
    let c = parseFloat(inValue);
    let f = (c * 0.92);
    return f.toFixed(2);
  }
}
