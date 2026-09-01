import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { scanSteps } from '../../data/diagnosis';

interface ScanStreamProps {
  domain: string;
  onDone: () => void;
}

export function ScanStream({ domain, onDone }: ScanStreamProps) {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    if (visible >= scanSteps.length) {
      const finish = window.setTimeout(onDone, 700);
      return () => window.clearTimeout(finish);
    }
    const next = window.setTimeout(() => setVisible((count) => count + 1), 480);
    return () => window.clearTimeout(next);
  }, [visible, onDone]);

  return (
    <div className="w-full max-w-xl">
      <p className="font-mono text-xs text-muted">
        Agent working on <span className="text-ink">{domain}</span>
      </p>

      <ol className="mt-6 space-y-2.5" aria-live="polite">
        {scanSteps.slice(0, visible).map((step, index) => {
          const done = index < visible - 1;
          return (
            <motion.li
              key={step}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: done ? 0.55 : 1, y: 0 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="flex items-start gap-3 font-mono text-[13px] leading-relaxed text-ink">
              
              <span className="mt-[5px] grid h-3.5 w-3.5 shrink-0 place-items-center">
                {done ?
                <CheckIcon className="h-3.5 w-3.5 text-signal" strokeWidth={2.5} /> :

                <motion.span
                  animate={{ opacity: [1, 0.25, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="h-1.5 w-1.5 rounded-full bg-signal" />

                }
              </span>
              <span>{step}</span>
            </motion.li>);

        })}
      </ol>
    </div>);

}