-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2020 at 10:32 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `mentor`
--

CREATE TABLE `mentor` (
  `sn` int(11) NOT NULL,
  `username` text COLLATE utf8_unicode_ci NOT NULL,
  `mentors` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `mentor`
--

INSERT INTO `mentor` (`sn`, `username`, `mentors`) VALUES
(1, 'pajaymedia', 'admin'),
(2, 'admin', 'admin'),
(9, 'saint', 'admin'),
(10, 'saint', 'champion'),
(11, 'tobiloba', 'champion'),
(12, 'saint', 'james');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `sn` int(11) NOT NULL,
  `fullname` text COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `username` text COLLATE utf8_unicode_ci NOT NULL,
  `category` text COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(900) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`sn`, `fullname`, `email`, `username`, `category`, `password`) VALUES
(6, 'Pajay', 'pajaymedia@gmail.com', 'pajaymedia', 'mentee', '$2y$10$DvEO639hFS2PTntFDO0uSu3JrAc7ZPLVU1XzXkLuhpS2kDGGUvxx6'),
(7, 'Aniyi Olalere Johnson', 'hollalere@gmail.com', 'admin', 'mentor', '$2y$10$.A8HT367NLZcU1RSo3.zOOWQcUTQrVVmasaVwUhrybJ4p/gcu5qTC'),
(8, 'Olalere Saint', 'johnsonaniyi1@gmail.com', 'saint', 'mentee', '$2y$10$3UFGxK7O3jVhz.CHfjbsB..ZGe61tY4djZ4Gns9zkMG37ylBlytQe'),
(10, 'Champion Malfikisolo', 'pajaymedia1@gmail.com', 'champion', 'mentor', '$2y$10$Whv0U.mK1/Bw1RZSefYqN.rECDp8Qz8K7fXsdqCoy0P50dRSXfSHq'),
(11, 'John Tobi', 'tobi@gmail.com', 'tobiloba', 'mentee', '$2y$10$3K0lYsPZ2XIIIrvU7JZFO.0O/5Pq2jAA1Br9UW1nGpEHt2qcSwlyW'),
(12, 'Jmaes Arthur Oritsejarfor', 'james123@gmail.com', 'james', 'mentor', '$2y$10$w.oYvxvH76xFmskf5A4U9eG93q59.dKtQHt3SUGpJIpWLLyn67Jhm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mentor`
--
ALTER TABLE `mentor`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`sn`),
  -- ADD UNIQUE KEY `email` (`email`),
  -- ADD UNIQUE KEY `username` (`username`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mentor`
--
ALTER TABLE `mentor`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
