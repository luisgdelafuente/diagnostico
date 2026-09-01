import React from 'react';
import { RotateCcwIcon } from 'lucide-react';
import { Wordmark } from '../Wordmark';

interface ReportHeaderProps {
  domain: string;
  scannedAt: string;
  duration: string;
  onRestart: () => void;
}

export function ReportHeader({
  domain,
  scannedAt,
  duration,
  onRestart
}: ReportHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-hairline bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-6 px-6 py-4 md:px-10">
        <Wordmark />

        <div className="hidden min-w-0 flex-1 items-baseline gap-3 border-l border-hairline pl-6 md:flex">
          <span className="truncate font-mono text-[13px] text-ink">{domain}</span>
          <span className="shrink-0 font-mono text-[11px] text-muted">
            {scannedAt} · {duration}
          </span>
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            type="button"
            onClick={onRestart}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] text-muted transition-colors duration-150 ease-out hover:bg-surface hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal">
            
            <RotateCcwIcon className="h-3.5 w-3.5" strokeWidth={2} />
            Another URL
          </button>
          <a
            href="#first-moves"
            className="rounded-lg bg-signal px-4 py-2 text-[13px] font-medium text-canvas transition-opacity duration-150 ease-out hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal">
            
            Let the agent start fixing
          </a>
        </div>
      </div>
    </header>);

}