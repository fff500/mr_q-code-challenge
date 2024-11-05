import './SymbolCardHeader.css';
import arrowDown from '@/assets/down.png';
import arrowUp from '@/assets/up.png';
import { PriceTrend } from '@/store/stocksSlice';

type SymbolCardHeaderProps = {
  id: string;
  trend: PriceTrend | null;
};

const trendIcons = {
  [PriceTrend.Up]: {
    src: arrowUp,
    alt: `${PriceTrend.Up} arrow`
  },
  [PriceTrend.Down]: {
    src: arrowDown,
    alt: `${PriceTrend.Down} arrow`
  }
};

const SymbolCardHeader = ({ id, trend }: SymbolCardHeaderProps) => {
  return (
    <header className="symbolCard__header">
      <span>{id}</span>
      {trend && <img src={trendIcons[trend].src} alt={trendIcons[trend].alt} />}
    </header>
  );
};

export default SymbolCardHeader;
