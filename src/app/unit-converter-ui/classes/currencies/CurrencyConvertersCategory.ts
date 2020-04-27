import { ConverterCategoryBase } from '../ConverterCategoryBase';
import { EuroToDollarConverter } from './EuroToDollarConverter';
import { DollarToEuroConverter } from './DollarToEuroConverter';

export class CurrencyConvertersCategory extends ConverterCategoryBase {
    constructor(public name = 'Currency converters') {
        super(name);
        this.converters[0] = new EuroToDollarConverter('Euro to Dollar');
        this.converters[1] = new DollarToEuroConverter('Dollar to Euro');
    }
    getIcon(): string {
        return 'euro_symbol';
      }
}
