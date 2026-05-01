import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.testimonial.deleteMany()
  await prisma.blogPost.deleteMany()
  await prisma.product.deleteMany()

  // Products
  await prisma.product.createMany({
    data: [
      {
        name: 'FleetTracker Pro X1',
        slug: 'fleettracker-pro-x1',
        description: 'Profesjonalny tracker GPS z łącznością 4G LTE i zasięgiem ogólnoeuropejskim. Idealny do monitorowania ciężarówek i pojazdów dostawczych.',
        price: 299,
        category: 'tracker',
        imageUrl: 'https://picsum.photos/seed/tracker1/800/600',
        features: JSON.stringify(['4G LTE', 'GPS+GLONASS', 'Wodoodporny IP67', 'Bateria backup 48h', 'Strefa geofencing', 'OBD-II port']),
        inStock: true,
        badge: 'Bestseller',
      },
      {
        name: 'FleetTracker Lite S2',
        slug: 'fleettracker-lite-s2',
        description: 'Kompaktowy tracker GPS dla małych flot i pojazdów osobowych. Prosta instalacja plug-and-play przez port OBD.',
        price: 149,
        category: 'tracker',
        imageUrl: 'https://picsum.photos/seed/tracker2/800/600',
        features: JSON.stringify(['3G/4G', 'Plug OBD-II', 'Kompaktowy', 'Aplikacja mobilna', 'Historia trasy 90 dni']),
        inStock: true,
        badge: null,
      },
      {
        name: 'FleetTracker Ultra Z3',
        slug: 'fleettracker-ultra-z3',
        description: 'Flagowy tracker GPS z modułem 5G, kamerą AI i zaawansowaną analizą stylu jazdy. Dla wymagających flot.',
        price: 599,
        category: 'tracker',
        imageUrl: 'https://picsum.photos/seed/tracker3/800/600',
        features: JSON.stringify(['5G', 'Kamera AI', 'Analiza jazdy', 'Crash detection', 'Raporty ESG', 'API premium']),
        inStock: true,
        badge: 'Nowość',
      },
      {
        name: 'Czujnik paliwa FuelSense',
        slug: 'czujnik-paliwa-fuelsense',
        description: 'Precyzyjny czujnik poziomu paliwa z dokładnością do 0.5%. Wykrywa kradzieże paliwa w czasie rzeczywistym.',
        price: 349,
        category: 'sensor',
        imageUrl: 'https://picsum.photos/seed/sensor1/800/600',
        features: JSON.stringify(['Dokładność 0.5%', 'Wykrywanie kradzieży', 'RS-232/RS-485', 'Temperatura pracy -40°C do +85°C', 'Certyfikat ATEX']),
        inStock: true,
        badge: null,
      },
      {
        name: 'Kamera dashcam DualVision',
        slug: 'kamera-dashcam-dualvision',
        description: 'Kamera samochodowa z podwójnym obiektywem (przód + tył), nagrywaniem 1080p i detekcją zdarzeń przez AI.',
        price: 449,
        category: 'camera',
        imageUrl: 'https://picsum.photos/seed/camera1/800/600',
        features: JSON.stringify(['1080p przód+tył', 'Night Vision', 'AI detekcja zdarzeń', 'Cloud storage 30 dni', 'G-sensor', 'WiFi 6']),
        inStock: true,
        badge: 'Polecany',
      },
      {
        name: 'Czujnik temperatury TempGuard',
        slug: 'czujnik-temperatury-tempguard',
        description: 'Bezprzewodowy czujnik temperatury do monitorowania chłodni i pojazdów do przewozu żywności.',
        price: 199,
        category: 'sensor',
        imageUrl: 'https://picsum.photos/seed/sensor2/800/600',
        features: JSON.stringify(['Zakres -40°C do +85°C', 'Bluetooth 5.0', 'Alarm przekroczenia', 'Bateria 2 lata', 'Certyfikat HACCP']),
        inStock: true,
        badge: null,
      },
      {
        name: 'Moduł CAN BUS FleetCAN',
        slug: 'modul-can-bus-fleetcan',
        description: 'Zaawansowany moduł odczytu danych z magistrali CAN pojazdu. Odczytuje setki parametrów bezpośrednio z komputera pojazdu.',
        price: 249,
        category: 'module',
        imageUrl: 'https://picsum.photos/seed/module1/800/600',
        features: JSON.stringify(['CAN 2.0A/B', 'J1939/OBD-II', 'RPM/paliwo/temperatura', 'Plug & Play', 'Kompatybilny z 95% pojazdów']),
        inStock: true,
        badge: null,
      },
      {
        name: 'Zestaw startowy FleetKit',
        slug: 'zestaw-startowy-fleetkit',
        description: 'Kompletny zestaw startowy dla flotY 5 pojazdów: 5x tracker Pro X1, czujnik paliwa, kamera dashcam i 1 rok subskrypcji.',
        price: 1999,
        category: 'bundle',
        imageUrl: 'https://picsum.photos/seed/bundle1/800/600',
        features: JSON.stringify(['5x FleetTracker Pro X1', '1x FuelSense', '1x DualVision', '12 miesięcy subskrypcji', 'Instalacja w cenie', 'Szkolenie online']),
        inStock: true,
        badge: 'Oszczędź 20%',
      },
    ],
  })

  // Blog Posts
  await prisma.blogPost.createMany({
    data: [
      {
        slug: 'jak-redukowac-zuzycie-paliwa-w-flocie',
        title: 'Jak zredukować zużycie paliwa w flocie o 25%?',
        excerpt: 'Praktyczne wskazówki i strategie oparte na danych z monitoringu GPS, które pomogą Ci znacząco obniżyć koszty paliwa w Twojej flocie.',
        content: `# Jak zredukować zużycie paliwa w flocie o 25%?

Zarządzanie kosztami paliwa to jeden z największych wyzwań dla każdego menedżera floty. Paliwo stanowi zazwyczaj **30-40% całkowitych kosztów operacyjnych** floty. Dobra wiadomość jest taka, że nowoczesne systemy GPS i telematyki mogą pomóc Ci zredukować te koszty nawet o 25%.

## Dlaczego zużycie paliwa jest tak wysokie?

Zanim przejdziemy do rozwiązań, warto zrozumieć przyczyny nadmiernego zużycia paliwa:

- **Agresywny styl jazdy** - gwałtowne przyspieszanie i hamowanie może zwiększyć zużycie paliwa o 20-30%
- **Nieoptymalne trasy** - objazdy, korki i zbędne kilometry
- **Biegi jałowe** - silnik pracujący na postoju zużywa średnio 3-4 litry paliwa na godzinę
- **Nieodpowiednie ciśnienie w oponach** - zbyt niskie ciśnienie zwiększa opory toczenia

## Strategie redukcji kosztów paliwa

### 1. Monitoring stylu jazdy

Systemy telematyczne pozwalają śledzić:
- Prędkość pojazdu w czasie rzeczywistym
- Gwałtowne przyspieszenia i hamowania
- Czas pracy silnika na biegu jałowym
- Przekroczenia prędkości

Wdrożenie scoringu eco-drivingu i powiązanie go z systemem premiowym dla kierowców może przynieść redukcję zużycia paliwa o 10-15%.

### 2. Optymalizacja tras

Algorytmy optymalizacji tras potrafią:
- Uwzględniać natężenie ruchu w czasie rzeczywistym
- Minimalizować liczbę kilometrów
- Grupować zlecenia w efektywne trasy
- Unikać stref z ograniczeniami dla pojazdów ciężkich

Firmy korzystające z optymalizacji tras raportują oszczędności rzędu **8-12% na paliwie**.

### 3. Kontrola biegu jałowego

Ustaw alerty dla kierowców, gdy silnik pracuje na biegu jałowym dłużej niż 5 minut. Prosta zmiana nawyków może zaoszczędzić setki litrów paliwa miesięcznie.

### 4. Monitoring kradzieży paliwa

Czujniki poziomu paliwa pozwalają na:
- Wykrywanie nieautoryzowanych uzupełnień i poboru paliwa
- Porównywanie rzeczywistego zużycia z danymi z kart paliwowych
- Identyfikację anomalii w zużyciu

## Wyniki po wdrożeniu

Firmy, które wdrożyły kompleksowy system zarządzania flotą FleetLink, osiągnęły:

| Wskaźnik | Przed | Po | Zmiana |
|----------|-------|----|--------|
| Zużycie paliwa | 100% | 75% | **-25%** |
| Czas biegu jałowego | 18% | 6% | **-67%** |
| Incydenty drogowe | 12/rok | 4/rok | **-67%** |

## Podsumowanie

Redukcja kosztów paliwa wymaga holistycznego podejścia: odpowiednich narzędzi, procedur i zaangażowania kierowców. System FleetLink dostarcza wszystkich niezbędnych danych i narzędzi do skutecznego zarządzania zużyciem paliwa.`,
        category: 'Oszczędności',
        author: 'Marek Kowalski',
        authorRole: 'Ekspert ds. telematyki',
        imageUrl: 'https://picsum.photos/seed/blog1/1200/630',
        readTime: 8,
        featured: true,
      },
      {
        slug: 'gps-tracking-ciagniki-siodlowe',
        title: 'GPS tracking dla ciągników siodłowych - kompletny przewodnik',
        excerpt: 'Wszystko co musisz wiedzieć o wdrożeniu systemu GPS w flocie ciągników siodłowych: od wyboru sprzętu po konfigurację alertów.',
        content: `# GPS tracking dla ciągników siodłowych

Ciągniki siodłowe to serce każdej firmy transportowej. Ich skuteczne monitorowanie to klucz do efektywności operacyjnej i bezpieczeństwa.

## Specyfika monitoringu ciągników siodłowych

W odróżnieniu od lekkich pojazdów, ciągniki siodłowe wymagają:

- **Monitorowania naczepy osobno od ciągnika** - każda naczepa powinna mieć własny tracker
- **Integracji z tachografem** - obowiązek prawny w transporcie zawodowym
- **Śledzenia temperatur** - dla pojazdów chłodniczych
- **Monitorowania stanu technicznego** przez magistralę CAN

## Wybór trackera dla ciągnika siodłowego

### Kluczowe parametry

Przy wyborze trackera dla ciągnika siodłowego zwróć uwagę na:

1. **Odczyt danych z tachografu** - zgodność z normą DTCO 3.0
2. **Magistrala CAN** - odczyt RPM, temperatury silnika, poziomu oleju
3. **Czujnik otwarcia drzwi** - bezpieczeństwo ładunku
4. **Geofencing** - alerty przy wjeździe/wyjeździe ze stref

### Instalacja i konfiguracja

Instalacja trackera w ciągniku siodłowym zazwyczaj zajmuje 2-3 godziny i obejmuje:

- Podłączenie do magistrali CAN przez złącze OBD lub bezpośrednio
- Konfigurację odczytu danych z tachografu
- Ustawienie parametrów alarmowych
- Testy i kalibrację

## Integracja z systemami zarządzania transportem (TMS)

Nowoczesne trackery GPS dla ciągników siodłowych integrują się z:

- **Systemami TMS** (SAP TM, Oracle, własne rozwiązania)
- **Kartami paliwowymi** (DKV, UTA, Shell)
- **Systemami celnioplannymi** (eCMR)
- **Platformami giełd transportowych**

## Przykład wdrożenia

Firma Translogistic Sp. z o.o. (130 pojazdów) po wdrożeniu FleetLink osiągnęła:

- Redukcja kosztów paliwa: **22%**
- Poprawa punktualności dostaw: **89% → 97%**
- Skrócenie czasu planowania tras: z 4h do 45 minut dziennie
- Wykrycie 3 przypadków kradzieży paliwa w pierwszym kwartale

## Podsumowanie

Monitoring GPS ciągników siodłowych to inwestycja, która zwraca się w ciągu 6-12 miesięcy. Kluczem do sukcesu jest wybór odpowiedniego sprzętu i dostawcy systemu.`,
        category: 'Branża',
        author: 'Anna Nowak',
        authorRole: 'Konsultant transportowy',
        imageUrl: 'https://picsum.photos/seed/blog2/1200/630',
        readTime: 10,
        featured: true,
      },
      {
        slug: 'ai-w-zarzadzaniu-flota',
        title: 'Sztuczna inteligencja rewolucjonizuje zarządzanie flotą',
        excerpt: 'Jak AI i machine learning zmieniają branżę fleet management: predykcyjne utrzymanie, optymalizacja tras i analiza ryzyka.',
        content: `# Sztuczna inteligencja rewolucjonizuje zarządzanie flotą

Branża zarządzania flotą stoi przed największą transformacją technologiczną od czasu wprowadzenia GPS. Sztuczna inteligencja i uczenie maszynowe otwierają nowe możliwości, których jeszcze kilka lat temu nie dało się wyobrazić.

## Predykcyjne utrzymanie pojazdów

Tradycyjne podejście do konserwacji pojazdów opiera się na harmonogramach czasowych lub przebiegowych. AI zmienia to całkowicie, analizując dziesiątki parametrów w czasie rzeczywistym:

- Temperatura silnika i skrzyni biegów
- Wibracje układu napędowego
- Ciśnienie i temperatura oleju
- Prąd pobierany przez alternator
- Historia awarii i napraw

### Jak działa predykcja awarii?

Algorytmy ML trenowane są na milionach danych z pojazdów różnych marek i typów. System uczy się rozpoznawać wzorce, które poprzedzają awarie - na przykład:

> "W 87% przypadków awarii wtryskiwaczy, 2-3 tygodnie wcześniej obserwuje się 15-20% wzrost zużycia paliwa i nieregularność pracy silnika."

Wynik? Alerty wysyłane z wyprzedzeniem, zanim awaria unieruchomi pojazd.

## Optymalizacja tras z AI

Klasyczne algorytmy optymalizacji tras działają na statycznych danych. AI idzie dalej, uwzględniając:

- Prognozy pogodowe i ich wpływ na czas jazdy
- Historyczne dane o natężeniu ruchu dla danego dnia i godziny
- Aktualne zdarzenia drogowe z wielu źródeł
- Preferencje i zwyczaje konkretnych kierowców
- Ograniczenia ładunku i wymogi dostawy

## Vision Safety - kamery AI

Kamery wyposażone w algorytmy computer vision monitorują:

**Zachowanie kierowcy:**
- Senność i zmęczenie
- Korzystanie z telefonu
- Odwrócenie uwagi
- Zapinanie pasów

**Otoczenie pojazdu:**
- Wykrywanie pieszych i rowerzystów
- Ostrzeżenia o niezachowaniu odstępu
- Detekcja znaków drogowych
- Asystent pasa ruchu

## Prognozowanie kosztów operacyjnych

AI może przewidywać koszty floty z dokładnością do 95%:

- Zużycie paliwa na następny miesiąc
- Planowane przeglądy i naprawy
- Ryzyko awarii dla każdego pojazdu
- Optymalne czasy rotacji pojazdów

## Wnioski

Firmy, które już dziś inwestują w AI dla floty, budują trwałą przewagę konkurencyjną. FleetLink integruje wszystkie te technologie w jeden spójny system.`,
        category: 'Technologia',
        author: 'Dr Tomasz Wiśniewski',
        authorRole: 'CTO FleetLink',
        imageUrl: 'https://picsum.photos/seed/blog3/1200/630',
        readTime: 12,
        featured: false,
      },
      {
        slug: 'bezpieczenstwo-kierowcow-monitoring',
        title: 'Jak monitoring GPS poprawia bezpieczeństwo kierowców?',
        excerpt: 'Analiza danych z 500 flot pokazuje, że monitoring GPS redukuje wypadki o 35%. Poznaj sprawdzone metody poprawy bezpieczeństwa.',
        content: `# Jak monitoring GPS poprawia bezpieczeństwo kierowców?

Bezpieczeństwo drogowe to priorytet każdego odpowiedzialnego pracodawcy. Analiza danych z ponad 500 flot korzystających z FleetLink pokazuje jednoznacznie: monitoring GPS i telematyka znacząco redukują ryzyko wypadków.

## Statystyki, które mówią same za siebie

Firmy korzystające z kompleksowego monitoringu przez co najmniej 12 miesięcy odnotowują:

- **-35%** wypadków drogowych
- **-48%** naruszeń przepisów prędkości
- **-62%** przypadków gwałtownego hamowania
- **-29%** kosztów ubezpieczenia pojazdów

## Jak monitoring wpływa na zachowanie kierowców?

### Efekt obserwacji

Już samo poinformowanie kierowców o monitoringu zmienia ich zachowanie. Badania psychologiczne potwierdzają: świadomość bycia obserwowanym skłania do bezpieczniejszej jazdy.

### Scoring i informacja zwrotna

System scoring eco-drivingu przydziela kierowcom punkty za:

- Płynność jazdy (brak gwałtownych manewrów)
- Zachowanie limitów prędkości
- Efektywne zarządzanie czasem
- Brak przekroczeń czasu pracy

Regularne raporty dla kierowców i możliwość porównania się z innymi tworzą pozytywną rywalizację.

### Alerty w czasie rzeczywistym

System wysyła natychmiastowe powiadomienia:
- SMS do kierowcy przy przekroczeniu prędkości
- Alert do dyspozytora przy niebezpiecznym manewrze
- Automatyczne raportowanie do managera przy incydencie

## Program bezpieczeństwa - krok po kroku

1. **Bazowy pomiar** - przeprowadź analizę bieżącego poziomu bezpieczeństwa
2. **Szkolenie kierowców** - wytłumacz cel i zasady działania systemu
3. **Ustal KPI** - zdefiniuj mierzalne cele bezpieczeństwa
4. **Monitoring i feedback** - regularne raporty i rozmowy z kierowcami
5. **Nagrody i uznanie** - motywuj najlepszych kierowców

## Aspekty prawne

Monitorowanie pojazdów służbowych jest legalne w Polsce pod warunkiem:
- Poinformowania pracowników o monitoringu
- Ograniczenia monitoringu do pojazdów służbowych w czasie pracy
- Zgodności z RODO

## Podsumowanie

Monitoring GPS nie jest narzędziem inwigilacji - to system wsparcia bezpieczeństwa, który chroni kierowców, pojazdy i reputację firmy.`,
        category: 'Bezpieczeństwo',
        author: 'Katarzyna Zielińska',
        authorRole: 'Ekspert ds. BHP',
        imageUrl: 'https://picsum.photos/seed/blog4/1200/630',
        readTime: 7,
        featured: false,
      },
      {
        slug: 'elektryczne-pojazdy-flota',
        title: 'Elektryczne pojazdy w flocie - wyzwania i możliwości',
        excerpt: 'Transformacja floty na pojazdy elektryczne: jak planować zasięg, zarządzać ładowaniem i mierzyć ROI z EV w flotach firmowych.',
        content: `# Elektryczne pojazdy w flocie - wyzwania i możliwości

Elektryfikacja flot firmowych to nie odległa przyszłość - to dziejące się teraz. Coraz więcej firm decyduje się na pojazdy elektryczne, motywowanych zarówno aspektami środowiskowymi, jak i ekonomicznymi.

## Dlaczego warto elektryfikować flotę?

### Aspekty ekonomiczne

- **Niższe koszty energii** - koszt "zatankowania" EV to ok. 25-30% kosztu paliwa konwencjonalnego
- **Niższe koszty serwisu** - brak wymiany oleju, mniej ruchomych części, regeneracyjne hamowanie
- **Ulgi i dofinansowania** - program "Zielona Flota" i ulgi podatkowe
- **Niższe opłaty drogowe** - zwolnienia z opłat w wielu krajach UE

### Aspekty środowiskowe

Raportowanie ESG staje się obowiązkowe dla coraz większej liczby firm. Elektryczna flota to:
- Redukcja emisji CO2 o 60-80% (uwzględniając mix energetyczny)
- Poprawa jakości powietrza w miastach
- Lepsza ocena w rankingach ESG

## Wyzwania elektryfikacji floty

### Zasięg i planowanie tras

Kluczowym wyzwaniem jest "range anxiety" - obawa przed utratą zasięgu. Nowoczesne systemy fleet management rozwiązują ten problem:

- Monitorowanie stanu naładowania w czasie rzeczywistym
- Planowanie tras z uwzględnieniem dostępnych ładowarek
- Predykcja zasięgu na podstawie stylu jazdy i trasy
- Alertami przy niskim poziomie naładowania

### Infrastruktura ładowania

Budowanie sieci ładowarek wymaga:
- Analizy wzorców użytkowania pojazdów
- Optymalizacji mocy przyłącza
- Smart charging - ładowanie w godzinach niskich taryf
- Zarządzania kolejką ładowania

## Integracja EV z systemem FleetLink

FleetLink oferuje dedykowany moduł dla pojazdów elektrycznych:

- **Dashboard EV** - stan naładowania wszystkich EV w jednym widoku
- **Planer tras** - uwzględnia punkty ładowania i czas ładowania
- **Raporty emisji** - automatyczne raportowanie CO2 dla ESG
- **Optymalizacja ładowania** - minimalizacja kosztów energii

## Hybryda floty - najlepsze podejście

Większość firm zaczyna od hybrydowego podejścia:
- EV dla tras miejskich i krótkich dojazdów
- Pojazdy konwencjonalne dla długich tras

System FleetLink automatycznie sugeruje, który pojazd przydzielić do danego zlecenia.

## Podsumowanie

Elektryfikacja floty to inwestycja, która przy odpowiednim zarządzaniu zwraca się w 3-5 latach. Kluczem jest właściwe planowanie i systemy zarządzania.`,
        category: 'Trendy',
        author: 'Piotr Adamski',
        authorRole: 'Kierownik ds. Innowacji',
        imageUrl: 'https://picsum.photos/seed/blog5/1200/630',
        readTime: 9,
        featured: false,
      },
      {
        slug: 'tachograf-cyfrowy-przepisy',
        title: 'Tachograf cyfrowy 2024 - przepisy i obowiązki przewoźnika',
        excerpt: 'Kompleksowy przewodnik po przepisach dotyczących tachografów cyfrowych: kto musi go używać, jak pobierać dane i jak unikać kar.',
        content: `# Tachograf cyfrowy 2024 - przepisy i obowiązki przewoźnika

Tachograf cyfrowy to obowiązkowe urządzenie w pojazdach ciężarowych używanych do transportu zawodowego. Przepisy unijne regularnie się zaostrzają - sprawdź, co musisz wiedzieć w 2024 roku.

## Kto musi stosować tachograf?

Obowiązek stosowania tachografu dotyczy pojazdów:
- O DMC powyżej 3,5 tony używanych do transportu drogowego
- Autobusów i autokarów z więcej niż 9 miejscami
- Pojazdów używanych do przewozu towarów w celach zarobkowych

### Wyjątki

Z obowiązku zwolnione są m.in.:
- Pojazdy używane wyłącznie na terenie zakładu
- Pojazdy służb ratunkowych
- Pojazdy wojskowe i policyjne
- Transport rolniczy do 50 km od bazy

## Tachograf inteligentny drugiej generacji (G2V2)

Od 21 sierpnia 2023 roku nowe pojazdy muszą być wyposażone w tachograf G2V2, który oferuje:

- **Łączność GNSS** - automatyczny zapis lokalizacji co 3 godziny
- **Komunikacja DSRC** - możliwość zdalnego odczytu przez służby
- **ITS interface** - połączenie z systemami zarządzania ruchem
- **Lepsza ochrona przed manipulacją**

## Pobieranie danych z tachografu

### Częstotliwość pobierania

Dane muszą być pobierane regularnie:
- **Karta kierowcy**: minimum co 28 dni
- **Jednostka VU (pojazd)**: minimum co 90 dni

### Przechowywanie danych

Pobrane dane muszą być przechowywane przez minimum 12 miesięcy i udostępniane na żądanie organów kontrolnych.

## Integracja tachografu z systemem GPS

Nowoczesne systemy fleet management umożliwiają:

- Automatyczne pobieranie danych przez połączenie GSM
- Alerty o zbliżającym się terminie pobierania
- Analizę czasu pracy kierowców
- Automatyczne raportowanie naruszeń

FleetLink integruje się ze wszystkimi popularnymi tachografami cyfrowymi (VDO, Stoneridge, Intellic) i automatyzuje cały proces zarządzania danymi.

## Kary za naruszenia

Inspektorzy ITD mogą nałożyć kary:
- Za brak ważnej karty kierowcy: do 2000 zł
- Za manipulację przy tachografie: do 10 000 zł  
- Za nieprowadzenie zapisów: do 1500 zł per naruszenie

## Praktyczne wskazówki

1. Zawsze sprawdzaj ważność kart kierowców (ważne 5 lat)
2. Ustal procedurę regularnego pobierania danych
3. Archiwizuj dane w zaszyfrowanej formie
4. Szkol kierowców z prawidłowego użytkowania
5. Korzystaj z systemów automatyzujących compliance

## Podsumowanie

Zgodność z przepisami tachografowymi to nie tylko kwestia prawna - to element profesjonalnego zarządzania flotą. FleetLink upraszcza cały proces compliance.`,
        category: 'Prawo',
        author: 'Radca Prawny Monika Jasińska',
        authorRole: 'Specjalista prawa transportowego',
        imageUrl: 'https://picsum.photos/seed/blog6/1200/630',
        readTime: 11,
        featured: false,
      },
    ],
  })

  // Testimonials
  await prisma.testimonial.createMany({
    data: [
      {
        name: 'Krzysztof Wiśniewski',
        role: 'Dyrektor Operacyjny',
        company: 'TransKargo Sp. z o.o.',
        content: 'FleetLink całkowicie zmienił sposób, w jaki zarządzamy naszą flotą 85 pojazdów. Dzięki systemowi zredukowaliśmy zużycie paliwa o 23% w ciągu pierwszych 6 miesięcy. Zwrot z inwestycji nastąpił szybciej niż zakładaliśmy.',
        rating: 5,
        imageUrl: 'https://picsum.photos/seed/person1/200/200',
        industry: 'Transport',
      },
      {
        name: 'Magdalena Kowalczyk',
        role: 'CEO',
        company: 'FastDelivery24',
        content: 'Obsługa klienta FleetLink jest na najwyższym poziomie. Wdrożenie systemu przebiegło sprawnie, a wsparcie techniczne zawsze jest dostępne. Szczególnie cenię moduł optymalizacji tras - zaoszczędziliśmy setki godzin pracy dyspozytorów.',
        rating: 5,
        imageUrl: 'https://picsum.photos/seed/person2/200/200',
        industry: 'Logistyka',
      },
      {
        name: 'Andrzej Kowalski',
        role: 'Kierownik Floty',
        company: 'BudMax Construction',
        content: 'W budownictwie monitorowanie maszyn i pojazdów jest kluczowe. FleetLink daje nam pełną kontrolę nad lokalizacją sprzętu, co wyeliminowało problem kradzieży i nieautoryzowanego użycia. Polecam każdej firmie budowlanej.',
        rating: 5,
        imageUrl: 'https://picsum.photos/seed/person3/200/200',
        industry: 'Budownictwo',
      },
    ],
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
