import React from 'react';
import type { CompetitorRow } from '../../types/diagnosis';

interface CompetitorTableProps {
  rows: CompetitorRow[];
  domain: string;
}

export function CompetitorTable({ rows, domain }: CompetitorTableProps) {
  const rivals = rows[0].rivals.map((rival) => rival.name);

  return (
    <section aria-labelledby="competition-heading" className="px-6 pb-16 md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-baseline justify-between gap-6">
          <h2 id="competition-heading" className="text-xl font-medium tracking-tight">
            Where you sit against the three rivals buyers see
          </h2>
          <span className="font-mono text-[11px] text-muted">
            Position in search results
          </span>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <thead>
              <tr className="border-y border-hairline">
                <th scope="col" className="py-3 pr-6 text-[11px] font-medium text-muted">
                  Search term
                </th>
                <th scope="col" className="py-3 pr-6 text-[11px] font-medium text-muted">
                  Volume
                </th>
                <th scope="col" className="py-3 pr-6 text-[11px] font-medium text-signal">
                  {domain}
                </th>
                {rivals.map((name) =>
                <th
                  key={name}
                  scope="col"
                  className="py-3 pr-6 text-[11px] font-medium text-muted">
                  
                    {name}
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) =>
              <tr key={row.term} className="border-b border-hairline">
                  <th
                  scope="row"
                  className="py-4 pr-6 text-[14px] font-normal text-ink">
                  
                    {row.term}
                  </th>
                  <td className="py-4 pr-6 font-mono text-[12px] text-muted">
                    {row.volume}
                  </td>
                  <td className="py-4 pr-6 font-mono text-[13px]">
                    {row.you ?
                  <span className="text-signal">#{row.you}</span> :

                  <span className="text-muted">not ranking</span>
                  }
                  </td>
                  {row.rivals.map((rival) =>
                <td
                  key={rival.name}
                  className="py-4 pr-6 font-mono text-[13px] text-muted">
                  
                      {rival.rank === '—' ? '—' : `#${rival.rank}`}
                    </td>
                )}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>);

}