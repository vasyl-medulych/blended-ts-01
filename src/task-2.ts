type Currency = "USD" | "EUR" | "UAH";

interface convertCurrencyParams {
  amount: number;
  currency: Currency;
}
function convertCurrency({ amount, currency }: convertCurrencyParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 445, currency: "EUR" });
