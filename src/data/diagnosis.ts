import type { Diagnosis } from '../types/diagnosis';

export const scanSteps: string[] = [
'Fetching northloop.io — 41 pages crawled',
'Reading copy, nav and product surfaces',
'Inferring business: field-service scheduling software',
'Placing you in a market: SMB field-service SaaS, North America',
'Checking structure, content, visibility, competition',
'Comparing against 3 rivals buyers see beside you',
'Writing the diagnosis'];


export const diagnosis: Diagnosis = {
  domain: 'northloop.io',
  business: 'Field-service scheduling software for HVAC and plumbing contractors',
  market: 'SMB field-service SaaS · fleets of 40–200 technicians · North America',
  scannedAt: 'Aug 31, 2026 · 11:42',
  duration: '3m 04s',
  score: 41,
  grade: 'C−',
  verdict:
  'You are easy to find if someone already knows your name — and invisible to everyone still deciding between you and three rivals.',
  axes: [
  {
    id: 'structure',
    label: 'Structure',
    score: 72,
    status: 'ok',
    read: 'Fast and crawlable. Three core pages share one title tag.'
  },
  {
    id: 'content',
    label: 'Content',
    score: 58,
    status: 'warn',
    read: 'You describe features. Buyers search for the problem behind them.'
  },
  {
    id: 'visibility',
    label: 'Visibility',
    score: 31,
    status: 'critical',
    read: 'You rank for your brand name and almost nothing else.'
  },
  {
    id: 'competition',
    label: 'Competition',
    score: 44,
    status: 'warn',
    read: 'Rivals own the comparison pages your buyers read before calling.'
  }],

  findings: [
  {
    id: 'f1',
    axis: 'Visibility',
    severity: 'critical',
    title:
    'You rank for your brand name but not for the 4 terms your buyers actually search.',
    detail:
    'Every page you rank on page one for contains the word “northloop”. The terms contractors type when they do not yet know you — dispatch, scheduling, technician routing — return your competitors instead.',
    evidence: [
    'brand queries → 91% of all impressions',
    '“hvac dispatch software” → not in top 100',
    '“technician scheduling app” → position 78',
    '“field service route planning” → not in top 100'],

    cost: '≈1,900 qualified searches a month you never appear in'
  },
  {
    id: 'f2',
    axis: 'Content',
    severity: 'critical',
    title: 'Your homepage explains the product before it names the problem.',
    detail:
    'The first 200 words cover architecture and integrations. The words a contractor would use for their own pain — missed appointments, idle trucks, overtime — appear once, in the footer.',
    evidence: ['9.4s median time on homepage', '62% leave without a second page'],
    cost: '6 in 10 first-time visitors leave before the value lands'
  },
  {
    id: 'f3',
    axis: 'Competition',
    severity: 'warning',
    title:
    'There is no “northloop vs” page — so two competitors wrote one for you.',
    detail:
    'Three of the five results for comparison queries against your own brand are hosted by rivals, framing the tradeoff in their favour.',
    evidence: ['3 of 5 comparison results owned by rivals', '0 owned by you'],
    cost: 'Your closest-to-purchase buyers read a rival’s framing'
  },
  {
    id: 'f4',
    axis: 'Structure',
    severity: 'warning',
    title: 'Pricing sits behind a demo request.',
    detail:
    'Pricing is the second most searched term attached to your brand, and the page that should answer it asks for a phone number instead.',
    evidence: ['“northloop pricing” → 320 searches / mo', 'Landing page: /request-demo'],
    cost: 'A high-intent query answered with a form'
  },
  {
    id: 'f5',
    axis: 'Structure',
    severity: 'minor',
    title: 'Three core pages share the same title tag.',
    detail:
    '/features, /integrations and /platform all render “Northloop — Field Service Software”, so they compete with each other.',
    evidence: ['3 duplicate titles', '4 pages with no meta description'],
    cost: 'Four landing pages suppressing one another'
  }],

  competitors: [
  {
    term: 'hvac dispatch software',
    volume: '720 / mo',
    you: null,
    rivals: [
    { name: 'ServiceTitan', rank: '2' },
    { name: 'Jobber', rank: '4' },
    { name: 'Housecall', rank: '9' }]

  },
  {
    term: 'technician scheduling app',
    volume: '590 / mo',
    you: '78',
    rivals: [
    { name: 'ServiceTitan', rank: '1' },
    { name: 'Jobber', rank: '3' },
    { name: 'Housecall', rank: '6' }]

  },
  {
    term: 'field service route planning',
    volume: '410 / mo',
    you: null,
    rivals: [
    { name: 'ServiceTitan', rank: '5' },
    { name: 'Jobber', rank: '2' },
    { name: 'Housecall', rank: '—' }]

  },
  {
    term: 'northloop pricing',
    volume: '320 / mo',
    you: '1',
    rivals: [
    { name: 'ServiceTitan', rank: '—' },
    { name: 'Jobber', rank: '8' },
    { name: 'Housecall', rank: '—' }]

  }],

  moves: [
  {
    id: 'm1',
    title: 'Publish four problem-led landing pages',
    detail:
    'One page per term you are missing, written in contractor language and linked from the homepage nav.',
    impact: 'High',
    effort: 'Agent drafts in ~40 min',
    agentCanExecute: true
  },
  {
    id: 'm2',
    title: 'Rewrite the homepage to lead with the problem',
    detail:
    'Open on idle trucks and missed windows, move architecture below the fold, keep the demo CTA where it is.',
    impact: 'High',
    effort: 'Agent drafts in ~20 min',
    agentCanExecute: true
  },
  {
    id: 'm3',
    title: 'Own the three comparison pages',
    detail:
    'Honest side-by-side pages against ServiceTitan, Jobber and Housecall, on your domain, with your framing.',
    impact: 'Medium',
    effort: 'Agent drafts in ~1 hr',
    agentCanExecute: true
  },
  {
    id: 'm4',
    title: 'Put real pricing on a real pricing page',
    detail:
    'Needs a number from you. Once you give a range the agent builds the page and the internal links.',
    impact: 'High',
    effort: 'Needs your decision',
    agentCanExecute: false
  }]

};