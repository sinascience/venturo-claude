---
description: Run live E2E tests with visible browser (headed mode) for real-time observation using MCP Playwright
allowed-tools: mcp__playwright, Read, Write, Execute
argument-hint: [urlAtauSpecPath] [--browser=chromium|firefox|webkit] [--slowmo=ms] [--keepAlive=ms]
---

# Live E2E Test

Perintah ini menjalankan pengujian end-to-end secara langsung di browser dalam mode terlihat (headed) agar tim dapat mengamati alur interaksi UI secara real-time, dengan auto-wait dan validasi berbasis kondisi untuk meminimalkan flakiness saat demo.

# Agent

Gunakan agent `agent-e2e-playwright-qa` untuk eksekusi command ini.

## Preconditions

- Dev dependency @playwright/test sudah terpasang pada project, dan browser binaries telah diinstall agar sesi live tidak gagal saat peluncuran.
- File konfigurasi Playwright (playwright.config.ts/js) tersedia sehingga baseURL, projects, dan default use dapat dimanfaatkan bila diperlukan.

Langkah verifikasi cepat (jalankan bila belum yakin):
- Install dependency dan browser:  
  - npm i -D @playwright/test@latest && npx playwright install --with-deps.
- Cek CLI:  
  - npx playwright --version.

## Input yang dikumpulkan

- Fitur atau halaman yang diuji, skenario langkah, expected outcome, dan base URL (atau gunakan baseURL dari config jika ada) untuk menyusun urutan tindakan dan asersi yang bermakna.
- Jika diberikan path file test/spec, baca dan ringkas langkah-langkahnya untuk dijalankan atau ditransformasikan ke skenario live yang sepadan.

## Strategi locator dan penantian

- Prioritaskan getByRole/getByLabel/getByText agar interaksi lebih mirip pengguna dan stabil; gunakan getByTestId saat kontrak eksplisit tersedia dan diperlukan kestabilan ekstra.
- Manfaatkan auto-wait Playwright dan tambahkan penantian berbasis kondisi seperti expect(page).toHaveURL(...) atau locator.waitFor({ state: 'visible' }) untuk mencegah jeda arbitrer dan flakiness saat demo.

## Eksekusi live

1) Luncurkan browser headed  
- Browser default: chromium; dapat diubah via flag --browser=firefox|webkit sesuai kebutuhan demo lokal.  
- Gunakan slowMo moderat (mis. 100–300 ms) hanya bila diperlukan untuk observasi, bukan default tinggi, agar sesi tetap responsif.

Contoh peluncuran:
```javascript
// Dilakukan via MCP Playwright
const browser = await playwright[browserName].launch({
  headless: false,
  slowMo: opts.slowmo ?? 150
});
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await context.newPage();
```
Pengaturan viewport eksplisit menjaga konsistensi tampilan saat presentasi.

2) Jalankan langkah dengan narasi  
- Umumkan tindakan, jalankan, tunggu kondisi relevan (URL, visibilitas elemen), ambil screenshot di momen penting, dan laporkan hasil singkat per langkah untuk transparansi.
- Contoh pola langkah:
  - Navigasi: mcp__playwright__navigate ke base URL, tunggu toHaveURL atau readiness;  
  - Interaksi: getByRole/getByLabel untuk klik/isi, hindari CSS/XPath kecuali terpaksa;  
  - Validasi: expect locator visible/hasText/URL sesuai hasil yang diharapkan.

3) Kontrol sesi dan observasi  
- Keep-alive pasca langkah terakhir (default 20–30 detik, atur dengan --keepAlive=ms) agar tim dapat mengamati hasil; berikan opsi “lanjut/selesai” tanpa menggantung sesi tanpa kontrol.
- Tawarkan membuka inspector/UI mode terpisah jika diperlukan step-through granular di luar alur live MCP.

## Contoh alur naratif

- Langkah 1: Navigasi ke [https://example.com/login] dan tunggu halaman siap, lalu screenshot “step-1-login.png” untuk bukti awal kondisi halaman.
- Langkah 2: Isi kredensial via getByLabel('Email') dan getByLabel('Password'), klik getByRole('button', { name: 'Login' }), validasi URL mengarah ke dashboard dan elemen sambutan terlihat, lalu ambil screenshot “step-2-post-login.png”.
- Langkah 3: Jika elemen tidak ditemukan, alihkan strategi locator ke role/label/testId dan ulangi langkah dengan penantian kondisi yang tepat sebelum interaksi untuk menghindari race conditions.

## Validasi dan asersi

- Gunakan asersi yang spesifik: toHaveURL(/dashboard/), toBeVisible(), toHaveText('...') untuk memastikan hasil nyata terlihat selama demo, bukan hanya tidak error.
- Hindari waitForTimeout; gunakan penantian kondisi seperti waitForURL/waitForSelector atau expect-based waits agar deterministik.

## Artefak sesi

- Screenshot otomatis pada titik penting (masuk halaman, pasca submit, state sukses/error) memudahkan post-mortem singkat usai sesi live.
- Opsional: aktifkan trace pada sesi pelengkap yang dijalankan via runner, lalu tampilkan dengan npx playwright show-trace untuk investigasi mendalam setelah demo.

## Pelaporan hasil

- Sajikan ringkasan berisi fitur, URL, durasi, daftar langkah beserta status, error ringkas pada kegagalan, dan daftar file screenshot yang dihasilkan untuk dokumentasi cepat tim.
- Berikan rekomendasi tindak lanjut (mis. perbaiki selector, tambahkan data-testid, revisi alur) berdasarkan observasi pada langkah yang rentan atau lambat.

## Penanganan error

- Pada kegagalan, ambil screenshot, catat URL saat ini, locator yang digunakan, dan pesan error; tawarkan: ulang langkah, ganti locator, atau aktifkan mode inspeksi untuk penelusuran manual.
- Gunakan guard sebelum aksi (cek visibilitas/enablement) agar error tidak berantai dan sesi live tetap terkendali.

## Integrasi MCP Playwright

- Prasyarat: server MCP Playwright aktif, @playwright/mcp-server terinstal, dan browser terpasang melalui npx playwright install agar API kontrol browser dapat digunakan.
- Verifikasi cepat: npx @playwright/mcp-server --version untuk memastikan server tersedia sebelum memulai sesi live di proyek lokal.

## Tips lokal

- UI Mode: gunakan npx playwright test --ui untuk eksplorasi tambahan di luar sesi live MCP, termasuk time-travel dan picker locator, saat perlu debugging detail.
- Run cepat: npx playwright test --project=chromium --reporter=html dan npx playwright show-report untuk melihat laporan run terakhir saat membandingkan dengan hasil sesi live.
