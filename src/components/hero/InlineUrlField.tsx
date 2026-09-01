import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

interface InlineUrlFieldProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isValid: boolean;
  disabled?: boolean;
}

const PLACEHOLDER = 'yourcompany.com';

export function InlineUrlField({
  value,
  onChange,
  onSubmit,
  isValid,
  disabled = false
}: InlineUrlFieldProps) {
  return (
    <span className="relative inline-flex items-baseline">
      <span
        className={[
        'relative inline-grid border-b-2 pb-1 transition-colors duration-200 ease-out',
        value.length > 0 ? 'border-signal' : 'border-white/15'].
        join(' ')}>
        
        <span aria-hidden="true" className="invisible whitespace-pre pr-[0.06em]">
          {value || PLACEHOLDER}
        </span>
        <input
          id="hero-url"
          type="text"
          inputMode="url"
          autoComplete="url"
          spellCheck={false}
          autoFocus
          disabled={disabled}
          value={value}
          onChange={(event) => onChange(event.target.value.trim())}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              onSubmit();
            }
          }}
          placeholder={PLACEHOLDER}
          aria-label="Your website URL"
          className="absolute inset-0 w-full bg-transparent p-0 text-ink caret-signal outline-none placeholder:text-white/20 disabled:opacity-100" />
        
      </span>

      <button
        type="button"
        onClick={onSubmit}
        tabIndex={isValid ? 0 : -1}
        aria-hidden={!isValid}
        aria-label="Run the diagnosis"
        className={[
        'ml-4 grid h-11 w-11 shrink-0 translate-y-[-0.1em] place-items-center rounded-full bg-signal text-canvas',
        'transition-[opacity,transform] duration-200 ease-out',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal',
        isValid ?
        'pointer-events-auto opacity-100' :
        'pointer-events-none translate-x-[-6px] opacity-0'].
        join(' ')}>
        
        <ArrowRightIcon className="h-5 w-5" strokeWidth={2.25} />
      </button>
    </span>);

}