import ListItem from '@/components/ListItem';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import './SymbolCardInfo.css';
import { convertNumberToCurrencyNotation } from '@/helpers';
import React from 'react';

type SymbolCardInfoProps = {
  companyName: string;
  marketCap: number;
  industry: string;
};

const SymbolCardInfo = ({ companyName, marketCap, industry }: SymbolCardInfoProps) => {
  const infoItems = [
    {
      icon: CompanyIcon,
      label: companyName
    },
    {
      icon: IndustryIcon,
      label: industry
    },
    {
      icon: MarketCapIcon,
      label: convertNumberToCurrencyNotation(marketCap)
    }
  ];

  return (
    <ul role="list" className="symbolCard__list">
      {infoItems.map(({ icon, label }) => {
        return (
          <li role="listitem" key={label}>
            <ListItem Icon={React.createElement(icon)} label={label} spacing="space-between" />
          </li>
        );
      })}
    </ul>
  );
};

export default SymbolCardInfo;
