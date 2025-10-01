import type { Page, Frame } from 'playwright';
import { waitHuman } from './utils.js';

/**
 * Robust selection of the first available time slot on Bookitit-powered widgets.
 * - Checks for no-availability texts (page + iframes)
 * - Prefers role=button by accessible name (HH:MM)
 * - Tries common slot selectors
 * - Falls back to any element containing an HH:MM text
 */
export async function selectFirstAvailableSlotOnBookitit(page: Page): Promise<boolean> {
  console.log('Looking for available appointment slots (Bookitit helper)...');

  try {
    // Detect "No availability" text both in page and iframes (Bookitit)
    const noAvailRe = /no hay (citas|disponibilidad|huecos|horas|turnos)|no (slots|availability)/i;
    const scopes: (Page | Frame)[] = [page, ...page.frames()];
    for (const f of scopes) {
      const noAvail = f.getByText(noAvailRe);
      if (await noAvail.first().isVisible().catch(() => false)) {
        console.log('No available slots message visible');
        return false;
      }
    }

    // Prefer role=button with time, then typical slot classes, then text fallback
    const timeRe = /^(0?\d|1\d|2[0-3]):[0-5]\d$/;
    for (const f of scopes) {
      // 1) ARIA role=button by accessible name
      const roleBtn = f.getByRole('button', { name: timeRe }).first();
      if (await roleBtn.isVisible().catch(() => false)) {
        const label = await roleBtn.textContent();
        console.log(`Selecting first visible slot (role=button): ${label ?? 'desconocido'}`);
        await roleBtn.click();
        await waitHuman(1200, 1800);
        return true;
      }

      // 2) Common slot selectors with time text
      const slot = f
        .locator('button, .slot.available, .time-slot:not(.disabled), .btn, .button, a[role="button"]')
        .filter({ hasText: timeRe })
        .first();
      if (await slot.isVisible().catch(() => false)) {
        const label = await slot.textContent();
        console.log(`Selecting first visible slot (slot selector): ${label ?? 'desconocido'}`);
        await slot.click();
        await waitHuman(1200, 1800);
        return true;
      }

      // 3) Fallback: any element containing HH:MM
      const textEl = f.getByText(timeRe, { exact: false }).first();
      if (await textEl.isVisible().catch(() => false)) {
        const label = await textEl.textContent();
        console.log(`Selecting first visible slot (text fallback): ${label ?? 'desconocido'}`);
        await textEl.click().catch(() => undefined);
        await waitHuman(1200, 1800);
        return true;
      }
    }

    console.log('No time blocks found');
    return false;
  } catch (error) {
    console.error('Error selecting appointment slot (helper):', error);
    return false;
  }
}

