# Instalacja FleetLink na hitme.pl (hosting PHP + MySQL)

## Wymagania

- Konto hostingowe hitme.pl z obsługą **PHP 8.1+** i **MySQL**
- Domena lub subdomena skierowana na ten hosting
- Dostęp FTP (np. FileZilla)
- Node.js 20+ lokalnie (do zbudowania aplikacji)

---

## Krok 1 – Przygotuj bazę danych na hitme.pl

1. Zaloguj się do panelu hitme.pl.
2. Przejdź do **Bazy danych MySQL** → **Utwórz bazę**.
3. Zapisz sobie:
   - nazwę bazy (np. `u12345_fleetlink`)
   - nazwę użytkownika (np. `u12345_fleetlink`)
   - hasło
4. Wejdź do **phpMyAdmin** i zaimportuj plik `hitme/schema.sql`:
   - Wybierz swoją bazę danych
   - Zakładka **Import** → wybierz plik `schema.sql` → **Wykonaj**

---

## Krok 2 – Uzupełnij plik config.php

Otwórz `hitme/config.php` i wpisz dane z kroku 1:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'u12345_fleetlink');   // ← Twoja nazwa bazy
define('DB_USER', 'u12345_fleetlink');   // ← Twój użytkownik
define('DB_PASS', 'TWOJE_SILNE_HASLO');  // ← Twoje hasło
```

---

## Krok 3 – Zbuduj aplikację lokalnie

> Wykonaj na swoim komputerze (wymagany Node.js 20+).

```bash
# W katalogu projektu:
npm install
npx prisma generate
npx prisma db push
npx prisma db seed

# Zbuduj statyczną wersję → powstanie katalog "out/"
npm run build
```

Po zakończeniu pojawi się katalog `out/` z gotowymi plikami HTML/CSS/JS.

---

## Krok 4 – Wgraj pliki przez FTP

Połącz się z serwerem FTP (dane z panelu hitme.pl).

Wgraj **zawartość** katalogu `out/` do katalogu `public_html/` (lub katalogu głównego subdomeny). Struktura powinna wyglądać:

```
public_html/
├── index.html
├── _next/
├── blog/
├── sklep/
└── ...
```

Następnie wgraj pliki z katalogu `hitme/` **bezpośrednio do `public_html/`**:

| Plik źródłowy | Docelowa ścieżka na serwerze |
|---|---|
| `hitme/config.php` | `public_html/config.php` |
| `hitme/.htaccess` | `public_html/.htaccess` |
| `hitme/schema.sql` | (już zaimportowany w kroku 1) |
| `hitme/seed.php` | `public_html/seed.php` |
| `hitme/api/blog.php` | `public_html/api/blog.php` |
| `hitme/api/products.php` | `public_html/api/products.php` |
| `hitme/api/contact.php` | `public_html/api/contact.php` |
| `hitme/api/.htaccess` | `public_html/api/.htaccess` |

---

## Krok 5 – Uruchom skrypt seed (wypełnienie bazy danych)

1. Otwórz `public_html/seed.php` w edytorze tekstowym.
2. Znajdź linię i zmień token:
   ```php
   define('SECRET_TOKEN', 'ZMIEN_NA_SWOJ_TOKEN');
   ```
   Ustaw dowolny trudny do odgadnięcia ciąg znaków, np. `Fl33tL1nk_2024!`.
3. Wgraj `seed.php` na serwer.
4. Odwiedź w przeglądarce:
   ```
   https://twojadomena.pl/seed.php?token=Fl33tL1nk_2024!
   ```
5. Powinna pojawić się zielona wiadomość o sukcesie. Plik zostanie usunięty automatycznie.
   Jeśli nie – **ręcznie usuń `seed.php`** przez FTP!

---

## Krok 6 – Sprawdź działanie

Odwiedź swoją subdomenę. Sprawdź:

- [ ] Strona główna wyświetla się poprawnie
- [ ] `/blog/` – lista artykułów ładuje się dynamicznie (z MySQL)
- [ ] `/sklep/` – produkty ładują się dynamicznie (z MySQL)
- [ ] `/kontakt/` – formularz wysyła wiadomość (zapis do MySQL)

---

## Weryfikacja bazy – wiadomości z formularza

Po wypełnieniu formularza kontaktowego możesz sprawdzić wiadomości w phpMyAdmin:

```sql
SELECT * FROM contact_messages ORDER BY created_at DESC;
```

---

## Rozwiązywanie problemów

| Problem | Rozwiązanie |
|---|---|
| Biała strona / 500 | Sprawdź dane w `config.php` |
| Blog/sklep nie ładuje danych | Upewnij się że `api/blog.php` i `api/products.php` są wgrane i że tabele mają dane (krok 5) |
| Formularz nie działa | Upewnij się że `api/contact.php` jest wgrany |
| Brak modułu `mod_rewrite` | Skontaktuj się z pomocą techniczną hitme.pl |
| Zdjęcia się nie ładują | Zdjęcia pobierane są z `picsum.photos` – sprawdź połączenie internetowe |

---

## Aktualizacja strony

Po zmianie treści w projekcie (np. nowe produkty dodane przez seed):

1. Lokalnie zmodyfikuj dane w `prisma/seed.ts`
2. Uruchom `npm run build` ponownie
3. Wgraj zaktualizowany katalog `out/` na FTP (nadpisz pliki)
4. Zaktualizuj dane w MySQL przez phpMyAdmin lub nowy `seed.php`
