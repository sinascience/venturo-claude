---
description: Run Playwright E2E tests dengan konfigurasi yang sesuai (lokal/CI), termasuk reporter, trace, dan opsi pemilihan suite
allowed-tools: Read, Execute
---

# Run E2E Tests

Jalankan Playwright tests dengan opsi terarah untuk lokal dan CI, dengan validasi dependency dan artifacts laporan.

## Preconditions

- Dev dependency `@playwright/test` telah terpasang di package.json.
- File `playwright.config.ts/js` tersedia dan valid.
- Browser binaries telah terpasang (lihat langkah 1).

## Instructions

1. Validasi instalasi
   - Periksa `@playwright/test` di package.json. Jika tidak ada, sarankan install.

2. Tanyakan preferensi user
   - Scope: semua tests, folder, atau file spesifik
   - Project/browser: chromium | firefox | webkit (atau gunakan projects dari config)
   - Mode: headless (default) atau headed
   - Reporter: html (default), junit (CI), line/list
   - Debug: --debug / --ui
   - Filter: by title (`-g "title"`), by tag (`-g "@critical"` bila pakai konvensi tag di title)

3. Preset eksekusi `npx playwright test --project=chromium --reporter=html`

4. Contoh perintah umum:
    ```
    Semua tests (default headless)
    `npx playwright test`

    File spesifik
    `npx playwright test tests/e2e/login.spec.ts`

    Satu project/browser
    `npx playwright test --project=chromium`

    Headed (debug visual)
    `npx playwright test --headed`

    UI mode (explorasi & rerun cepat)
    `npx playwright test --ui`

    Filter nama test
    `npx playwright test -g "login"`

    Banyak workers (percepat run lokal)
    `npx playwright test --workers=4`
    ```

5. Jika test gagal, tawarkan:
   - Jalankan ulang satu spec dengan `--debug`:
     ```
     npx playwright test tests/e2e/login.spec.ts --debug
     ```
   - Headed mode untuk observasi visual:
     ```
     npx playwright test tests/e2e/login.spec.ts --headed
     ```
   - Buka trace/HTML report untuk analisis.

## Options Quick Reference
- `--headed`: Menjalankan dengan browser terlihat (untuk debug).
- `--project=<browser>`: chromium | firefox | webkit.
- `--debug`: Inspector + pause otomatis.
- `--ui`: UI mode interaktif.
- `--reporter=html|junit|list|line`: Pilih reporter; bisa multiple di CI.
- `-g "<pattern>"`: Filter test berdasarkan title.
- `--workers=<n>`: Kontrol paralelisme (default optimal, sesuaikan resource).