import { useState, useEffect } from 'react';
import { Candidate } from '../../components/Candidate';
import './style.css';

export const HomePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [president, setPresident] = useState(null);

  useEffect(
    () =>
      setCandidates([
        { name: 'Ferdinand Mravenec', avatar: '/avatars/candidate01.png' },
        { name: 'Markéta Smetana', avatar: '/avatars/candidate02.png' },
        { name: 'Beáta Skočdopolová', avatar: '/avatars/candidate03.png' },
        { name: 'Lubomír Poňuchálek', avatar: '/avatars/candidate04.png' },
      ]),
    [],
  );

  const handleVote = (name) => {
    if (window.confirm(`opravdu chces vybrat ${name}?`)) {
      setPresident(name);
    }
    /*
    alert(`Vybral jsi ${name}`); //kdyz chci ukazat okno s vysledkem
    setPresident(name); //kdyz chci ulozit vysledek
    */
  };
  //da se to pouzit i bez teto funkce, ale pak si s tim nemuzu delat co chci, ulozit apod, poslat na server - fetch

  return (
    <div className="container">
      <div className="castle">
        <div className="castle__image"></div>
        <div className="castle__body">
          <h1>Nový prezident</h1>
          <p className="castle__president">
            {president === null ? 'Vyberte svého kandidáta' : president}
          </p>
        </div>
      </div>

      <h2>Kandidáti</h2>
      <div className="candidate-list">
        {candidates.map((c) => (
          <Candidate
            key={c.name}
            name={c.name}
            avatar={c.avatar}
            onSelect={handleVote}
            // tady by mohlo byt rovnou setPresident ale pak si tu hodnotu neuložim a nemuzu s tim dal pracovat
            //onSelect={setPresident}
          />

          //na stránce se zobrazí 4 instance te stejné komponenty
        ))}
      </div>
    </div>
  );
};
