-- MySQL dump 10.13  Distrib 5.6.22, for osx10.8 (x86_64)
--
-- Host: 172.16.0.100    Database: Spellbook
-- ------------------------------------------------------
-- Server version	5.5.44-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `spell`
--

DROP TABLE IF EXISTS `spell`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `spell` (
  `spell_id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `spell_type` varchar(25) NOT NULL,
  `spell_affinity` enum('LIGHT','NEUTRAL','DARK') NOT NULL,
  PRIMARY KEY (`spell_id`),
  KEY `spell_type_idx` (`spell_type`),
  CONSTRAINT `spell_type` FOREIGN KEY (`spell_type`) REFERENCES `spell_type` (`spell_type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spell`
--

LOCK TABLES `spell` WRITE;
/*!40000 ALTER TABLE `spell` DISABLE KEYS */;
INSERT INTO `spell` VALUES 
    (1,'Animagus Reversal Spell	','Returns a transformed Animagus into its human form','TRANSFIGURATION','NEUTRAL'),
    (2,'Arrow Shooting Spell','Shoots arrows from the want tip','TRANSFIGURATION','NEUTRAL'),
    (3,'Bat Bogey Hex','Turns the targets bogeys into large, black bats','HEX','DARK'),
    (4,'Horn-growing Hex','causes the target to grow antlers','HEX','DARK'),
    (5,'Cruciatus','tortures victim','CURSE','DARK'),
    (6,'Avada Kedavra','Causes instantaneous death','CURSE','DARK'),
    (7,'Anapneo','clears the throat of a choking victim','HEALING_SPELL','LIGHT'),
    (8,'Velnera Sanentur','used to heal deep gashes','HEALING_SPELL','LIGHT'),
    (9,'Sacrificial protection','protection against the killing curse by sacrifice','COUNTER_SPELL','LIGHT'),
    (10,'Expelliarmus','a defensive charm which forces the victim to release whatever they were holding at the time','CHARM','NEUTRAL'),
    (11,'Obliviate','a spell that can be used to erase memories from an individuals mind','CHARM','NEUTRAL'),
    (12,'Protego','create a magical barrier to deflect physical entities and spells, in order to protect a certain person or area','CHARM','NEUTRAL'),
    (13,'Stupefy','a charm that renders a victim unconscious and halts moving objects','CHARM','NEUTRAL'),
    (14,'Accio','a charm that caused an object at a distance from the caster to fly into their arms','CHARM','NEUTRAL'),
    (15,'Alohomora','a charm that unlocks and opens doors and windows that are not protected by magic','CHARM','NEUTRAL');
/*!40000 ALTER TABLE `spell` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spell_type`
--

DROP TABLE IF EXISTS `spell_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `spell_type` (
  `spell_type_id` varchar(25) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`spell_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spell_type`
--

LOCK TABLES `spell_type` WRITE;
/*!40000 ALTER TABLE `spell_type` DISABLE KEYS */;
INSERT INTO `spell_type` VALUES ('CHARM','Alteration of the objects inherent qualities i.e. its behaviour and capabilities'),('COUNTER_SPELL','Inhibition of the effect of another spell.'),('CURSE','The worst kind of dark magic, intended to affect the target in a strongly negative manner.'),('HEALING_SPELL','Improves the condition of the living object.'),('HEX','Consistently affects the object in a negative manner; has a connotation of dark magic, but more so than a jinx. Major inconvenience to the target.'),('JINX','Minor dark magic; spells whose effects are irritating but amusing, almost playful and of minor inconvenience to the target.'),('TRANSFIGURATION','Alteration of an objects form or appearance');
/*!40000 ALTER TABLE `spell_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-07-31 17:36:22
