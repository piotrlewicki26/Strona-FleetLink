<?php
/**
 * FleetLink – jednorazowy skrypt seed
 *
 * 1. Wgraj ten plik na serwer do katalogu głównego (public_html).
 * 2. Odwiedź w przeglądarce: https://twojadomena.pl/seed.php?token=ZMIEN_NA_SWOJ_TOKEN
 * 3. Po pomyślnym seedowaniu USUŃ ten plik z serwera (lub zostanie
 *    usunięty automatycznie jeśli PHP ma uprawnienia do zapisu).
 *
 * WAŻNE: zmień wartość SECRET_TOKEN przed wgraniem na serwer!
 */

define('SECRET_TOKEN', 'ZMIEN_NA_SWOJ_TOKEN');

if (($_GET['token'] ?? '') !== SECRET_TOKEN) {
    http_response_code(403);
    die('Forbidden – podaj poprawny token w adresie URL: ?token=...');
}

require_once __DIR__ . '/config.php';

// ---------------------------------------------------------------------------
// Dane
// ---------------------------------------------------------------------------

$products = [
    [
        'name'        => 'FleetTracker Pro X1',
        'slug'        => 'fleettracker-pro-x1',
        'description' => 'Profesjonalny tracker GPS z łącznością 4G LTE i zasięgiem ogólnoeuropejskim. Idealny do monitorowania ciężarówek i pojazdów dostawczych.',
        'price'       => 299.00,
        'category'    => 'tracker',
        'image_url'   => 'https://picsum.photos/seed/tracker1/800/600',
        'features'    => json_encode(['4G LTE', 'GPS+GLONASS', 'Wodoodporny IP67', 'Bateria backup 48h', 'Strefa geofencing', 'OBD-II port']),
        'in_stock'    => 1,
        'badge'       => 'Bestseller',
    ],
    [
        'name'        => 'FleetTracker Lite S2',
        'slug'        => 'fleettracker-lite-s2',
        'description' => 'Kompaktowy tracker GPS dla małych flot i pojazdów osobowych. Prosta instalacja plug-and-play przez port OBD.',
        'price'       => 149.00,
        'category'    => 'tracker',
        'image_url'   => 'https://picsum.photos/seed/tracker2/800/600',
        'features'    => json_encode(['3G/4G', 'Plug OBD-II', 'Kompaktowy', 'Aplikacja mobilna', 'Historia trasy 90 dni']),
        'in_stock'    => 1,
        'badge'       => null,
    ],
    [
        'name'        => 'FleetTracker Ultra Z3',
        'slug'        => 'fleettracker-ultra-z3',
        'description' => 'Flagowy tracker GPS z modułem 5G, kamerą AI i zaawansowaną analizą stylu jazdy. Dla wymagających flot.',
        'price'       => 599.00,
        'category'    => 'tracker',
        'image_url'   => 'https://picsum.photos/seed/tracker3/800/600',
        'features'    => json_encode(['5G', 'Kamera AI', 'Analiza jazdy', 'Crash detection', 'Raporty ESG', 'API premium']),
        'in_stock'    => 1,
        'badge'       => 'Nowość',
    ],
    [
        'name'        => 'Czujnik paliwa FuelSense',
        'slug'        => 'czujnik-paliwa-fuelsense',
        'description' => 'Precyzyjny czujnik poziomu paliwa z dokładnością do 0,5%. Wykrywa kradzieże paliwa w czasie rzeczywistym.',
        'price'       => 349.00,
        'category'    => 'sensor',
        'image_url'   => 'https://picsum.photos/seed/sensor1/800/600',
        'features'    => json_encode(['Dokładność 0,5%', 'Wykrywanie kradzieży', 'RS-232/RS-485', 'Temperatura pracy -40°C do +85°C', 'Certyfikat ATEX']),
        'in_stock'    => 1,
        'badge'       => null,
    ],
    [
        'name'        => 'Kamera dashcam DualVision',
        'slug'        => 'kamera-dashcam-dualvision',
        'description' => 'Kamera samochodowa z podwójnym obiektywem (przód + tył), nagrywaniem 1080p i detekcją zdarzeń przez AI.',
        'price'       => 449.00,
        'category'    => 'camera',
        'image_url'   => 'https://picsum.photos/seed/camera1/800/600',
        'features'    => json_encode(['1080p przód+tył', 'Night Vision', 'AI detekcja zdarzeń', 'Cloud storage 30 dni', 'G-sensor', 'WiFi 6']),
        'in_stock'    => 1,
        'badge'       => 'Polecany',
    ],
    [
        'name'        => 'Czujnik temperatury TempGuard',
        'slug'        => 'czujnik-temperatury-tempguard',
        'description' => 'Bezprzewodowy czujnik temperatury do monitorowania chłodni i pojazdów do przewozu żywności.',
        'price'       => 199.00,
        'category'    => 'sensor',
        'image_url'   => 'https://picsum.photos/seed/sensor2/800/600',
        'features'    => json_encode(['Zakres -40°C do +85°C', 'Bluetooth 5.0', 'Alarm przekroczenia', 'Bateria 2 lata', 'Certyfikat HACCP']),
        'in_stock'    => 1,
        'badge'       => null,
    ],
    [
        'name'        => 'Moduł CAN BUS FleetCAN',
        'slug'        => 'modul-can-bus-fleetcan',
        'description' => 'Zaawansowany moduł odczytu danych z magistrali CAN pojazdu. Odczytuje setki parametrów bezpośrednio z komputera pojazdu.',
        'price'       => 249.00,
        'category'    => 'module',
        'image_url'   => 'https://picsum.photos/seed/module1/800/600',
        'features'    => json_encode(['CAN 2.0A/B', 'J1939/OBD-II', 'RPM/paliwo/temperatura', 'Plug & Play', 'Kompatybilny z 95% pojazdów']),
        'in_stock'    => 1,
        'badge'       => null,
    ],
    [
        'name'        => 'Zestaw startowy FleetKit',
        'slug'        => 'zestaw-startowy-fleetkit',
        'description' => 'Kompletny zestaw startowy dla floty 5 pojazdów: 5x tracker Pro X1, czujnik paliwa, kamera dashcam i 1 rok subskrypcji.',
        'price'       => 1999.00,
        'category'    => 'bundle',
        'image_url'   => 'https://picsum.photos/seed/bundle1/800/600',
        'features'    => json_encode(['5x FleetTracker Pro X1', '1x FuelSense', '1x DualVision', '12 miesięcy subskrypcji', 'Instalacja w cenie', 'Szkolenie online']),
        'in_stock'    => 1,
        'badge'       => 'Oszczędź 20%',
    ],
];

$blogPosts = [
    [
        'slug'        => 'jak-redukowac-zuzycie-paliwa-w-flocie',
        'title'       => 'Jak zredukować zużycie paliwa w flocie o 25%?',
        'excerpt'     => 'Praktyczne wskazówki i strategie oparte na danych z monitoringu GPS, które pomogą Ci znacząco obniżyć koszty paliwa w Twojej flocie.',
        'content'     => "# Jak zredukować zużycie paliwa w flocie o 25%?\n\nZarządzanie kosztami paliwa to jeden z największych wyzwań dla każdego menedżera floty.\n\n## Dlaczego zużycie paliwa jest tak wysokie?\n\n- **Agresywny styl jazdy** - gwałtowne przyspieszanie i hamowanie\n- **Nieoptymalne trasy** - objazdy i zbędne kilometry\n- **Biegi jałowe** - silnik pracujący na postoju\n\n## Strategie redukcji kosztów\n\n### 1. Monitoring stylu jazdy\n\nSystemy telematyczne pozwalają śledzić prędkość, przyspieszenia i czas biegu jałowego.\n\n### 2. Optymalizacja tras\n\nAlgorytmy optymalizacji tras przynoszą oszczędności rzędu 8-12% na paliwie.\n\n### 3. Kontrola biegu jałowego\n\nProstą zmianą nawyków można zaoszczędzić setki litrów paliwa miesięcznie.",
        'category'    => 'Oszczędności',
        'author'      => 'Marek Kowalski',
        'author_role' => 'Ekspert ds. telematyki',
        'image_url'   => 'https://picsum.photos/seed/blog1/1200/630',
        'read_time'   => 8,
        'featured'    => 1,
    ],
    [
        'slug'        => 'gps-tracking-ciagniki-siodlowe',
        'title'       => 'GPS tracking dla ciągników siodłowych - kompletny przewodnik',
        'excerpt'     => 'Wszystko co musisz wiedzieć o wdrożeniu systemu GPS w flocie ciągników siodłowych: od wyboru sprzętu po konfigurację alertów.',
        'content'     => "# GPS tracking dla ciągników siodłowych\n\nCiągniki siodłowe to serce każdej firmy transportowej.\n\n## Specyfika monitoringu\n\n- **Monitorowanie naczepy osobno** - każda naczepa powinna mieć własny tracker\n- **Integracja z tachografem** - obowiązek prawny\n- **Śledzenie temperatur** - dla pojazdów chłodniczych\n\n## Wybór trackera\n\nPrzy wyborze zwróć uwagę na odczyt danych z tachografu, magistralę CAN i geofencing.",
        'category'    => 'Branża',
        'author'      => 'Anna Nowak',
        'author_role' => 'Konsultant transportowy',
        'image_url'   => 'https://picsum.photos/seed/blog2/1200/630',
        'read_time'   => 10,
        'featured'    => 1,
    ],
    [
        'slug'        => 'ai-w-zarzadzaniu-flota',
        'title'       => 'Sztuczna inteligencja rewolucjonizuje zarządzanie flotą',
        'excerpt'     => 'Jak AI i machine learning zmieniają branżę fleet management: predykcyjne utrzymanie, optymalizacja tras i analiza ryzyka.',
        'content'     => "# AI rewolucjonizuje zarządzanie flotą\n\nBranża zarządzania flotą stoi przed największą transformacją technologiczną od czasu GPS.\n\n## Predykcyjne utrzymanie pojazdów\n\nAI analizuje dziesiątki parametrów i wysyła alerty przed awarią.\n\n## Optymalizacja tras\n\nAI uwzględnia prognozy pogodowe, historyczne natężenie ruchu i preferencje kierowców.\n\n## Vision Safety\n\nKamery z computer vision monitorują zmęczenie kierowcy i otoczenie pojazdu.",
        'category'    => 'Technologia',
        'author'      => 'Dr Tomasz Wiśniewski',
        'author_role' => 'CTO FleetLink',
        'image_url'   => 'https://picsum.photos/seed/blog3/1200/630',
        'read_time'   => 12,
        'featured'    => 0,
    ],
    [
        'slug'        => 'bezpieczenstwo-kierowcow-monitoring',
        'title'       => 'Jak monitoring GPS poprawia bezpieczeństwo kierowców?',
        'excerpt'     => 'Analiza danych z 500 flot pokazuje, że monitoring GPS redukuje wypadki o 35%. Poznaj sprawdzone metody poprawy bezpieczeństwa.',
        'content'     => "# Monitoring GPS a bezpieczeństwo kierowców\n\nAnaliza danych z ponad 500 flot FleetLink pokazuje: monitoring znacząco redukuje ryzyko wypadków.\n\n## Statystyki\n\n- **-35%** wypadków drogowych\n- **-48%** naruszeń prędkości\n- **-29%** kosztów ubezpieczenia\n\n## Scoring i feedback\n\nSystem przydziela punkty za płynność jazdy i zachowanie limitów prędkości.",
        'category'    => 'Bezpieczeństwo',
        'author'      => 'Katarzyna Zielińska',
        'author_role' => 'Ekspert ds. BHP',
        'image_url'   => 'https://picsum.photos/seed/blog4/1200/630',
        'read_time'   => 7,
        'featured'    => 0,
    ],
    [
        'slug'        => 'elektryczne-pojazdy-flota',
        'title'       => 'Elektryczne pojazdy w flocie - wyzwania i możliwości',
        'excerpt'     => 'Transformacja floty na pojazdy elektryczne: jak planować zasięg, zarządzać ładowaniem i mierzyć ROI z EV w flotach firmowych.',
        'content'     => "# Elektryczne pojazdy w flocie\n\nElektryfikacja flot firmowych to dziejące się teraz.\n\n## Dlaczego warto?\n\n- **Niższe koszty energii** - ok. 25-30% kosztu paliwa\n- **Niższe koszty serwisu** - brak wymiany oleju\n- **Ulgi i dofinansowania** - program Zielona Flota\n\n## Wyzwania\n\nPlanowanie zasięgu i infrastruktura ładowania to kluczowe wyzwania.",
        'category'    => 'Trendy',
        'author'      => 'Piotr Adamski',
        'author_role' => 'Kierownik ds. Innowacji',
        'image_url'   => 'https://picsum.photos/seed/blog5/1200/630',
        'read_time'   => 9,
        'featured'    => 0,
    ],
    [
        'slug'        => 'tachograf-cyfrowy-przepisy',
        'title'       => 'Tachograf cyfrowy 2024 - przepisy i obowiązki przewoźnika',
        'excerpt'     => 'Kompleksowy przewodnik po przepisach dotyczących tachografów cyfrowych: kto musi go używać, jak pobierać dane i jak unikać kar.',
        'content'     => "# Tachograf cyfrowy 2024\n\nTachograf cyfrowy to obowiązkowe urządzenie w pojazdach ciężarowych.\n\n## Kto musi stosować?\n\nObowiązek dotyczy pojazdów o DMC powyżej 3,5 tony.\n\n## Tachograf G2V2\n\nOd 21 sierpnia 2023 nowe pojazdy muszą mieć G2V2 z łącznością GNSS.\n\n## Kary\n\n- Za brak ważnej karty: do 2000 zł\n- Za manipulację: do 10 000 zł",
        'category'    => 'Prawo',
        'author'      => 'Radca Prawny Monika Jasińska',
        'author_role' => 'Specjalista prawa transportowego',
        'image_url'   => 'https://picsum.photos/seed/blog6/1200/630',
        'read_time'   => 11,
        'featured'    => 0,
    ],
];

$testimonials = [
    [
        'name'      => 'Krzysztof Wiśniewski',
        'role'      => 'Dyrektor Operacyjny',
        'company'   => 'TransKargo Sp. z o.o.',
        'content'   => 'FleetLink całkowicie zmienił sposób, w jaki zarządzamy naszą flotą 85 pojazdów. Dzięki systemowi zredukowaliśmy zużycie paliwa o 23% w ciągu pierwszych 6 miesięcy.',
        'rating'    => 5,
        'image_url' => 'https://picsum.photos/seed/person1/200/200',
        'industry'  => 'Transport',
    ],
    [
        'name'      => 'Magdalena Kowalczyk',
        'role'      => 'CEO',
        'company'   => 'FastDelivery24',
        'content'   => 'Obsługa klienta FleetLink jest na najwyższym poziomie. Moduł optymalizacji tras zaoszczędził nam setki godzin pracy dyspozytorów.',
        'rating'    => 5,
        'image_url' => 'https://picsum.photos/seed/person2/200/200',
        'industry'  => 'Logistyka',
    ],
    [
        'name'      => 'Andrzej Kowalski',
        'role'      => 'Kierownik Floty',
        'company'   => 'BudMax Construction',
        'content'   => 'FleetLink daje nam pełną kontrolę nad lokalizacją sprzętu, co wyeliminowało problem kradzieży. Polecam każdej firmie budowlanej.',
        'rating'    => 5,
        'image_url' => 'https://picsum.photos/seed/person3/200/200',
        'industry'  => 'Budownictwo',
    ],
];

// ---------------------------------------------------------------------------
// Seed
// ---------------------------------------------------------------------------

try {
    $conn = getDbConnection();
    $conn->beginTransaction();

    $conn->exec('DELETE FROM testimonials');
    $conn->exec('DELETE FROM blog_posts');
    $conn->exec('DELETE FROM products');

    // Products
    $stmtProd = $conn->prepare(
        'INSERT INTO products (name, slug, description, price, category, image_url, features, in_stock, badge)
         VALUES (:name, :slug, :description, :price, :category, :image_url, :features, :in_stock, :badge)'
    );
    foreach ($products as $p) {
        $stmtProd->execute($p);
    }

    // Blog posts
    $stmtBlog = $conn->prepare(
        'INSERT INTO blog_posts (slug, title, excerpt, content, category, author, author_role, image_url, read_time, featured)
         VALUES (:slug, :title, :excerpt, :content, :category, :author, :author_role, :image_url, :read_time, :featured)'
    );
    foreach ($blogPosts as $b) {
        $stmtBlog->execute($b);
    }

    // Testimonials
    $stmtTest = $conn->prepare(
        'INSERT INTO testimonials (name, role, company, content, rating, image_url, industry)
         VALUES (:name, :role, :company, :content, :rating, :image_url, :industry)'
    );
    foreach ($testimonials as $t) {
        $stmtTest->execute($t);
    }

    $conn->commit();

    // Auto-delete this file if possible
    @unlink(__FILE__);

    echo '<h1 style="font-family:sans-serif;color:green">&#10003; Baza danych wypełniona pomyślnie!</h1>';
    echo '<p style="font-family:sans-serif">Plik seed.php został usunięty. Możesz teraz odwiedzić stronę.</p>';
} catch (Throwable $e) {
    if (isset($conn) && $conn->inTransaction()) {
        $conn->rollBack();
    }
    http_response_code(500);
    echo '<h1 style="font-family:sans-serif;color:red">Błąd!</h1>';
    echo '<pre style="font-family:monospace">' . htmlspecialchars($e->getMessage()) . '</pre>';
}
