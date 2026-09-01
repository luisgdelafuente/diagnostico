import React from 'react';
import { motion } from 'framer-motion';
import { ReportHeader } from '../components/report/ReportHeader';
import { AxisRow } from '../components/report/AxisRow';
import { Findings } from '../components/report/Findings';
import { CompetitorTable } from '../components/report/CompetitorTable';
import { FirstMoves } from '../components/report/FirstMoves';
import { diagnosis } from '../data/diagnosis';

interface ReportProps {
  domain: string;
  onRestart: () => void;
}

export function Report({ domain, onRestart }: ReportProps) {
  return (
    <div className="min-h-screen w-full bg-canvas font-sans text-ink">
      <ReportHeader
        domain={domain}
        scannedAt={diagnosis.scannedAt}
        duration={diagnosis.duration}
        onRestart={onRestart} />
      

      <main>
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
          aria-labelledby="verdict-heading"
          className="px-6 py-16 md:px-10 md:py-20">
          
          <div className="mx-auto w-full max-w-6xl">
            <p className="font-mono text-[11px] text-muted">
              Diagnosis · {domain}
            </p>

            <h1
              id="verdict-heading"
              className="mt-6 max-w-4xl text-3xl font-medium leading-[1.15] tracking-[-0.035em] md:text-[3.25rem]">
              
              {diagnosis.verdict}
            </h1>

            <div className="mt-12 grid gap-8 border-t border-hairline pt-8 md:grid-cols-[1fr_auto] md:gap-16">
              <dl className="grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[11px] text-muted">
                    What the agent read you as
                  </dt>
                  <dd className="mt-2 text-[14px] leading-relaxed text-ink">
                    {diagnosis.business}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] text-muted">Market it placed you in</dt>
                  <dd className="mt-2 text-[14px] leading-relaxed text-ink">
                    {diagnosis.market}
                  </dd>
                </div>
              </dl>

              <div className="flex items-end gap-5 md:justify-self-end">
                <div className="text-right">
                  <p className="font-mono text-[11px] text-muted">Overall</p>
                  <p className="mt-1 font-mono text-6xl leading-none tracking-tight text-ink">
                    {diagnosis.score}
                    <span className="text-2xl text-muted">/100</span>
                  </p>
                </div>
                <span className="mb-1 rounded-md bg-signal px-2.5 py-1 font-mono text-[13px] font-medium text-canvas">
                  {diagnosis.grade}
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <AxisRow axes={diagnosis.axes} />
        </div>

        <Findings findings={diagnosis.findings} />
        <CompetitorTable rows={diagnosis.competitors} domain={domain} />
        <FirstMoves moves={diagnosis.moves} />
      </main>

      <footer className="border-t border-hairline px-6 py-8 md:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-muted">
          <span>No forms. No calls. One input.</span>
          <span>
            Diagnosed {diagnosis.scannedAt} · {diagnosis.duration}
          </span>
        </div>
      </footer>
    </div>);

}