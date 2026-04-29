import React from 'react';

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeClasses = '';
  let label = '';

  if (score > 69) {
    badgeClasses = 'bg-badge-green text-green-600';
    label = 'Strong';
  } else if (score > 49) {
    badgeClasses = 'bg-badge-yellow text-yellow-600';
    label = 'Good Start';
  } else {
    badgeClasses = 'bg-badge-red text-red-600';
    label = 'Needs Work';
  }

  return (
    <div className={`px-3 py-1 rounded-full w-fit ${badgeClasses}`}>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default ScoreBadge;
