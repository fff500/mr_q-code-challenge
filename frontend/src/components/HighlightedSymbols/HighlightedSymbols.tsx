import React from 'react';
import './highlightedSymbols.css';

import PerformanceCard from '@/components/PerformanceCard';
import Row from '@/components/Row';
import { PriceTrend } from '@/store/stocksSlice';

type HighlightedSymbol = {
  trend?: PriceTrend | null;
  symbolId: string;
  volume: number;
  change: number;
};

const data: HighlightedSymbol[] = [
  {
    trend: PriceTrend.Up,
    symbolId: 'NVDA',
    volume: 323_463_212,
    change: 1.127
  },
  {
    trend: PriceTrend.Down,
    symbolId: 'AAPL',
    volume: 221_673_743,
    change: 0.6534
  },
  {
    trend: PriceTrend.Down,
    symbolId: 'TSLA',
    volume: 151_865_316,
    change: 0.99
  },
  {
    trend: PriceTrend.Down,
    symbolId: 'AMZN',
    volume: 98_527_158,
    change: 0.9269
  },
  {
    trend: PriceTrend.Up,
    symbolId: 'GOOGL',
    volume: 83_316_914,
    change: 1.1134
  },
  {
    trend: PriceTrend.Down,
    symbolId: 'MSFT',
    volume: 73_735_142,
    change: 0.9932
  }
];

const HighlightedSymbols = () => {
  return (
    <Row spacing="md" className="highlightedSymbols">
      {data.map((symbol, index) => {
        return (
          <PerformanceCard
            change={symbol.change}
            key={index}
            title={symbol.symbolId}
            volume={symbol.volume}
          />
        );
      })}
    </Row>
  );
};

export default HighlightedSymbols;
