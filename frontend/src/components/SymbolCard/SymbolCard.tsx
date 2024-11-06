import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import CardHeader from './src/SymbolCardHeader';
import CardPrice from './src/SymbolCardPrice';
import SymbolCardInfo from './src/SymbolCardInfo';
import { selectShowCardInfo } from '@/store/dashboardOptionsSlice';
import usePrevious from '@/hooks/usePrevious';

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
  const previousPrice = usePrevious(price);

  const handleOnClick = () => {
    onClick(id);
  };

  const defineActiveSymbolStyles = () => {
    if (!activeSymbol) return;
    return activeSymbol === id ? 'active' : 'notActive';
  };

  const defineShakeAnimationStyles = () =>
    previousPrice && price - previousPrice > previousPrice * 0.25 ? 'symbolCard__shake' : '';

  return (
    <div
      onClick={handleOnClick}
      className={`symbolCard ${defineActiveSymbolStyles()} ${defineShakeAnimationStyles()}`}
    >
      <CardHeader id={id} trend={trend} />
      <CardPrice price={price} />
      {showCardInfo && (
        <SymbolCardInfo companyName={companyName} marketCap={marketCap} industry={industry} />
      )}
    </div>
  );
};

export default SymbolCard;
