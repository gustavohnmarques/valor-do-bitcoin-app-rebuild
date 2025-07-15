
interface Money {
    amount: string;
    decimalCount: number;
};

export const FormatCurrency = (money: Money) => {
    try {
        money.decimalCount = Math.abs(money.decimalCount);        
        money.decimalCount = isNaN(money.decimalCount) ? 2 : money.decimalCount;
  
      const negativeSign = Number(money.amount) < 0 ? "-" : "";
  
      let i = parseInt(money.amount = Math.abs(Number(money.amount) || 0).toFixed(money.decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
  
      return negativeSign + (j ? i.substr(0, j) + "." : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ".") + (money.decimalCount ? "," + Math.abs(Number(money.amount) - Number(i)).toFixed(money.decimalCount).slice(2) : "");
    } catch (e) {}
  };
  