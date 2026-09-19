import fs from 'node:fs';
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('home renders approved structure without horizontal overflow', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('main > section')).toHaveCount(8);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});

test('home has no serious or critical axe violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  const blocking = results.violations.filter(v => ['serious','critical'].includes(v.impact));
  expect(blocking).toEqual([]);
});

test('approved image assets load', async ({ page }) => {
  await page.goto('/');
  const images = page.locator('img');
  await expect(images).toHaveCount(3);
  for (let i = 0; i < 3; i++) {
    const image = images.nth(i);
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate(img => img.complete && img.naturalWidth > 100), { timeout: 10000 }).toBe(true);
  }
});

test('mobile menu is keyboard operable', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-chromium');
  await page.goto('/');
  const details = page.locator('.mobile-nav');
  const summary = details.locator('summary');
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(details).toHaveAttribute('open', '');
  await page.keyboard.press('Escape');
  await expect(details).not.toHaveAttribute('open', '');
});


test('capture visual QA artifact', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.evaluate(async () => { await document.fonts.ready; });
  await page.locator('img').last().scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.evaluate(() => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    const skip = document.querySelector('.skip-link');
    if (skip instanceof HTMLElement) skip.style.visibility = 'hidden';
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(100);
  fs.mkdirSync('visual-artifacts', { recursive: true });
  await page.screenshot({ path: `visual-artifacts/home-${testInfo.project.name}.png`, fullPage: true });
});
