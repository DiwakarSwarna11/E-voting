import React, { useState, useEffect } from 'react';
import '../styles.css';

const candidates = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Brown' },
];

const Voting = () => {
  const [hasVoted, setHasVoted] = useState(localStorage.getItem('hasVoted') === 'true');
  const [isVotingOpen, setIsVotingOpen] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const startDate = new Date(localStorage.getItem('startDate'));
    const endDate = new Date(localStorage.getItem('endDate'));

    // Check if the current date is between start and end dates (inclusive)
    if (currentDate >= startDate && currentDate <= endDate) {
      setIsVotingOpen(true);
    } else {
      setIsVotingOpen(false);
    }
  }, []);

  const castVote = (candidateId) => {
    if (!hasVoted && isVotingOpen) {
      localStorage.setItem('hasVoted', 'true');
      alert(`You voted for candidate ${candidateId}`);
      setHasVoted(true);
    } else if (!isVotingOpen) {
      alert('Voting is closed.');
    }
  };

  return (
    <div className="voting-container">
      <h1>Vote for Your Candidate</h1>
      {isVotingOpen ? (
        hasVoted ? (
          <p>You have already voted.</p>
        ) : (
          candidates.map((candidate) => (
            <button key={candidate.id} onClick={() => castVote(candidate.id)}>
              {candidate.name}
            </button>
          ))
        )
      ) : (
        <p>Voting has closed. Please check back later.</p>
      )}
    </div>
  );
};

export default Voting;
