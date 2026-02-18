// TODO: rexplore this concept


export function dynamicAge(dob: Date, digits: number): number {
  const now = Date.now();
  const diffMs = now - dob.getTime();
  const years = diffMs / (365.2425 * 24 * 60 * 60 * 1000);

  if (!Number.isFinite(digits) || digits <= 0) return Math.trunc(years);
  const factor = 10 ** Math.floor(digits);
  return Math.trunc(years * factor) / factor;
}

export default function DyanmicAge() {
  const age = dynamicAge(new Date("2005-05-13T00:00:00Z"), 0);

  return <span>{age}</span>;
}
