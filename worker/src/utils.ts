/**
 * Generate human-like delay between actions
 */
export function getHumanDelay(base: number = 1000, variance: number = 2000): number {
  return base + Math.random() * variance;
}

/**
 * Wait with human-like delay
 */
export async function waitHuman(base: number = 1000, variance: number = 2000): Promise<void> {
  const delay = getHumanDelay(base, variance);
  await new Promise(resolve => setTimeout(resolve, delay));
}
