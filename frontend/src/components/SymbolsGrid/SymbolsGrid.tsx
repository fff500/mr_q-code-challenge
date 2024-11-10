import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';
import './symbolsGrid.css';
import { selectActiveSymbol, setActiveSymbol } from '@/store/dashboardOptionsSlice';

const SymbolsGrid = () => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const prices = useAppSelector((state) => state.prices);
  const activeSymbol = useAppSelector(selectActiveSymbol);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  const handleSymbolClick = useCallback((symbolId: string) => {
    dispatch(setActiveSymbol(activeSymbol === symbolId ? null : symbolId));
  }, [activeSymbol]);

  return (
    <ul role="list" className="symbolsGrid__list">
      {stockSymbols.map((symbol) => (
        <li role="listitem" key={symbol}>
          <SymbolCard
            price={prices[symbol]}
            onClick={handleSymbolClick}
            id={symbol}
            activeSymbol={activeSymbol}
          />
        </li>
      ))}
    </ul>
  );
};

export default SymbolsGrid;
