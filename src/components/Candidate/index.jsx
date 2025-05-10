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
