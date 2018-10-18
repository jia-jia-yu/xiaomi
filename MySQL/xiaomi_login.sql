/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : xiaomi_login

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-18 19:15:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `img1` varchar(255) NOT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `img4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('1', '小米MIX2', '3299', 'images/detail/pms_1509723483.31416776!560x560.jpg', 'images/detail/pms_1522033929.93635904!560x560.jpg', 'images/detail/pms_1495692036.1252953!560x560.jpg', 'images/detail/pms_1495692033.10494295!560x560.jpg');
INSERT INTO `shop` VALUES ('2', '小米8', '3599', 'images/detail/pms_1538019047.53882074!560x560.png', 'images/detail/pms_1538019047.66061297!560x560.png', 'images/detail/pms_1538019047.70813196!560x560.png', 'images/detail/pms_1538019355.46916163!560x560.jpg');
INSERT INTO `shop` VALUES ('3', '小米MIX2', '3299', 'images/detail/pms_1509723483.31416776!560x560.jpg', 'images/detail/pms_1522033929.93635904!560x560.jpg', 'images/detail/pms_1495692036.1252953!560x560.jpg', 'images/detail/pms_1495692033.10494295!560x560.jpg');
INSERT INTO `shop` VALUES ('4', '小米MIX2', '3299', 'images/detail/pms_1509723483.31416776!560x560.jpg', 'images/detail/pms_1522033929.93635904!560x560.jpg', 'images/detail/pms_1495692036.1252953!560x560.jpg', 'images/detail/pms_1495692033.10494295!560x560.jpg');
INSERT INTO `shop` VALUES ('5', '小米8', '3599', 'images/detail/pms_1538019047.53882074!560x560.png', 'images/detail/pms_1538019047.66061297!560x560.png', 'images/detail/pms_1538019047.70813196!560x560.png', 'images/detail/pms_1538019355.46916163!560x560.jpg');

-- ----------------------------
-- Table structure for xiaomi
-- ----------------------------
DROP TABLE IF EXISTS `xiaomi`;
CREATE TABLE `xiaomi` (
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xiaomi
-- ----------------------------
INSERT INTO `xiaomi` VALUES ('qw', 'qw', '1');
INSERT INTO `xiaomi` VALUES ('12', '12', '2');
INSERT INTO `xiaomi` VALUES ('13', '13', '3');
INSERT INTO `xiaomi` VALUES ('14', '14', '4');
INSERT INTO `xiaomi` VALUES ('21', '21', '5');
INSERT INTO `xiaomi` VALUES ('31', '31', '6');
INSERT INTO `xiaomi` VALUES ('12345', '0909', '7');
INSERT INTO `xiaomi` VALUES ('12333', '12333', '8');
INSERT INTO `xiaomi` VALUES ('098', '098', '9');
INSERT INTO `xiaomi` VALUES ('qwe', 'qwe', '10');
