import './style.css';

export const Candidate = ({ name, avatar, onSelect }) => {
  return (
    <div className="candidate">
      <h3 className="candidate__name">{name}</h3>
      <img className="candidate__avatar" src={avatar} />
      <button className="btn-vote" onClick={() => onSelect(name)}>
        Vybrat
      </button>
    </div>
  );
};

/*
POKUD CHCI OŠETŘIT ŽE SE FUNKCE SPUSTÍ SPRÁVNĚ, POKUD TAM CHYBÍ TO PROPOJENÍ TAK SE NESPLUSTÍ
 
export const Candidate = ({ name, avatar, onSelect }) => {
  const handleClick = () => {
    if (onSelect) {
      onSelect(name); 
    }
  };
  return (
    <div className="candidate">
      <h3 className="candidate__name">{name}</h3>
      <img className="candidate__avatar" src={avatar} />
      <button className="btn-vote" onClick={handleClick}>
        Vybrat
      </button>
    </div>
  );
};
*/
