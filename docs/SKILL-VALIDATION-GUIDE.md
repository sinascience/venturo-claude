# Panduan Validasi Loading Skill Claude

## 1️⃣ Validasi Struktur File (Lokal)

### Cek Format SKILL.md
```bash
# Cek semua file SKILL.md ada di tempat yang benar
find skills/ -name "SKILL.md"

# Output yang diharapkan:
# skills/execute/SKILL.md
# skills/generate/SKILL.md
# skills/install/SKILL.md
# skills/live-test/SKILL.md
```

### Cek Frontmatter YAML Valid
```bash
# Lihat 10 baris pertama setiap SKILL.md (harus ada --- pembuka dan penutup)
for file in skills/*/SKILL.md; do
  echo "=== $file ==="
  head -10 "$file"
  echo ""
done
```

**Frontmatter yang VALID:**
```yaml
---
name: execute
description: Execute Playwright test suites with comprehensive reporting...
---
```

**Frontmatter yang INVALID:**
```yaml
---
name: execute
description: ...
tools: ["bash", "mcp__serena__*"]  # ❌ Field ini tidak valid
---
```

---

## 2️⃣ Validasi dengan Claude Code CLI

Jika menggunakan Claude Code, bisa cek dengan command:

```bash
# List available skills
claude list-skills

# Output akan menampilkan:
# Available Skills:
# - execute: Execute Playwright test suites...
# - generate: Generate comprehensive E2E test cases...
# - install: Install and configure Playwright framework...
# - live-test: Perform real-time browser testing...
```

---

## 3️⃣ Cara Manual Test di Claude UI/Chat

### A. Test Skill Discovery (Paling Penting)
Tanya Claude secara natural yang match dengan description skill:

**Test untuk Execute Skill:**
```
"Saya ingin menjalankan test Playwright. Bagaimana caranya?"
```
✅ **Expected:** Claude harusnya mention atau reference execute skill

**Test untuk Generate Skill:**
```
"Buatkan test dari user story berikut: [masukkan user story]"
```
✅ **Expected:** Claude menggunakan generate skill workflow

**Test untuk Install Skill:**
```
"Setup Playwright di project baru"
```
✅ **Expected:** Claude reference install skill

**Test untuk Live Test Skill:**
```
"Saya perlu debug aplikasi dengan browser testing"
```
✅ **Expected:** Claude mention live-test skill

### B. Test Explicit Skill Usage
```
"Gunakan execute skill untuk menjalankan test"
```

---

## 4️⃣ Indikator Skill Berhasil Di-Load

### ✅ Tanda-tanda BERHASIL:
1. Claude automatically suggests relevant skill based on context
2. Claude mentions skill name dalam response
3. Claude menggunakan instructions dari SKILL.md
4. Ketika diminta, Claude bisa explain SOP yang ada di skill
5. Claude follow workflow yang defined di skill

### ❌ Tanda-tanda GAGAL:
1. Claude tidak pernah mention skill name
2. Claude tidak follow SOP meskipun diminta
3. Claude tidak suggest skill untuk task yang relevan
4. Claude bertanya "apa itu skill?" (berarti belum di-load)
5. Behavior AI tidak sesuai dengan yang defined di skill description

---

## 5️⃣ Debugging Jika Skill Tidak Di-Load

### Cek File Path
```bash
# Pastikan struktur folder benar dari project root
ls -la .claude/skills/  # Untuk project skills
# atau
ls -la ~/.claude/skills/  # Untuk personal skills
```

### Cek YAML Syntax
```bash
# Validasi YAML syntax (gunakan python/node)
python3 << 'EOF'
import yaml
with open('skills/execute/SKILL.md', 'r') as f:
    content = f.read()
    # Extract frontmatter
    if content.startswith('---'):
        _, frontmatter, _ = content.split('---', 2)
        try:
            yaml.safe_load(frontmatter)
            print("✅ YAML valid")
        except yaml.YAMLError as e:
            print(f"❌ YAML error: {e}")
EOF
```

### Cek Required Fields
```bash
# Semua SKILL.md HARUS punya field ini:
for file in skills/*/SKILL.md; do
  echo "Checking $file..."
  grep "^name:" "$file" && echo "✅ name found" || echo "❌ name missing"
  grep "^description:" "$file" && echo "✅ description found" || echo "❌ description missing"
done
```

### Restart Claude
```bash
# Beberapa perubahan memerlukan restart Claude untuk reload skills
claude restart
# atau
code --kill-all  # Jika menggunakan VS Code extension
```

---

## 6️⃣ Checklist Validasi Lengkap

- [ ] Folder structure benar: `skills/{skill-name}/SKILL.md`
- [ ] File named exactly `SKILL.md` (bukan `skill.md` atau nama lain)
- [ ] Frontmatter ada `---` pembuka dan penutup
- [ ] Field `name` ada dan lowercase (max 64 chars)
- [ ] Field `description` ada dan deskriptif (max 1024 chars)
- [ ] Tidak ada field invalid seperti `tools`
- [ ] YAML syntax valid (tidak ada tab, indent konsisten)
- [ ] Description include "when to use it" keywords
- [ ] File tidak ada syntax error (special chars, encoding)
- [ ] Content di bawah frontmatter valid Markdown

---

## 7️⃣ Testing Command di Terminal

```bash
# Dari project root, test setiap skill

# Test Execute Skill
echo "Testing execute skill..."
grep -A 2 "name: execute" plugins/venturo-e2e-web/skills/execute/SKILL.md

# Test Generate Skill  
echo "Testing generate skill..."
grep -A 2 "name: generate" plugins/venturo-e2e-web/skills/generate/SKILL.md

# Test Install Skill
echo "Testing install skill..."
grep -A 2 "name: install" plugins/venturo-e2e-web/skills/install/SKILL.md

# Test Live-Test Skill
echo "Testing live-test skill..."
grep -A 2 "name: live-test" plugins/venturo-e2e-web/skills/live-test/SKILL.md
```

---

## 8️⃣ Validasi dengan Plugin System

Jika ini plugin Claude Code, check juga:

```bash
# Pastikan plugin.json valid
cat .claude-plugin/plugin.json | grep -i skills

# Plugin manifest harus define skills location:
# "skills": "skills/"
```

---

## 9️⃣ Real-World Test Scenarios

### Scenario 1: User Story Mode
```
User: "Buatkan test untuk login feature"
Expected: Claude automatically use generate skill dan follow SOP-G001
```

### Scenario 2: Running Tests
```
User: "Jalankan semua test di tests/auth/"
Expected: Claude use execute skill dan ikuti SOP-TE002
```

### Scenario 3: Setup Project
```
User: "Setup Playwright di project ini"
Expected: Claude use install skill dan ikuti SOP-PI002
```

### Scenario 4: Debug Browser
```
User: "Debug test yang failed dengan live browser"
Expected: Claude use live-test skill dan ikuti SOP-LT001
```

---

## 🔟 Log untuk Debugging

Jika menggunakan Claude Code CLI:
```bash
# Enable debug mode untuk melihat skill loading
claude --debug

# Lihat terminal output untuk:
# "Loading skills from..."
# "Skill 'execute' loaded successfully"
# atau error messages
```

---

## Summary: Validasi Cepat ✓

```bash
# All-in-one validation
cd plugins/venturo-e2e-web/skills && \
echo "1. Checking file structure..." && \
find . -name "SKILL.md" -type f && \
echo "" && \
echo "2. Checking frontmatter..." && \
for f in */SKILL.md; do echo "=== $f ==="; head -4 "$f"; done && \
echo "" && \
echo "3. Checking for invalid fields..." && \
grep -r "^tools:" . && echo "❌ Found invalid 'tools' field" || echo "✅ No invalid 'tools' field"
```

Harusnya output:
```
1. Checking file structure...
./execute/SKILL.md
./generate/SKILL.md
./install/SKILL.md
./live-test/SKILL.md

2. Checking frontmatter...
=== execute/SKILL.md ===
---
name: execute
description: Execute Playwright test suites with comprehensive reporting...
---

[... more files ...]

3. Checking for invalid fields...
✅ No invalid 'tools' field
```

Jika semua check ini ✅, berarti skill structure sudah benar dan siap di-load oleh Claude!
