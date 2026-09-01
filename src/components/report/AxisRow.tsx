import React from 'react';
import type { Axis } from '../../types/diagnosis';

const SEGMENTS = 14;

const statusLabel: Record<Axis['status'], string> = {
  ok: 'Holding',
  warn: 'Weak',
  critical: 'Critical'
};

interface AxisRowProps {
  axes: Axis[];
}

export function AxisRow({ axes }: AxisRowProps) {
  return (
    <section aria-labelledby="axes-heading" className="border-t border-hairline">
      <h2 id="axes-heading" className="sr-only">
        What the agent checked
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {axes.map((axis) => {
          const filled = Math.round(axis.score / 100 * SEGMENTS);
          const critical = axis.status === 'critical';
          return (
            <div
              key={axis.id}
              className="flex flex-col gap-4 border-b border-hairline px-6 py-7 lg:border-b-0 lg:border-l lg:first:border-l-0 md:px-8">
              
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[13px] font-medium text-ink">{axis.label}</span>
                <span
                  className={[
                  'font-mono text-[11px]',
                  critical ? 'text-signal' : 'text-muted'].
                  join(' ')}>
                  
                  {statusLabel[axis.status]}
                </span>
              </div>

              <div className="flex items-end gap-3">
                <span
                  className={[
                  'font-mono text-3xl leading-none tracking-tight',
                  critical ? 'text-signal' : 'text-ink'].
                  join(' ')}>
                  
                  {axis.score}
                </span>
                <div
                  className="flex h-4 flex-1 items-end gap-[3px]"
                  role="img"
                  aria-label={`${axis.label} score ${axis.score} out of 100`}>
                  
                  {Array.from({ length: SEGMENTS }).map((_, index) =>
                  <span
                    key={index}
                    className={[
                    'h-full flex-1',
                    index < filled ?
                    critical ?
                    'bg-signal' :
                    'bg-white/55' :
                    'bg-white/10'].
                    join(' ')} />

                  )}
                </div>
              </div>

              <p className="text-[13px] leading-relaxed text-muted">{axis.read}</p>
            </div>);

        })}
      </div>
    </section>);

}