export type Severity = 'critical' | 'warning' | 'minor';

export type AxisStatus = 'ok' | 'warn' | 'critical';

export interface Axis {
  id: string;
  label: string;
  score: number;
  status: AxisStatus;
  read: string;
}

export interface Finding {
  id: string;
  axis: string;
  severity: Severity;
  title: string;
  detail: string;
  evidence: string[];
  cost: string;
}

export interface CompetitorRow {
  term: string;
  volume: string;
  you: string | null;
  rivals: {name: string;rank: string;}[];
}

export interface Move {
  id: string;
  title: string;
  detail: string;
  impact: 'High' | 'Medium';
  effort: string;
  agentCanExecute: boolean;
}

export interface Diagnosis {
  domain: string;
  business: string;
  market: string;
  scannedAt: string;
  duration: string;
  score: number;
  grade: string;
  verdict: string;
  axes: Axis[];
  findings: Finding[];
  competitors: CompetitorRow[];
  moves: Move[];
}