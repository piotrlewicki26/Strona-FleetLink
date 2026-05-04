<?php
header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/../config.php';

try {
    $conn = getDbConnection();
    $stmt = $conn->query(
        'SELECT id, slug, title, excerpt, content, category, author,
                author_role, image_url, published_at, read_time, featured
         FROM blog_posts
         ORDER BY published_at DESC'
    );
    $rows = $stmt->fetchAll();

    $posts = array_map(static function (array $row): array {
        return [
            'id'          => (int) $row['id'],
            'slug'        => $row['slug'],
            'title'       => $row['title'],
            'excerpt'     => $row['excerpt'],
            'content'     => $row['content'],
            'category'    => $row['category'],
            'author'      => $row['author'],
            'authorRole'  => $row['author_role'],
            'imageUrl'    => $row['image_url'],
            'publishedAt' => $row['published_at'],
            'readTime'    => (int) $row['read_time'],
            'featured'    => (bool) $row['featured'],
        ];
    }, $rows);

    echo json_encode($posts);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error']);
}
