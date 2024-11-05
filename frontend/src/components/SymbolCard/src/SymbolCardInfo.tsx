import ListItem from '@/components/ListItem';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as CapIcon } from '@/assets/market_cap.svg';
import './SymbolCardInfo.css';
import { convertNumberToCurrencyNotation } from '@/helpers';

type SymbolCardInfoProps = {
  companyName: string;
  marketCap: number;
};

const SymbolCardInfo = ({ companyName, marketCap }: SymbolCardInfoProps) => {
  return (
    <ul role="list" className="symbolCard__list">
      <li role="listitem">
        <ListItem Icon={<CompanyIcon />} label={companyName} />
        <ListItem Icon={<CapIcon />} label={convertNumberToCurrencyNotation(marketCap)} />
      </li>
    </ul>
  );
};

export default SymbolCardInfo;
