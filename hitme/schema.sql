-- FleetLink – schemat bazy danych MySQL
-- Zaimportuj ten plik przez phpMyAdmin lub klienta MySQL

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Tabela: blog_posts
-- ----------------------------
CREATE TABLE IF NOT EXISTS `blog_posts` (
  `id`           INT            NOT NULL AUTO_INCREMENT,
  `slug`         VARCHAR(255)   NOT NULL,
  `title`        VARCHAR(500)   NOT NULL,
  `excerpt`      TEXT           NOT NULL,
  `content`      LONGTEXT       NOT NULL,
  `category`     VARCHAR(100)   NOT NULL,
  `author`       VARCHAR(255)   NOT NULL,
  `author_role`  VARCHAR(255)   NOT NULL,
  `image_url`    VARCHAR(500)   NOT NULL,
  `published_at` DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `read_time`    INT            NOT NULL,
  `featured`     TINYINT(1)     NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Tabela: products
-- ----------------------------
CREATE TABLE IF NOT EXISTS `products` (
  `id`          INT            NOT NULL AUTO_INCREMENT,
  `name`        VARCHAR(255)   NOT NULL,
  `slug`        VARCHAR(255)   NOT NULL,
  `description` TEXT           NOT NULL,
  `price`       DECIMAL(10,2)  NOT NULL,
  `category`    VARCHAR(100)   NOT NULL,
  `image_url`   VARCHAR(500)   NOT NULL,
  `features`    TEXT           NOT NULL,
  `in_stock`    TINYINT(1)     NOT NULL DEFAULT 1,
  `badge`       VARCHAR(100)   DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Tabela: contact_messages
-- ----------------------------
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id`         INT          NOT NULL AUTO_INCREMENT,
  `name`       VARCHAR(255) NOT NULL,
  `email`      VARCHAR(255) NOT NULL,
  `phone`      VARCHAR(50)  DEFAULT NULL,
  `company`    VARCHAR(255) DEFAULT NULL,
  `subject`    VARCHAR(255) NOT NULL,
  `message`    TEXT         NOT NULL,
  `created_at` DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Tabela: testimonials
-- ----------------------------
CREATE TABLE IF NOT EXISTS `testimonials` (
  `id`        INT          NOT NULL AUTO_INCREMENT,
  `name`      VARCHAR(255) NOT NULL,
  `role`      VARCHAR(255) NOT NULL,
  `company`   VARCHAR(255) NOT NULL,
  `content`   TEXT         NOT NULL,
  `rating`    INT          NOT NULL,
  `image_url` VARCHAR(500) NOT NULL,
  `industry`  VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
