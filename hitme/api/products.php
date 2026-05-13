<?php
header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/../config.php';

try {
    $conn = getDbConnection();
    $stmt = $conn->query(
        'SELECT id, name, slug, description, price, category,
                image_url, features, in_stock, badge
         FROM products
         ORDER BY id ASC'
    );
    $rows = $stmt->fetchAll();

    $products = array_map(static function (array $row): array {
        return [
            'id'          => (int) $row['id'],
            'name'        => $row['name'],
            'slug'        => $row['slug'],
            'description' => $row['description'],
            'price'       => (float) $row['price'],
            'category'    => $row['category'],
            'imageUrl'    => $row['image_url'],
            'features'    => $row['features'],
            'inStock'     => (bool) $row['in_stock'],
            'badge'       => $row['badge'],
        ];
    }, $rows);

    echo json_encode($products);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error']);
}
