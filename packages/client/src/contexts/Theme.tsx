import React, { createContext, useContext, useEffect } from 'react';

type ThemeContextType = {
   isDark: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
   isDark: true, // Always dark mode for military theme
});

export const useTheme = () => {
   const context = useContext(ThemeContext);
   if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
   }
   return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   useEffect(() => {
      // Force dark mode on the HTML element
      document.documentElement.classList.add('dark');
   }, []);

   return (
      <ThemeContext.Provider value={{ isDark: true }}>
         {children}
      </ThemeContext.Provider>
   );
};
