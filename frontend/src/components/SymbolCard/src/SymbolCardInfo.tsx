import ListItem from '@/components/ListItem';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import './SymbolCardInfo.css';

type SymbolCardInfoProps = {
  companyName: string;
};

const SymbolCardInfo = ({ companyName }: SymbolCardInfoProps) => {
  return (
    <ul role="list" className="symbolCard__list">
      <li role="listitem">
        <ListItem Icon={<CompanyIcon />} label={companyName} />
      </li>
    </ul>
  );
};

export default SymbolCardInfo;
