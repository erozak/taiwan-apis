export function fromStringToNumber(
  source: string | null | undefined,
): number | null {
  if (!source) return null;

  const normalized = Number(source);

  return Number.isNaN(normalized) ? null : normalized;
}
