-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: default
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `LIKE_ID` int NOT NULL AUTO_INCREMENT,
  `POST_ID` int NOT NULL,
  `USER_ID` int NOT NULL,
  PRIMARY KEY (`LIKE_ID`),
  UNIQUE KEY `id_UNIQUE` (`LIKE_ID`),
  KEY `USER_idx` (`USER_ID`),
  KEY `fk_post_id_idx` (`POST_ID`),
  CONSTRAINT `fk_likes_post_id` FOREIGN KEY (`POST_ID`) REFERENCES `posts` (`POST_ID`) ON DELETE CASCADE,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,2,2),(7,2,1),(8,2,4),(9,3,5),(10,3,1),(11,3,3),(12,4,3),(13,4,4),(14,5,5),(15,5,2),(16,5,1),(17,6,5),(18,6,1),(19,6,4),(20,7,2),(21,7,1),(22,8,1),(23,8,2),(24,8,3),(25,9,1),(26,9,3),(27,9,4),(28,10,5),(29,10,2),(30,10,3),(31,10,4);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `POST_ID` int NOT NULL AUTO_INCREMENT,
  `USER_ID` int NOT NULL,
  `DESCRIPTION` varchar(2000) DEFAULT NULL,
  `CREATED_AT` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `PHOTO_LINK` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`POST_ID`),
  UNIQUE KEY `POST_ID_UNIQUE` (`POST_ID`),
  KEY `POSTS_idx` (`USER_ID`),
  CONSTRAINT `fk_user_post_id` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,'A man from Australia has a snake. He feeds it a rat with tongs. This is dangerous for the snake. ','2020-05-01 00:00:00','user-photo.jpg'),(2,2,'Hello students, there is a group on Facebook.','2020-05-02 11:07:26','dog.jpg'),(3,3,'This year, there are the Olympics in Tokyo, Japan.','2020-05-03 11:07:40','fish.jpg'),(4,1,'A hairdresser has an idea. He makes a picture on somebody’s head.','2020-05-04 11:19:04','user-photo.jpg'),(5,5,'A man attacks two bars in Hanau, Germany.It lies about 12 miles from Frankfurt, ','2020-05-05 11:22:25','panda.jpg'),(6,1,'Last weekend, a big storm hits the UK. Wales and Southern England have a lot of problems.','2020-05-06 11:22:25','user-photo.jpg'),(7,2,'Some people go to Chernobyl. They see a fox. One person films the fox.','2020-05-07 11:22:25','dog.jpg'),(8,1,'Scientists find out that the number of penguins goes down. Some populations go ','2020-05-08 11:22:25','user-photo.jpg'),(9,4,'Last month, the US kills an important Iranian general. ','2020-05-09 11:22:25','koala.jpg'),(10,3,'Experts work on a church. It is a very old church. During the work, they find','2020-05-12 11:30:32','fish.jpg');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `TAG_ID` int NOT NULL AUTO_INCREMENT,
  `POST_ID` int NOT NULL,
  `TAG_CONTENT` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`TAG_ID`),
  UNIQUE KEY `ID_UNIQUE` (`TAG_ID`),
  KEY `fk_post_id_idx` (`POST_ID`),
  CONSTRAINT `fk_post_tag_id` FOREIGN KEY (`POST_ID`) REFERENCES `posts` (`POST_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,1,'#snake'),(2,2,'#english'),(3,3,'#olimpics'),(4,4,'#hairdresser'),(5,5,'#Germany'),(6,6,'#storm'),(7,6,'#UK'),(8,7,'#fox'),(9,7,'#funny'),(10,7,'#animal'),(11,8,'#peguins'),(12,8,'#Antarctica'),(13,9,'#US'),(14,10,'#Peru'),(15,10,'#bones');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `USER_ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) NOT NULL,
  PRIMARY KEY (`USER_ID`),
  UNIQUE KEY `USER_ID_UNIQUE` (`USER_ID`),
  UNIQUE KEY `NAME_UNIQUE` (`NAME`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (5,'big_panda'),(4,'cute_koala'),(2,'dog_robbi'),(3,'japan_fish'),(1,'kosasha');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'default'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-12 15:07:02
