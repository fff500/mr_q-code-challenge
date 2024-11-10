import ListItem from '@/components/ListItem';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import './SymbolCardInfo.css';
import { convertNumberToCurrencyNotation } from '@/helpers';
import React, { memo } from 'react';

type SymbolCardInfoProps = {
  companyName: string;
  marketCap: number;
  industry: string;
};

type InfoItem = {
  id: string,
  icon: React.ReactNode,
  label: string
}

const SymbolCardInfo = ({ companyName, marketCap, industry }: SymbolCardInfoProps) => {
  const infoItems: InfoItem[] = [
    {
      id: 'companyName',
      icon: <CompanyIcon />,
      label: companyName
    },
    {
      id: 'industry',
      icon: <IndustryIcon />,
      label: industry
    },
    {
      id: 'marketCap',
      icon: <MarketCapIcon />,
      label: convertNumberToCurrencyNotation(marketCap)
    }
  ];

  return (
    <ul role="list" className="symbolCard__list">
      {infoItems.map(({ id, icon, label }) => {
        return (
          <li role="listitem" key={id}>
            <ListItem Icon={icon} label={label} spacing="space-between" />
          </li>
        );
      })}
    </ul>
  );
};

export default memo(SymbolCardInfo);
