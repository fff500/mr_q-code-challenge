import SymbolsGrid from '@/components/SymbolsGrid';
import PriceChart from '@/components/PriceChart';
import DesktopInfo from './src/DesktopInfo';
import './symbolsView.css';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectActiveSymbol, setActiveSymbol } from '@/store/dashboardOptionsSlice';

const SymbolsView = () => {
  const activeSymbol = useAppSelector(selectActiveSymbol);
  const dispatch = useAppDispatch();

  const handleSymbolClick = (symbolId: string) => {
    activeSymbol === symbolId
      ? dispatch(setActiveSymbol(null))
      : dispatch(setActiveSymbol(symbolId));
  };

  return (
    <div className="symbolsView">
      <DesktopInfo />
      <div className="symbolsView__content">
        <div className="symbolsView__chart">
          <h3>PRICE HISTORY</h3>
          <PriceChart symbolId={activeSymbol} />
        </div>
        <div className="symbolsView__cards">
          <SymbolsGrid activeSymbol={activeSymbol} onSymbolClick={handleSymbolClick} />
        </div>
      </div>
    </div>
  );
};

export default SymbolsView;
