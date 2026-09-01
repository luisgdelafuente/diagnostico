import React from 'react';
import { ZapIcon, UserIcon } from 'lucide-react';
import type { Move } from '../../types/diagnosis';

interface FirstMovesProps {
  moves: Move[];
}

export function FirstMoves({ moves }: FirstMovesProps) {
  const executable = moves.filter((move) => move.agentCanExecute).length;

  return (
    <section
      id="first-moves"
      aria-labelledby="moves-heading"
      className="border-t border-hairline px-6 py-16 md:px-10">
      
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-baseline justify-between gap-6">
          <h2 id="moves-heading" className="text-xl font-medium tracking-tight">
            The first moves
          </h2>
          <span className="font-mono text-[11px] text-muted">
            {executable} of {moves.length} the agent can execute now
          </span>
        </div>

        <ol className="mt-8">
          {moves.map((move, index) =>
          <li
            key={move.id}
            className="grid gap-3 border-t border-hairline py-6 md:grid-cols-[3rem_1fr_13rem] md:items-baseline md:gap-8">
            
              <span className="font-mono text-[13px] text-muted">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div>
                <h3 className="text-[15px] font-medium text-ink">{move.title}</h3>
                <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-muted">
                  {move.detail}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 md:justify-end">
                <span className="rounded-md border border-hairline px-2 py-1 font-mono text-[11px] text-muted">
                  {move.impact} impact
                </span>
                {move.agentCanExecute ?
              <span className="flex items-center gap-1.5 rounded-md bg-signal/15 px-2 py-1 font-mono text-[11px] text-signal">
                    <ZapIcon className="h-3 w-3" strokeWidth={2.25} />
                    {move.effort}
                  </span> :

              <span className="flex items-center gap-1.5 rounded-md border border-hairline px-2 py-1 font-mono text-[11px] text-ink">
                    <UserIcon className="h-3 w-3" strokeWidth={2.25} />
                    {move.effort}
                  </span>
              }
              </div>
            </li>
          )}
        </ol>

        <div className="mt-12 flex flex-col gap-5 border-t border-hairline pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[15px] leading-relaxed text-ink">
            The same agent that found this can start fixing it — drafts land for your
            approval before anything ships.
          </p>
          <a
            href="#first-moves"
            className="shrink-0 rounded-lg bg-signal px-5 py-3 text-[14px] font-medium text-canvas transition-opacity duration-150 ease-out hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal">
            
            Let the agent start fixing
          </a>
        </div>
      </div>
    </section>);

}