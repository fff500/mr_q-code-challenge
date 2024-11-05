import './SymbolCardHeader.css';

type SymbolCardHeaderProps = {
  id: string;
  trend: string | null;
};

const SymbolCardHeader = ({ id, trend }: SymbolCardHeaderProps) => {
  return (
    <header className="symbolCard__header">
      {id} - {trend}
    </header>
  );
};

export default SymbolCardHeader;
