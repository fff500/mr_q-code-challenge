import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';
import './symbolsGrid.css';

type SymbolsGridProps = {
  onSymbolClick: (symbolId: string) => void;
  activeSymbol: string | null;
};

const SymbolsGrid = ({ onSymbolClick, activeSymbol }: SymbolsGridProps) => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const prices = useAppSelector((state) => state.prices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  return (
    <ul role="list" className="symbolsGrid__list">
      {stockSymbols.map((symbol) => (
        <li role="listitem" key={symbol}>
          <SymbolCard
            price={prices[symbol]}
            onClick={onSymbolClick}
            id={symbol}
            activeSymbol={activeSymbol}
          />
        </li>
      ))}
    </ul>
  );
};

export default SymbolsGrid;
