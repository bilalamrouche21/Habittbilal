
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center p-4 md:p-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
        My Habits Tracker
      </h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">Stay consistent, stay motivated.</p>
    </header>
  );
};

export default Header;
