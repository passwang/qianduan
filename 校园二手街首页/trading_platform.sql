-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-03-01 13:45:46
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `trading_platform`
--

-- --------------------------------------------------------

--
-- 表的结构 `collection`
--

CREATE TABLE IF NOT EXISTS `collection` (
  `student_num` varchar(10) NOT NULL,
  `order_id` int(11) NOT NULL,
  PRIMARY KEY (`student_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `order_id` int(10) unsigned NOT NULL,
  `user_name` char(30) NOT NULL,
  `content` tinytext NOT NULL,
  `time` int(10) unsigned NOT NULL,
  PRIMARY KEY (`order_id`,`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `comment`
--

INSERT INTO `comment` (`order_id`, `user_name`, `content`, `time`) VALUES
(1, '+_+~ACAT116', '测试1', 1486622096);

-- --------------------------------------------------------

--
-- 表的结构 `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(10) NOT NULL AUTO_INCREMENT,
  `student_num` varchar(10) NOT NULL COMMENT '发布商品的人的学号',
  `good_name` varchar(50) NOT NULL,
  `picture` char(50) NOT NULL,
  `bargin` char(2) NOT NULL DEFAULT 'Y',
  `time` int(10) NOT NULL,
  `price` float(8,2) DEFAULT '0.00',
  `introduce` varchar(100) DEFAULT '主人太懒还未填写',
  `type` char(15) DEFAULT '其他',
  `address` varchar(100) NOT NULL,
  `contact` int(11) NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `orders`
--

INSERT INTO `orders` (`order_id`, `student_num`, `good_name`, `picture`, `bargin`, `time`, `price`, `introduce`, `type`, `address`, `contact`) VALUES
(1, '04152134', '那一抹残妆', '999', 'Y', 999, 1000.00, '主人太懒还未填写', '过往', '', 0);

-- --------------------------------------------------------

--
-- 表的结构 `resume`
--

CREATE TABLE IF NOT EXISTS `resume` (
  `student_num` varchar(10) NOT NULL,
  `user_name` varchar(30) NOT NULL DEFAULT '主人太懒还未填写',
  `image` char(50) DEFAULT 'images\\05.jpg',
  `telephone` char(11) NOT NULL DEFAULT '主人太懒还未填写',
  `qq` char(12) DEFAULT '主人太懒还未填写',
  `school_major` varchar(30) NOT NULL DEFAULT '主人太懒还未填写',
  PRIMARY KEY (`student_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `resume`
--

INSERT INTO `resume` (`student_num`, `user_name`, `image`, `telephone`, `qq`, `school_major`) VALUES
('04152134', '主人太懒还未填写', 'images\\05.jpg', '主人太懒还未填写', '主人太懒还未填写', '主人太懒还未填写');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `student_num` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`student_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`student_num`, `password`) VALUES
('', ''),
('04152134', '04152134');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
