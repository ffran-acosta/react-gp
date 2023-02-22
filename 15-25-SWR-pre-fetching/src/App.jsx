import { Suspense, useEffect} from 'react'
import './App.css'
import { SWRConfig } from 'swr'
import Skeleton from '@mui/material/Skeleton';
import Characters from './components/Characters';

function localStorageProvider() {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'));

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('app-cache', appCache);
  })

  // We still use the map for write & read for performance.
  return map
};

function App() {

  useEffect(() => {
  }, []);

  return (
    <SWRConfig value={{ provider: localStorageProvider, suspense: true }}>
      < Suspense 
        fallback={
          <>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </>
        }
      >
        <Characters/>
      </Suspense >
    </SWRConfig>
  )
}

export default App





