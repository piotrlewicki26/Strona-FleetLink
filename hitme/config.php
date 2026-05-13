<?php
/**
 * Konfiguracja bazy danych MySQL
 * Uzupełnij poniższe dane logowania do bazy MySQL z panelu hitme.pl
 */

define('DB_HOST', 'localhost');
define('DB_NAME', 'TWOJA_NAZWA_BAZY');   // np. u12345_fleetlink
define('DB_USER', 'TWOJ_UZYTKOWNIK');    // np. u12345_fleetlink
define('DB_PASS', 'TWOJE_HASLO');
define('DB_CHARSET', 'utf8mb4');

function getDbConnection(): PDO
{
    static $pdo = null;
    if ($pdo === null) {
        $dsn = sprintf(
            'mysql:host=%s;dbname=%s;charset=%s',
            DB_HOST,
            DB_NAME,
            DB_CHARSET
        );
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
    }
    return $pdo;
}
