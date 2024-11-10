import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import CardHeader from './src/SymbolCardHeader';
import CardPrice from './src/SymbolCardPrice';
import SymbolCardInfo from './src/SymbolCardInfo';
import { selectShowCardInfo } from '@/store/dashboardOptionsSlice';
import { usePrevious } from '@/hooks/usePrevious';
import { memo, useEffect } from 'react';
import { useAddGlow, useAddShake, VisualsClasses,  } from './hooks';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
  activeSymbol: string | null;
};

const SymbolCard = ({ id, onClick, price, activeSymbol }: SymbolCardProps) => {
  const previousPrice = usePrevious(price);
  const { trend, companyName, marketCap, industry } = useAppSelector(
    (state) => state.stocks.entities[id]
  );
  const showCardInfo = useAppSelector(selectShowCardInfo);
  const { glow, addGlow, setGlow } = useAddGlow();
  const { shake, addShake, setShake } = useAddShake();

  useEffect(() => {
    if (previousPrice) addGlow(previousPrice, price);
  }, [price]);

  useEffect(() => {
    if (previousPrice) addShake(previousPrice, price);
  }, [price]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShake('');
      setGlow('');
    }, 300);
    return () => {
      clearInterval(timeout);
    };
  }, [price]);

  const handleOnClick = (): void => {
    onClick(id);
  };

  const defineIsActiveClass = (): string | undefined => {
    if (activeSymbol) {
      return activeSymbol === id ? VisualsClasses.Active : VisualsClasses.NotActive;
    }
  };

  return (
    <div onClick={handleOnClick} className={`symbolCard ${defineIsActiveClass()} ${glow} ${shake}`}>
      <CardHeader id={id} trend={trend} />
      <CardPrice price={price} />
      {showCardInfo && (
        <SymbolCardInfo companyName={companyName} marketCap={marketCap} industry={industry} />
      )}
    </div>
  );
};

export default memo(SymbolCard);
