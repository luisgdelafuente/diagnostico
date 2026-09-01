import React from 'react';
import type { Finding, Severity } from '../../types/diagnosis';

const severityText: Record<Severity, string> = {
  critical: 'text-signal',
  warning: 'text-ink',
  minor: 'text-muted'
};

const severityMark: Record<Severity, string> = {
  critical: 'bg-signal',
  warning: 'bg-white/55',
  minor: 'bg-white/20'
};

const severityLabel: Record<Severity, string> = {
  critical: 'Critical',
  warning: 'Warning',
  minor: 'Minor'
};

interface FindingsProps {
  findings: Finding[];
}

export function Findings({ findings }: FindingsProps) {
  const [lead, ...rest] = findings;

  return (
    <section aria-labelledby="findings-heading" className="px-6 py-16 md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-baseline justify-between gap-6">
          <h2 id="findings-heading" className="text-xl font-medium tracking-tight">
            What is costing you customers
          </h2>
          <span className="font-mono text-[11px] text-muted">
            {findings.length} findings
          </span>
        </div>

        <article className="mt-8 rounded-xl border border-hairline bg-surface p-7 md:p-10">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className={`h-2 w-2 ${severityMark[lead.severity]}`} />
            <span className={`font-mono text-[11px] ${severityText[lead.severity]}`}>
              {lead.axis} · {severityLabel[lead.severity]}
            </span>
          </div>

          <h3 className="mt-5 max-w-3xl text-2xl font-medium leading-snug tracking-[-0.02em] md:text-[2rem]">
            {lead.title}
          </h3>

          <div className="mt-7 grid gap-8 border-t border-hairline pt-7 md:grid-cols-[1.4fr_1fr] md:gap-12">
            <p className="text-[15px] leading-relaxed text-muted">{lead.detail}</p>
            <ul className="space-y-2">
              {lead.evidence.map((line) =>
              <li
                key={line}
                className="flex items-baseline justify-between gap-4 border-b border-hairline pb-2 font-mono text-[11px] text-muted last:border-b-0">
                
                  <span>{line}</span>
                </li>
              )}
            </ul>
          </div>

          <p className="mt-7 flex items-baseline gap-3 border-t border-hairline pt-5 text-[13px]">
            <span className="text-muted">Cost</span>
            <span className="font-medium text-ink">{lead.cost}</span>
          </p>
        </article>

        <ul className="mt-10">
          {rest.map((finding) =>
          <li
            key={finding.id}
            className="grid gap-3 border-t border-hairline py-6 md:grid-cols-[8rem_1fr_15rem] md:items-baseline md:gap-8">
            
              <div className="flex items-center gap-2.5">
                <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 ${severityMark[finding.severity]}`} />
              
                <span className={`font-mono text-[11px] ${severityText[finding.severity]}`}>
                  {severityLabel[finding.severity]}
                </span>
              </div>

              <div>
                <h3 className="text-[15px] font-medium leading-snug text-ink">
                  {finding.title}
                </h3>
                <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-muted">
                  {finding.detail}
                </p>
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] text-muted">
                  {finding.evidence.map((line) =>
                <span key={line}>{line}</span>
                )}
                </p>
              </div>

              <p className="text-[13px] leading-relaxed text-muted md:text-right">
                {finding.cost}
              </p>
            </li>
          )}
        </ul>
      </div>
    </section>);

}