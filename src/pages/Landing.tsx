import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wordmark } from '../components/Wordmark';
import { InlineUrlField } from '../components/hero/InlineUrlField';
import { ScanStream } from '../components/hero/ScanStream';

interface LandingProps {
  onComplete: (domain: string) => void;
}

const DOMAIN_PATTERN = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i;

export function Landing({ onComplete }: LandingProps) {
  const [value, setValue] = useState('');
  const [scanning, setScanning] = useState(false);
  const isValid = DOMAIN_PATTERN.test(value);

  const handleSubmit = () => {
    if (!isValid || scanning) return;
    setScanning(true);
  };

  const domain = value.replace(/^https?:\/\//i, '').replace(/\/$/, '');

  return (
    <div className="flex min-h-screen w-full flex-col bg-canvas font-sans text-ink">
      <header className="px-6 pt-8 md:px-12">
        <Wordmark />
      </header>

      <main className="flex flex-1 items-center px-6 md:px-12">
        <div className="mx-auto w-full max-w-5xl py-16">
          {scanning ?
          <ScanStream domain={domain} onDone={() => onComplete(domain)} /> :

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}>
            
              <h1 className="text-[2rem] font-medium leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[4.5rem]">
                <span className="block">
                  Drop{' '}
                  <InlineUrlField
                  value={value}
                  onChange={setValue}
                  onSubmit={handleSubmit}
                  isValid={isValid} />
                
                </span>
                <span className="mt-3 block text-muted">Get the diagnosis.</span>
              </h1>
            </motion.div>
          }
        </div>
      </main>

      <footer className="px-6 pb-10 md:px-12">
        <div className="mx-auto grid w-full max-w-5xl gap-8 border-t border-hairline pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-md text-[13px] leading-relaxed text-muted">
            Our agent reads your site, works out your business and market, and checks
            what decides whether you get found and chosen — structure, content,
            visibility, competition.
            <span className="mt-2 block text-ink">No forms. No calls. One input.</span>
          </p>

          <p className="flex max-w-sm items-start gap-2.5 font-mono text-[11px] leading-relaxed text-muted md:justify-self-end">
            <span aria-hidden="true" className="mt-[5px] h-1.5 w-1.5 shrink-0 bg-signal" />
            <span>
              <span className="text-ink">Visibility · Critical:</span> You rank for your
              brand name but not for the 4 terms your buyers actually search.
            </span>
          </p>
        </div>
      </footer>
    </div>);

}