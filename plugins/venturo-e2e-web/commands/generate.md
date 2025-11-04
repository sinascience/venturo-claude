---
description: Generate Playwright E2E test cases berdasarkan user story atau flow, lengkap dengan struktur file dan best practices
allowed-tools: Read, Write, Edit, Grep, Glob, Execute
argument-hint: [mode] (manual|auto)
---

# Generate E2E Test

Generate file test Playwright yang robust berdasarkan user flow atau skenario Gherkin, dengan opsi Page Object Model (POM) dan template siap pakai.

# Agent

Gunakan agent `agent-e2e-playwright-qa` untuk eksekusi command ini.

## Preconditions
- Dev dependency `@playwright/test` ada di package.json dan browsers sudah terpasang.
- Tersedia `playwright.config.ts/js` yang valid.
- Folder tujuan `tests/features/` dapat dibuat jika belum ada.

## Lokator yang direkomendasikan
- getByRole/getByLabel/getByText untuk mencerminkan interaksi pengguna.  
- getByTestId sebagai kontrak eksplisit bila tersedia.  
- Hindari CSS/XPath kecuali sebagai opsi terakhir.

## Alur kerja

1) Kumpulkan konteks
- Fitur/flow yang diuji, skenario Gherkin (opsional), target browser, device/viewport, baseURL (atau gunakan dari config).

2) Analisis kode/halaman
- Identifikasi elemen kunci dan kandidat selector yang stabil; sarankan penambahan data-testid bila perlu.

3) Pilih pola implementasi
- Inline test sederhana, atau POM untuk flow kompleks (Page classes di `tests/pages/`).

4) Hasilkan file
- Path: `tests/features/{feature-name}/{file-name}.spec.ts`.
- Penamaan: `{flow-or-scenario-kebab}.spec.ts` (mis. `login-success.spec.ts`).
- Tambahkan header deskriptif dan langkah-langkah yang deterministik (tanpa waitForTimeout).

5) (Opsional) Jalankan tes
- Tawarkan menjalankan: `npx playwright test tests/features/... --project=chromium`.
- Jangan auto-run tanpa konfirmasi.

## Manual Mode (contoh)
You: /generate_e2e_test  
Claude: Mode? (1) Manual (2) Auto  
User: 1  
Claude: Path fitur?  
User: /src/features/auth  
Claude: Beri scenario Gherkin atau deskripsi singkat.  

## Auto Mode (contoh)
- Analisis folder fitur, deteksi route/komponen/role untuk menyintesis skenario, tampilkan preview, minta konfirmasi sebelum generate.

## Mapping Gherkin → Playwright (panduan)
- Given: setup state (navigasi, login helper, seed data)  
- When: interaksi pengguna (klik, isi form)  
- Then: verifikasi UI/URL/state dengan expect() yang spesifik.

## Template output (inline)
```
import { test, expect } from '@playwright/test';

test.describe('Login Flow', () => {
test('user logs in with valid credentials', async ({ page }) => {
await page.goto('/login'); // gunakan baseURL di config bila ada​ text
await page.getByLabel('Email').fill('[email protected]'); // prefer role/label[4]
await page.getByLabel('Password').fill('password123');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page).toHaveURL(/.*dashboard/);
await expect(page.getByTestId('welcome-message')).toBeVisible(); // kontrak eksplisit[5]
});
});
```

## Template POM (opsional)
- Buat `tests/pages/LoginPage.ts` dengan method `login(email, password)` dan gunakan di spec untuk reusability.

## Helper yang disarankan
- `tests/helpers/auth.ts` untuk login cepat via UI/API, dan utilitas seeding data bila perlu.

## Validasi pasca generate
- Jalankan `npx playwright test --list` untuk memastikan test terdaftar.
- Tawarkan `--ui` untuk menjalankan secara interaktif.