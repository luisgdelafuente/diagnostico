import React, { useState } from 'react';
import { Landing } from './pages/Landing';
import { Report } from './pages/Report';
import { diagnosis } from './data/diagnosis';

interface AppProps {
  startView?: 'hero' | 'report';
}

export function App({ startView = 'hero' }: AppProps) {
  const [view, setView] = useState<'hero' | 'report'>(startView);
  const [domain, setDomain] = useState(diagnosis.domain);

  if (view === 'report') {
    return (
      <Report
        domain={domain}
        onRestart={() => {
          setDomain(diagnosis.domain);
          setView('hero');
        }} />);


  }

  return (
    <Landing
      onComplete={(value) => {
        setDomain(value);
        setView('report');
      }} />);


}