import { DataContext } from '../DataContext'
import { useContext } from 'react'

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a ');
  }
  return context;
}

