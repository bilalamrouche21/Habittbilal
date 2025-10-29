
import React from 'react';
import { Habit } from './types';
import { INITIAL_HABITS } from './constants';
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/Header';
import HabitItem from './components/HabitItem';

const App: React.FC = () => {
  const [habits, setHabits] = useLocalStorage<Habit[]>('habits', INITIAL_HABITS);

  const handleToggleHabit = (id: number) => {
    setHabits(prevHabits =>
      prevHabits.map(habit =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const handleResetAll = () => {
    setHabits(INITIAL_HABITS.map(h => ({ ...h, completed: false })));
  };

  const completedCount = habits.filter(h => h.completed).length;
  const totalCount = habits.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200">
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <Header />
        
        <main className="bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-6 rounded-xl shadow-lg">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300">Daily Progress</h2>
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{completedCount} / {totalCount} Completed</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          
          <div className="space-y-4">
            {habits.length > 0 ? (
              habits.map(habit => (
                <HabitItem 
                  key={habit.id} 
                  habit={habit} 
                  onToggle={handleToggleHabit} 
                />
              ))
            ) : (
              <p className="text-center text-slate-500 dark:text-slate-400 py-8">
                No habits yet. Start by adding some!
              </p>
            )}
          </div>

          {habits.length > 0 && (
             <div className="mt-8 flex justify-center">
                <button 
                  onClick={handleResetAll}
                  className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-colors"
                >
                  Reset All
                </button>
             </div>
          )}
        </main>
        
        <footer className="text-center mt-8 text-sm text-slate-500 dark:text-slate-400">
          <p>Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
