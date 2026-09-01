import React from 'react';

export function Wordmark() {
  return (
    <div className="flex items-center gap-2.5">
      <span aria-hidden="true" className="h-2.5 w-2.5 bg-signal" />
      <span className="text-[13px] font-medium tracking-[0.14em] text-ink">
        DIAGNOSE
      </span>
    </div>);

}