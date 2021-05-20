-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pinTask
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `pinTask` ;

-- -----------------------------------------------------
-- Schema pinTask
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pinTask` DEFAULT CHARACTER SET utf8 ;
USE `pinTask` ;

-- -----------------------------------------------------
-- Table `pinTask`.`projects`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinTask`.`projects` ;

CREATE TABLE IF NOT EXISTS `pinTask`.`projects` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinTask`.`dictionary`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinTask`.`dictionary` ;

CREATE TABLE IF NOT EXISTS `pinTask`.`dictionary` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `comment` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinTask`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinTask`.`roles` ;

CREATE TABLE IF NOT EXISTS `pinTask`.`roles` (
  `id` INT NOT NULL,
  `dictionary_id` INT NOT NULL,
  `projects_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_roles_projects1`
    FOREIGN KEY (`projects_id`)
    REFERENCES `pinTask`.`projects` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_roles_dictionary`
    FOREIGN KEY (`dictionary_id`)
    REFERENCES `pinTask`.`dictionary` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_roles_projects1_idx` ON `pinTask`.`roles` (`projects_id` ASC) VISIBLE;

CREATE INDEX `fk_roles_dictionary_idx` ON `pinTask`.`roles` (`dictionary_id` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `pinTask`.`persons`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinTask`.`persons` ;

CREATE TABLE IF NOT EXISTS `pinTask`.`persons` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `publickey` JSON NULL,
  `qualities` JSON NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `username_UNIQUE` ON `pinTask`.`persons` (`username` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `pinTask`.`tasks`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinTask`.`tasks` ;

CREATE TABLE IF NOT EXISTS `pinTask`.`tasks` (
  `id` INT NOT NULL,
  `details` JSON NULL,
  `projects_id` INT NOT NULL,
  `persons_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_tasks_projects1`
    FOREIGN KEY (`projects_id`)
    REFERENCES `pinTask`.`projects` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tasks_persons1`
    FOREIGN KEY (`persons_id`)
    REFERENCES `pinTask`.`persons` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_tasks_projects1_idx` ON `pinTask`.`tasks` (`projects_id` ASC) VISIBLE;

CREATE INDEX `fk_tasks_persons1_idx` ON `pinTask`.`tasks` (`persons_id` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `pinTask`.`signatures`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinTask`.`signatures` ;

CREATE TABLE IF NOT EXISTS `pinTask`.`signatures` (
  `data` JSON NULL,
  `roles_id` INT NOT NULL,
  `tasks_id` INT NOT NULL,
  `persons_id` INT NOT NULL,
  CONSTRAINT `fk_signatures_roles`
    FOREIGN KEY (`roles_id`)
    REFERENCES `pinTask`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_signatures_tasks1`
    FOREIGN KEY (`tasks_id`)
    REFERENCES `pinTask`.`tasks` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_signatures_persons1`
    FOREIGN KEY (`persons_id`)
    REFERENCES `pinTask`.`persons` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_signatures_roles_idx` ON `pinTask`.`signatures` (`roles_id` ASC) VISIBLE;

CREATE INDEX `fk_signatures_tasks1_idx` ON `pinTask`.`signatures` (`tasks_id` ASC) VISIBLE;

CREATE INDEX `fk_signatures_persons1_idx` ON `pinTask`.`signatures` (`persons_id` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `pinTask`.`artefacts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinTask`.`artefacts` ;

CREATE TABLE IF NOT EXISTS `pinTask`.`artefacts` (
  `id` INT NOT NULL,
  `unique_name` VARCHAR(45) NOT NULL,
  `projects_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_artefacts_projects1`
    FOREIGN KEY (`projects_id`)
    REFERENCES `pinTask`.`projects` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `unique_name_UNIQUE` ON `pinTask`.`artefacts` (`unique_name` ASC) VISIBLE;

CREATE INDEX `fk_artefacts_projects1_idx` ON `pinTask`.`artefacts` (`projects_id` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `pinTask`.`artefact_roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinTask`.`artefact_roles` ;

CREATE TABLE IF NOT EXISTS `pinTask`.`artefact_roles` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinTask`.`artefact_links`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinTask`.`artefact_links` ;

CREATE TABLE IF NOT EXISTS `pinTask`.`artefact_links` (
  `artefact_roles_id` INT NOT NULL,
  `artefacts_id` INT NOT NULL,
  `tasks_id` INT NOT NULL,
  CONSTRAINT `fk_artefact_links_artefact_roles1`
    FOREIGN KEY (`artefact_roles_id`)
    REFERENCES `pinTask`.`artefact_roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_artefact_links_artefacts1`
    FOREIGN KEY (`artefacts_id`)
    REFERENCES `pinTask`.`artefacts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_artefact_links_tasks1`
    FOREIGN KEY (`tasks_id`)
    REFERENCES `pinTask`.`tasks` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_artefact_links_artefact_roles1_idx` ON `pinTask`.`artefact_links` (`artefact_roles_id` ASC) VISIBLE;

CREATE INDEX `fk_artefact_links_artefacts1_idx` ON `pinTask`.`artefact_links` (`artefacts_id` ASC) VISIBLE;

CREATE INDEX `fk_artefact_links_tasks1_idx` ON `pinTask`.`artefact_links` (`tasks_id` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `pinTask`.`role_links`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinTask`.`role_links` ;

CREATE TABLE IF NOT EXISTS `pinTask`.`role_links` (
  `roles_id` INT NOT NULL,
  `persons_id` INT NOT NULL,
  CONSTRAINT `fk_role_links_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `pinTask`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_role_links_persons1`
    FOREIGN KEY (`persons_id`)
    REFERENCES `pinTask`.`persons` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_role_links_roles1_idx` ON `pinTask`.`role_links` (`roles_id` ASC) VISIBLE;

CREATE INDEX `fk_role_links_persons1_idx` ON `pinTask`.`role_links` (`persons_id` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
