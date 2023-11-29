enum ECurrency {
  "USD",
  "EUR",
  "GBP",
}

interface IConvertData {
  ammount: number;
  currencyFrom: ECurrency;
  currencyTo: ECurrency;
}

// old FinancialSystem start
interface IFinancialSystem {
  convertFinancialSystem(data: IConvertData): void;
}

class FinancialSystem implements IFinancialSystem {
  private getRate(currencyFrom: ECurrency, currencyTo: ECurrency): number {
    return 123;
  }
  convertFinancialSystem({
    ammount,
    currencyFrom,
    currencyTo,
  }: IConvertData): number {
    const rate = this.getRate(currencyFrom, currencyTo);
    return ammount * rate;
  }
}
// old FinancialSystem end

//CurrencyConverter start
class CurrencyConverter {
  private getRate(currencyFrom: ECurrency, currencyTo: ECurrency): number {
    return 325;
  }
  currencyConvert(
    ammount: number,
    currencyFrom: ECurrency,
    currencyTo: ECurrency
  ): number {
    const rate = this.getRate(currencyFrom, currencyTo);
    return ammount * rate;
  }
}

class CurrencyAdapter implements IFinancialSystem {
  currencyConverter: CurrencyConverter;

  constructor(currencyConverter: CurrencyConverter) {
    this.currencyConverter = currencyConverter;
  }

  convertFinancialSystem(data: IConvertData): void {
    this.currencyConverter.currencyConvert(
      data.ammount,
      data.currencyFrom,
      data.currencyTo
    );
  }
}
//CurrencyConverter end

// client code use FinancialSystem start
function convert(
  currencyConverter: IFinancialSystem,
  convertData: IConvertData
) {
  currencyConverter.convertFinancialSystem(convertData);
}

const financialSystem = new FinancialSystem();
convert(financialSystem, {
  ammount: 10,
  currencyFrom: ECurrency.GBP,
  currencyTo: ECurrency.EUR,
});
// client code use FinancialSystem end

// client code use CurrencyConverter start
const currencyConverter = new CurrencyConverter();
const currencyAdapter = new CurrencyAdapter(currencyConverter);
convert(currencyAdapter, {
  ammount: 32,
  currencyFrom: ECurrency.EUR,
  currencyTo: ECurrency.USD,
});
// client code use CurrencyConverter end
