<p align="center">
  <img src="https://img.shields.io/badge/Python-3.8+-blue?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/Version-1.0.0-red?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Platform-Windows%20%7C%20Linux%20%7C%20macOS-lightgrey?style=for-the-badge" alt="Platform">
</p>

<h1 align="center">AKHA XSS Scanner</h1>

<p align="center">
  <b>Advanced Cross-Site Scripting (XSS) vulnerability scanner with Dalfox-style probe-first detection, AI-powered payload generation, and built-in blind XSS callback server.</b>
</p>

<p align="center">
  <a href="README-TR.md">Turkce</a>
</p>

---

## Overview

AKHA is a modern, feature-rich XSS scanner designed for security researchers and penetration testers. Instead of blindly firing payloads and checking for reflections, AKHA uses an intelligent **probe-first approach** — it first sends a harmless canary string to understand how the application handles input (encoding, filtering, context), then generates targeted payloads based on the analysis.

### Key Highlights

- **Dalfox-style probe-first engine** — minimizes false positives
- **5 XSS types**: Reflected, Stored, DOM-based, Blind, POST-based
- **API/JSON body XSS** — tests REST API parameters via JSON POST
- **Built-in HTTPS callback server** for blind XSS (no external server needed)
- **Multi-target scanning** — scan URL lists from a file (`-l targets.txt`)
- **Webhook notifications** — Discord, Slack, Telegram real-time alerts
- **Playwright + Selenium** for DOM XSS (auto-detects available engine)
- **WAF detection & bypass** with engine-specific evasion (Cloudflare, Akamai, Imperva, Sucuri)
- **AI-powered payload learning** — learns from successful payloads to improve future scans
- **Smart crawler** with form submission & JavaScript link parsing
- **Professional HTML reports** with full request/response proof

---

## Features

### XSS Detection Engine
| Feature | Description |
|---------|-------------|
| **Reflected XSS** | Context-aware payload injection with encoding detection |
| **Stored XSS** | Tracks all injected payloads and verifies persistence |
| **DOM XSS** | Static source analysis + dynamic Playwright/Selenium browser testing |
| **Blind XSS** | Built-in HTTP/HTTPS callback server with auto-detection |
| **POST XSS** | Full form parameter testing with `form_action` context |
| **API/JSON XSS** | REST API `application/json` body parameter injection |

### Scanning Capabilities
| Feature | Description |
|---------|-------------|
| **Probe-First Approach** | Sends canary strings before real payloads to understand context |
| **Context Analysis** | Detects HTML body, attribute, JavaScript, URL, and comment contexts |
| **WAF Detection** | Identifies WAF vendors and applies targeted bypass techniques |
| **CSP Analysis** | Parses Content-Security-Policy headers for XSS-relevant weaknesses |
| **Concurrent Crawling** | Multi-threaded crawler with configurable depth and page limits |
| **Form Discovery** | Automatically submits forms to discover hidden endpoints |
| **Parameter Discovery** | Finds hidden parameters using a 1000-word wordlist |
| **Scope Control** | Include/exclude URL patterns with regex support |

### Reporting & Output
| Feature | Description |
|---------|-------------|
| **HTML Reports** | Professional responsive reports with executive summary |
| **JSON Reports** | Machine-readable output for CI/CD integration |
| **Full Request Capture** | Complete HTTP request/response including POST body |
| **Proof of Concept** | Each finding includes the exact payload and evidence |

### Usability
| Feature | Description |
|---------|-------------|
| **Multi-Target** | Scan multiple URLs from a file (`-l targets.txt`) with summary |
| **Webhook Alerts** | Real-time Discord / Slack / Telegram notifications |
| **Keyboard Controls** | `P`/`Space` to stop & report, `Ctrl+C` for force stop |
| **Resume Scanning** | Save and resume interrupted scans |
| **Authentication** | Cookie, Bearer token, custom headers, form-based login |
| **Live Progress** | Rich terminal UI with real-time progress bars |

---

## Installation

### Requirements
- Python 3.8+
- pip

### Quick Start

```bash
# Clone the repository
git clone https://github.com/akha-security/akha-xss.git
cd akha-xss

# Create virtual environment (recommended)
python -m venv .venv

# Activate virtual environment
# Linux/macOS:
source .venv/bin/activate
# Windows:
.venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Install AKHA
pip install -e .

# (Optional) Install Playwright browsers for DOM XSS
playwright install chromium
```

### Verify Installation

```bash
akha --version
akha --help
```

---

## Usage

### Basic Scanning

```bash
# Full site scan (crawl + discover + test)
akha scan https://target.com

# Single URL scan
akha scan "https://target.com/search?q=test" --mode url

# Multi-target scan from file
akha scan -l targets.txt

# Verbose mode
akha scan https://target.com -v
```

### Authentication

```bash
# With cookies
akha scan https://target.com --cookie "session=abc123; token=xyz"

# With Bearer token
akha scan https://target.com --bearer-token "eyJhbGciOiJIUzI1NiIs..."

# With custom headers
akha scan https://target.com -H "X-API-Key: secret" -H "Accept: text/html"

# Form-based login
akha scan https://target.com \
  --auth-url https://target.com/login \
  --auth-data '{"username": "admin", "password": "pass123"}'
```

### Advanced Options

```bash
# Enable DOM XSS scanning (uses Playwright if available, Selenium fallback)
akha scan https://target.com --dom-xss

# API/JSON body XSS scanning
akha scan https://api.target.com --api-mode

# Custom payloads
akha scan https://target.com --payload-strategy custom --custom-payloads payloads.txt

# Hybrid mode (built-in + custom payloads)
akha scan https://target.com --payload-strategy hybrid --custom-payloads extra.txt

# Scope control
akha scan https://target.com --include "/admin.*" --exclude "/logout|/static"

# Custom threads and report format
akha scan https://target.com --threads 10 --format both

# Resume interrupted scan
akha scan https://target.com --resume output/resume/scan_state.json

# Aggressive + deep parameter discovery
akha scan https://target.com --aggressive --deep-scan
```

### Webhook Notifications

```bash
# Discord webhook
akha scan https://target.com --webhook-url "https://discord.com/api/webhooks/ID/TOKEN"

# Slack webhook
akha scan https://target.com --webhook-url "https://hooks.slack.com/services/T.../B.../xxx"

# Telegram bot
akha scan https://target.com \
  --webhook-url "https://api.telegram.org/bot<TOKEN>" \
  --telegram-chat-id "123456789"
```

### Utility Commands

```bash
# Generate sample payload file
akha generate-payloads payloads.txt

# List built-in payload categories
akha list-payloads

# View learning statistics
akha stats
```

---

## How It Works

```
Target URL
    |
    v
[1. WAF Detection] --> Identify WAF vendor & select bypass strategy
    |
    v
[2. Crawling] --> Discover pages, forms, parameters (multi-threaded)
    |
    v
[3. Parameter Discovery] --> Find hidden params via wordlist fuzzing
    |
    v
[4. CSP Analysis] --> Check Content-Security-Policy for weaknesses
    |
    v
[5. For each parameter:]
    |
    +-- [5a. Send Probe] --> Canary string (akha1337xss) to detect:
    |       - Reflection context (HTML/attribute/JS/URL/comment)
    |       - Character encoding behavior
    |       - WAF filtering patterns
    |
    +-- [5b. Generate Payloads] --> Context-specific payloads (40-80 per context)
    |       - Apply WAF bypass mutations if needed
    |
    +-- [5c. Verify] --> Confirm each payload executes (not just reflects)
    |
    +-- [5d. Blind XSS] --> Inject callback payloads (auto HTTP/HTTPS)
    |
    v
[6. DOM Analysis] --> Static source analysis for dangerous patterns
    |
    v
[7. Report Generation] --> HTML/JSON with full proof-of-concept
```

---

## Configuration

Create a `config.yaml` file (see `config.yaml.example`):

```yaml
# Scan Settings
scan_mode: full              # full | url
payload_strategy: auto       # auto | builtin | custom | hybrid

# Crawler
max_depth: 5
max_pages: 1000
follow_redirects: true
parse_js: true

# HTTP
timeout: 30
rate_limit: 10               # requests per second
verify_ssl: true

# Detection
enable_waf_bypass: true
aggressive_mode: false
validate_findings: true
context_aware: true
deep_scan: false

# Output
output_dir: output
report_format: html           # html | json | both
threads: 5
learning_enabled: true
```

---

## Keyboard Controls

| Key | Action |
|-----|--------|
| `P` or `Space` | Stop scan and generate report |
| `Ctrl+C` (1x) | Graceful stop — finishes current task, generates report |
| `Ctrl+C` (2x) | Force stop — immediate report generation |
| `Ctrl+C` (3x) | Hard exit — terminate without report |

---

## Project Structure

```
akha-xss/
├── akha/
│   ├── cli/              # Click CLI commands & argument parsing
│   ├── core/             # Scanner engine, config, HTTP client, session
│   ├── modules/          # Crawler, XSS engine, WAF detector, DOM scanner,
│   │                     # CSP analyzer, blind XSS, callback server, etc.
│   ├── payloads/         # Payload database, generator, learning engine
│   ├── reports/          # HTML & JSON report generators + templates
│   └── utils/            # Logger, colors, helpers
├── data/
│   └── wordlists/        # Parameter discovery wordlists
├── tests/                # Unit tests
├── config.yaml.example   # Example configuration
├── requirements.txt      # Python dependencies
├── setup.py              # Package configuration
└── LICENSE               # MIT License
```

---

## Blind XSS Callback Server

AKHA includes a **built-in blind XSS callback server** that starts automatically with every scan — no external server or configuration needed.

- **HTTP server** on port `8187` for `http://` targets
- **HTTPS server** on port `8188` for `https://` targets (self-signed certificate)
- Automatically selects the correct protocol based on target scheme to **avoid mixed content blocking**
- Responds with a 1x1 transparent PNG (invisible to users)
- CORS-enabled for cross-origin callback support
- After the scan completes, waits 15 seconds for delayed callbacks

---

## Multi-Target Scanning

Scan multiple targets from a file. One URL per line; lines starting with `#` are ignored:

```
# targets.txt
https://example.com
https://app.example.com
http://legacy.example.com/search?q=test
```

```bash
akha scan -l targets.txt --format both
```

A combined summary is printed after all scans complete showing total vulnerabilities per target.

---

## Webhook Notifications

Get **real-time alerts** when vulnerabilities are found during a scan. Supported platforms:

| Platform | Auto-Detection |
|----------|---------------|
| **Discord** | `discord.com/api/webhooks` in URL |
| **Slack** | `hooks.slack.com` in URL |
| **Telegram** | `api.telegram.org` in URL (requires `--telegram-chat-id`) |

Notifications are sent for:
- Scan started
- Each vulnerability found (type, URL, parameter, payload)
- Scan complete (summary with stats)

---

## API / JSON Body XSS

Enable `--api-mode` to test REST API endpoints that accept `application/json` request bodies:

```bash
akha scan https://api.target.com/v1/search --api-mode
```

When enabled, the crawler detects JSON response bodies and extracts parameters for injection testing. Payloads are sent as JSON POST requests with proper `Content-Type: application/json` headers.

---

## Disclaimer

This tool is intended for **authorized security testing only**. Always obtain proper authorization before scanning any target. The authors are not responsible for any misuse or damage caused by this tool. Use responsibly and ethically.

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with determination by <a href="https://github.com/akha-security">AKHA Security</a>
</p>
