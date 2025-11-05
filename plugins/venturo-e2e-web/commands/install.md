---
description: Install and validate Playwright on the active project (dependencies, configuration, and browsers)
allowed-tools: Read, Write, Edit, Execute, Grep, Glob
---

# Playwright installation on active project

Command ini akan memverifikasi dan, bila perlu, menginstal Playwright Test, menambahkan/merapikan konfigurasi, serta memastikan browser terpasang untuk menjalankan E2E.

# Agent

Gunakan agent `agent-e2e-playwright-qa` untuk eksekusi command ini.

## Checklist
- Dev dependency `@playwright/test` terpasang pada `package.json`.
- File konfigurasi `playwright.config.ts` atau `playwright.config.js` tersedia dengan pengaturan minimum yang sesuai best practice.
- Browser Playwright terpasang (`npx playwright install --with-deps`).
- Folder `tests` ada dan dapat dieksekusi oleh Playwright.

## Langkah eksekusi

## Deteksi dependency:
- Baca `package.json`. Jika `devDependencies["@playwright/test"]` tidak ada, jalankan `npm install -D @playwright/test@latest` kemudian `npx playwright install --with-deps`

### Deteksi file konfigurasi:
- Cari `playwright.config.ts` atau `playwright.config.js`. Jika tidak ada, buat file config minimum seperti di bawah ini (TypeScript contoh default)
```
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
testDir: './tests',
fullyParallel: true,
forbidOnly: !!process.env.CI,
retries: process.env.CI ? 2 : 0,
reporter: [['html']],
use: {
trace: 'on-first-retry',
},
projects: [
{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },
],
});
```
- Jangan set `headless: false` dan `slowMo` secara global. Gunakan saat debug via CLI: `npx playwright test --headed` atau `--debug`
- Pastikan browsers terpasang: `npx playwright install --with-deps`

### Validasi cepat:
- Jalankan `npx playwright test --list`
- Jika folder `tests` belum ada, buat `tests/example.spec.ts` sampel agar validasi tidak gagal