import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import CardHeader from './src/SymbolCardHeader';
import CardPrice from './src/SymbolCardPrice';
import SymbolCardInfo from './src/SymbolCardInfo';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, companyName, marketCap, industry } = useAppSelector(
    (state) => state.stocks.entities[id]
  );

  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <div onClick={handleOnClick} className="symbolCard">
      <CardHeader id={id} trend={trend} />
      <CardPrice price={price} />
      <SymbolCardInfo companyName={companyName} marketCap={marketCap} industry={industry} />
    </div>
  );
};

export default SymbolCard;
