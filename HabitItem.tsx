
import React from 'react';
import { Habit } from '../types';

interface HabitItemProps {
  habit: Habit;
  onToggle: (id: number) => void;
}

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const XIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const HabitItem: React.FC<HabitItemProps> = ({ habit, onToggle }) => {
  const isCompleted = habit.completed;
  
  const cardClasses = `
    flex items-center justify-between p-4 rounded-lg shadow-sm transition-all duration-300
    ${isCompleted 
      ? 'bg-green-100 dark:bg-green-900/50 border-l-4 border-green-500' 
      : 'bg-white dark:bg-slate-800 border-l-4 border-transparent'
    }
  `;

  const textClasses = `
    text-lg font-medium 
    ${isCompleted 
      ? 'line-through text-slate-500 dark:text-slate-400' 
      : 'text-slate-800 dark:text-slate-200'
    }
  `;

  const buttonClasses = `
    p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300
    ${isCompleted
      ? 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500'
      : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 focus:ring-indigo-500'
    }
  `;

  return (
    <div className={cardClasses}>
      <span className={textClasses}>{habit.name}</span>
      <button 
        onClick={() => onToggle(habit.id)}
        aria-label={`Mark ${habit.name} as ${isCompleted ? 'incomplete' : 'complete'}`}
        className={buttonClasses}
      >
        {isCompleted ? <CheckIcon /> : <XIcon />}
      </button>
    </div>
  );
};

export default HabitItem;
