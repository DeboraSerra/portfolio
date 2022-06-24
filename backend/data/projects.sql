CREATE DATABASE  IF NOT EXISTS `projects` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `projects`;
-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: projects
-- ------------------------------------------------------
-- Server version	5.7.38

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
-- Table structure for table `back_end`
--

DROP TABLE IF EXISTS `back_end`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `back_end` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `repository` varchar(300) NOT NULL,
  `image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `back_end`
--

LOCK TABLES `back_end` WRITE;
/*!40000 ALTER TABLE `back_end` DISABLE KEYS */;
/*!40000 ALTER TABLE `back_end` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `front_end`
--

DROP TABLE IF EXISTS `front_end`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `front_end` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `repository` varchar(300) NOT NULL,
  `image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `front_end`
--

LOCK TABLES `front_end` WRITE;
/*!40000 ALTER TABLE `front_end` DISABLE KEYS */;
INSERT INTO `front_end` VALUES (1,'Project Solar System','It was developed as project to the Software Development course in Trybe. As the first project using React, it was meant to apply the technics to render lists on screen. It shows a list of planets and a list of space missions. The user can click on each planet and to see the missions to it.','https://deboraserra.github.io/project-solar-system/','https://github.com/DeboraSerra/portfolio/blob/master/src/images/SolarSystem.png?raw=true'),(2,'Project Tryunfo','It was developed as project to the Software Development course in Trybe. It was meant to use the state of the components and controlled components. The project is a card game where the user can create a deck of cards, where one of them is a special card.\n After that the user can see the cards they created and then, if more than one person create a deck, they can play. When the user clicks the start button, the deck is shuffled and the game can start. The special (trunfo) card wins from any card, for the others, the players select one off the three attributes and compare with each other, the biggest attribute wins.','https://deboraserra.github.io/project-tryunfo/','https://github.com/DeboraSerra/portfolio/blob/master/src/images/Tryunfo.png?raw=true'),(3,'Project TrybeTunes','It was developed as project to the Software Development course in Trybe. It was meant to practice the use of routes. To use this application, the user must type a name to be redirected to a search page. Then the user can type the name of an artist and will receive a list that match what was typed. After that the user can select an album to be redirected to the previous of the musics. They can also mark the musics as favorites and revisit it in the favorites section. At last, the user can edit the profile page to add a photo, change the name, add an email and some description if they want.','https://deboraserra.github.io/project-trybe-tunes/','https://github.com/DeboraSerra/portfolio/blob/master/src/images/Trybetunes.png?raw=true'),(4,'Project Front-end Online Store','It was developed in a group of five people as a project to the Software Development course in Trybe. It was meant to practice everything we learned so far and to apply the agile methodologies. The project simulates an online store where the user can search for a specific product or select a category. After that, the user can directly add a product to the cart or can click o in to see be redirected to the page of details of the product. In that page the user can see the technical specifications of the products and the evaluations and can also add an evaluation. Through this page, the user can add more than one product at a time to the shopping cart. When they are ready to \'check out\', they can click on the cart icon and be redirected to the cart page. In this page, the user can make alterations in the products, delete, reduce or increase the amount of items in each product, empty the cart or finalize the sale, being redirect do the checkout page. In the checkout page the user can see the products they have selected an fill the buyer\'s information to \'finalize\' the sale.','https://deboraserra.github.io/project-online-store/','https://github.com/DeboraSerra/portfolio/blob/master/src/images/OnlineStore.png?raw=true'),(5,'Project Trybewallet','It was developed as project to the Software Development course in Trybe. It was meant to practice the use of Redux and Thunk to manage the global state of the application. This project simulates an expenses control. To start the user have to type an email and a password to \'log in\' and be redirected to the wallet page. Then the user can type the value they spent, with what it was spend on, the currency, the method of payment and the category. After that, the information goes to a table where the value spent is converted to real and is added to the total amount registered on the top right of the page. The user can also edit the expenses or delete it.','https://deboraserra.github.io/project-trybewallet/','https://github.com/DeboraSerra/portfolio/blob/master/src/images/trybewallet.png?raw=true'),(6,'Project Trivia Game','It was developed in a group of six people as a project to the Software Development course in Trybe. It was meant to practice everything we learned so far and to apply the agile methodologies. This project is a trivia game where the user can select the difficulty, category and type of the questions by clicking the gear button. After that, they must type a name and an email to start the game. When the game starts, the user has 30 seconds to to answer the question. If they answer in time, the correct answer appears in green and the wrong ones appear in red and the next button becomes visible. If the user doesn\'t answer in time, the answer buttons are disabled and a button to start again appears on screen. The game has 5 questions and at the end the user receives a score and number of hits. After that, the user can choose to play again or see the ranking of the players.','https://deboraserra.github.io/project-trivia-game/','https://github.com/DeboraSerra/portfolio/blob/master/src/images/trivi-game.png?raw=true'),(7,'Project Star Wars Planets','It was developed as a project to the Software Development course in Trybe. It was meant to practice the use o function components and Context-API. This project uses an API that shows the information about the Star Wars planets and the user can filter the information by the planet\' name, or any numeric value specified in a select field. The user can also sort the data according to this columns.','https://deboraserra.github.io/project-starwars-planets/','https://github.com/DeboraSerra/portfolio/blob/master/src/images/Starwars.png?raw=true'),(8,'Project Recipes App','It was developed in a group of four people as a project to the Software Development course in Trybe. It was meant to practice everything we learned so far as the final project to the Front End Module and to apply the agile methodologies. This project uses two recipes APIs, one for meals and one for drinks. In this application the user can \'log in\' with email and password and be redirected to the meals page, where they can see 12 cards of different recipes. The user can select a specific category or search for a specific ingredient or meal name and select meal card to be redirected to the recipe. In the recipe page, the user can like it or click the share button to copy the url of the recipe, choose a recommended drink or start the recipe. When the user starts the recipe, they are redirected to a similar page, where they can check the ingredients as they proceed. If for some reason the user has to stop in the middle, the progress is saved, otherwise the finish button is enabled and the user is redirected to the done recipes page. The user can also click the profile button and then choose to see the done recipes page or the the favorite recipes page. The drinks paths are the same, the user just have to click the dink icon on the bottom left of the screen. If the user click the compass icon, they will be redirected to the explore page, where they can choose to explore drinks or foods, and then choose to explore by ingredient, by nationality (foods) or to receive a surprise recipe. This application was developed with more than 90% test coverage.','https://deboraserra.github.io/project-recipes-app/','https://github.com/DeboraSerra/portfolio/blob/master/src/images/RecipesApp.png?raw=true');
/*!40000 ALTER TABLE `front_end` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fundaments`
--

DROP TABLE IF EXISTS `fundaments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fundaments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `repository` varchar(300) NOT NULL,
  `image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fundaments`
--

LOCK TABLES `fundaments` WRITE;
/*!40000 ALTER TABLE `fundaments` DISABLE KEYS */;
INSERT INTO `fundaments` VALUES (1,'Project Pixel Art','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. The project is a painting board were the user can select a a color and then click the \'pixel\' board to color it. The user can also resize the board from 5 to 50 \'pixels\'.','https://deboraserra.github.io/Project-pixel-art/index.html','https://github.com/DeboraSerra/portfolio/blob/master/src/images/pixelArt.png?raw=true'),(2,'Project Playground Functions','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge in JavaScript using conditions (if/else, switch/case), loops (for, for/in, for/of) and common operators.','https://github.com/DeboraSerra/Trybe-exercises/tree/main/Module1_Fundaments/Block4/Project-playground-functions','https://github.com/DeboraSerra/portfolio/blob/master/src/images/playground.jpeg?raw=true'),(3,'Project Shopping Cart','It was developed as project to the Software Development course in Trybe. This project was meant to apply the use of asynchronous functions a usage of APIs. It simulates a shopping app, where the user can browse through the technology items an save them to the shopping cart or delete it from the cart. The final price is calculated automatically.','https://deboraserra.github.io/Project-shopping-cart/index.html','https://github.com/DeboraSerra/portfolio/blob/master/src/images/ShoppingCart.png?raw=true'),(4,'Project Mystery Letter','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. The project is a sort of game where the user can type a phrase e see it turned into a message \'clipped\' from magazines and newspapers.','https://deboraserra.github.io/Project-mystery-letter/index.html','https://github.com/DeboraSerra/portfolio/blob/master/src/images/MysteryLetter.png?raw=true'),(5,'Project lessons learned','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge in HTML5 and positioning in CSS3 that we had achieved so far.','https://deboraserra.github.io/Project-lessons-learned/project-block3.html','https://github.com/DeboraSerra/portfolio/blob/master/src/images/lessonsLearned.png?raw=true'),(6,'Project Trybewarts','It was developed in groups of 2 people as a project to the Software Development course in Trybe and was meant to apply the knowledge we got so far regarding forms and the properties of Flex box in CSS. It simulates a registration form to the school of Trybewarts.','https://deboraserra.github.io/Project-Trybewarts/index.html','https://github.com/DeboraSerra/portfolio/blob/master/src/images/TrybeWarts.png?raw=true'),(7,'Project Meme Generator','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. In this project the user can select a famous image or upload one and type a message to appear as a meme. They can also select three different type of border to decorate it.','https://deboraserra.github.io/Project-meme-generator/index.html','https://github.com/DeboraSerra/portfolio/blob/master/src/images/MemeGenerator.png?raw=true'),(8,'Project To Do List','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. The project is a to do list were the user can add as many tasks as they like, can mark it as complete, change it\'s position, delete tasks and save to access the tasks later.','https://deboraserra.github.io/Project-to-do-list/index.html','https://github.com/DeboraSerra/portfolio/blob/master/src/images/ToDoList.png?raw=true'),(9,'Project Color Guess','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge we had acquired so far using DOM. This project is a game where the user receive three different numbers between 0 and 255 and 6 colors. Then they have to guess which of the colors match the given numbers based in the rgb colors. For each right answer the user receives 3 points.','https://deboraserra.github.io/Project-color-guess/index.html','https://github.com/DeboraSerra/portfolio/blob/master/src/images/ColorGuess.png?raw=true'),(10,'Project Zoo Functions','It was developed as project to the Software Development course in Trybe. It was meant to apply the knowledge in Higher Order Functions, Destructuring, Spread Operator and others improvements of ES6. It simulates the systems in a zoo. The next step in this project is apply the functions developed in an \'Online Zoo\' so the user can interact with the functions developed.','https://github.com/DeboraSerra/DeboraSerra.github.io/tree/main/Project-zoo-functions','https://github.com/DeboraSerra/portfolio/blob/master/src/images/zoofunctions.jpeg?raw=true');
/*!40000 ALTER TABLE `fundaments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal`
--

DROP TABLE IF EXISTS `personal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `repository` varchar(300) NOT NULL,
  `image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal`
--

LOCK TABLES `personal` WRITE;
/*!40000 ALTER TABLE `personal` DISABLE KEYS */;
INSERT INTO `personal` VALUES (1,'Clock','It was developed as a challenge from one of Trybe\'s instructors. It is a dynamic clock with responsive design.','https://deboraserra.github.io/Clock/index.html','https://github.com/DeboraSerra/portfolio/blob/master/src/images/Clock.png?raw=true'),(2,'Project Stopwatch','It was a developed as a challenge from one of Trybe\'s specialists. Since in class we needed timers to mark the interval, we were challenged to develop a timer with the following requirements: It must be developed in React, the timer must work properly, It must have something to signal that the time is over.','https://deboraserra.github.io/stopwatch/','https://github.com/DeboraSerra/portfolio/blob/master/src/images/Stopwatch.png?raw=true'),(3,'Password Generator','It was developed as a challenge from one of Trybe\'s specialists. The goal was to create a password generator with mobile first design where the user can select the length of the password and if it must include uppercase letters, lowercase letters, numbers and/or symbols.','https://deboraserra.github.io/password-generator/','https://github.com/DeboraSerra/portfolio/blob/master/src/images/PasswordGenerator.png?raw=true');
/*!40000 ALTER TABLE `personal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-24 16:22:12
