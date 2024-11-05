import { convertNumberToCurrencyNotation } from '@/helpers';
import './SymbolCardPrice.css';

type SymbolCardPriceProps = {
  price: number;
};

const SymbolCardPrice = ({ price }: SymbolCardPriceProps) => {
  return (
    <div className="symbolCard__price">
      <div>Price:</div>
      <div>{price ? convertNumberToCurrencyNotation(price) : '--'}</div>
    </div>
  );
};

export default SymbolCardPrice;
