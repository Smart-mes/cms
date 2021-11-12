ALTER TABLE `ey_sql_cache_table` MODIFY COLUMN `sql_result` text NOT NULL COMMENT 'mysql执行结果' AFTER `sql_name`;
ALTER TABLE `ey_article_order` MODIFY COLUMN `order_code`  varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '媒体订单编号' AFTER `order_id`;
ALTER TABLE `ey_media_order` MODIFY COLUMN `order_code`  varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '媒体订单编号' AFTER `order_id`;
ALTER TABLE `ey_shop_order` MODIFY COLUMN `order_code`  varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '订单编号' AFTER `order_id`;
ALTER TABLE `ey_shop_order_service` MODIFY COLUMN `order_code`  varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '订单编号' AFTER `order_id`;
ALTER TABLE `ey_archives` MODIFY COLUMN `jumplinks`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '外链跳转' AFTER `arcrank`;