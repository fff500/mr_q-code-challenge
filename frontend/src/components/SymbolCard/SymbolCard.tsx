import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import CardHeader from './src/SymbolCardHeader';
import CardPrice from './src/SymbolCardPrice';
import SymbolCardInfo from './src/SymbolCardInfo';
import { selectShowCardInfo } from '@/store/dashboardOptionsSlice';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
  activeSymbol: string | null;
};

const SymbolCard = ({ id, onClick, price, activeSymbol }: SymbolCardProps) => {
  const { trend, companyName, marketCap, industry } = useAppSelector(
    (state) => state.stocks.entities[id]
  );
  const showCardInfo = useAppSelector(selectShowCardInfo);

  const handleOnClick = () => {
    onClick(id);
  };

  const defineActiveSymbolStyles = () => {
    if (!activeSymbol) return;
    return activeSymbol === id ? 'active' : 'notActive';
  };

  return (
    <div onClick={handleOnClick} className={`symbolCard ${defineActiveSymbolStyles()}`}>
      <CardHeader id={id} trend={trend} />
      <CardPrice price={price} />
      {showCardInfo && (
        <SymbolCardInfo companyName={companyName} marketCap={marketCap} industry={industry} />
      )}
    </div>
  );
};

export default SymbolCard;
