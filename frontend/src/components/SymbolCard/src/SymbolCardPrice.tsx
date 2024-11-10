import { memo } from 'react';
import { convertNumberToCurrencyNotation } from '@/helpers';
import './SymbolCardPrice.css';

type SymbolCardPriceProps = {
  price: number;
};

const SymbolCardPrice = ({ price }: SymbolCardPriceProps) => (
  <div className="symbolCardPrice">
    <div className="symbolCardPrice__label">Price:</div>
    <div className="symbolCardPrice__price">
      {price ? convertNumberToCurrencyNotation(price) : '--'}
    </div>
  </div>
);

export default memo(SymbolCardPrice);
