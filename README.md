# FleetLink — Inteligentne zarządzanie flotą GPS

Nowoczesna strona internetowa dla FleetLink — systemu GPS i telematyki dla flot pojazdów ciężarowych, dostawczych i osobowych.

## Stos technologiczny

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — stylowanie
- **Prisma + SQLite** — baza danych
- **Framer Motion** — animacje
- **Lucide React** — ikony

## Strony

| Ścieżka | Opis |
|---|---|
| `/` | Strona główna (Hero, LiveTrustBar, HowItWorks, Dashboard, AI, Opinie) |
| `/o-nas` | O nas — historia, misja, wartości |
| `/branze` | Branże — Transport, Logistyka, Budownictwo… |
| `/rozwiazania` | Rozwiązania GPS — monitoring, paliwo, raporty |
| `/cennik` | Cennik z kalkulatorem oszczędności |
| `/sklep` | Sklep z produktami GPS |
| `/urzadzenia` | Urządzenia GPS — specyfikacje |
| `/blog` | Blog z artykułami |
| `/blog/[slug]` | Pełny artykuł |
| `/kontakt` | Formularz kontaktowy z ochroną antyspamową |

## Wymagania

- Node.js 18 lub nowszy
- npm 9+ (lub yarn/pnpm)

## Instalacja lokalna

```bash
# 1. Sklonuj repozytorium
git clone https://github.com/piotrlewicki26/Strona-FleetLink.git
cd Strona-FleetLink

# 2. Zainstaluj zależności
npm install

# 3. Skonfiguruj zmienne środowiskowe
cp .env.example .env
# (domyślna konfiguracja używa lokalnego pliku SQLite — nie wymaga zmian)

# 4. Utwórz bazę danych i załaduj dane przykładowe
npx prisma migrate dev --name init
npx prisma db seed

# 5. Uruchom serwer developerski
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## Budowanie produkcyjne

```bash
npm run build
npm start
```

## Wdrożenie na Vercel (zalecane)

1. Utwórz konto na [vercel.com](https://vercel.com) i połącz z GitHubem.
2. Zaimportuj repozytorium — Vercel automatycznie wykryje Next.js.
3. W ustawieniach projektu dodaj zmienną środowiskową:
   - `DATABASE_URL` = `file:./dev.db` (SQLite) **lub** connection string do PostgreSQL
4. W sekcji **Build & Development Settings** dodaj polecenie post-install:
   ```
   npx prisma migrate deploy && npx prisma db seed
   ```
5. Kliknij **Deploy**.

> **Uwaga:** Dla środowiska produkcyjnego zalecana jest migracja do PostgreSQL (np. [Supabase](https://supabase.com), [Neon](https://neon.tech)). Zmień `provider = "sqlite"` na `provider = "postgresql"` w `prisma/schema.prisma` i zaktualizuj `DATABASE_URL`.

## Wdrożenie na VPS / własny hosting

### Wymagania serwera
- Ubuntu 22.04 LTS (lub podobny)
- Node.js 18+, npm
- PM2 (process manager)
- Nginx (reverse proxy)

### Kroki

```bash
# Na serwerze:
sudo apt update && sudo apt install -y nodejs npm nginx
sudo npm install -g pm2

# Sklonuj i zbuduj
git clone https://github.com/piotrlewicki26/Strona-FleetLink.git /var/www/fleetlink
cd /var/www/fleetlink
npm install
cp .env.example .env
# Edytuj .env — ustaw właściwe DATABASE_URL
npx prisma migrate deploy
npx prisma db seed
npm run build

# Uruchom z PM2
pm2 start npm --name "fleetlink" -- start
pm2 save
pm2 startup
```

### Konfiguracja Nginx

```nginx
server {
    listen 80;
    server_name fleetlink.pl www.fleetlink.pl;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Włącz HTTPS (Let's Encrypt):
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d fleetlink.pl -d www.fleetlink.pl
```

## Zmienne środowiskowe

| Zmienna | Opis | Przykład |
|---|---|---|
| `DATABASE_URL` | Connection string do bazy danych | `file:./dev.db` |

## Struktura projektu

```
src/
├── app/                  # Next.js App Router
│   ├── actions/          # Server Actions (formularz kontaktowy)
│   ├── api/              # API routes (blog, produkty)
│   ├── blog/             # Strony bloga
│   ├── cennik/           # Cennik
│   ├── kontakt/          # Kontakt
│   ├── o-nas/            # O nas
│   ├── branze/           # Branże
│   ├── rozwiazania/      # Rozwiązania
│   ├── sklep/            # Sklep
│   ├── urzadzenia/       # Urządzenia
│   └── page.tsx          # Strona główna
├── components/
│   ├── home/             # Sekcje strony głównej
│   └── layout/           # Header i Footer
└── lib/
    ├── db.ts             # Zapytania do bazy danych
    └── prisma.ts         # Klient Prisma
prisma/
├── schema.prisma         # Schemat bazy danych
└── seed.ts               # Dane przykładowe
```

## Licencja

© 2025 FleetLink. Wszelkie prawa zastrzeżone.

