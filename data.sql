CREATE TABLE IF NOT EXISTS `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `score` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7;

INSERT INTO `players` (`id`, `name`, `score`) VALUES
(1, 'Marie Curie', 0),
(2, 'Grace Hopper', 0),
(3, 'Claude Shannon', 0),
(4, 'Ada Lovelace', 0),
(5, 'Carl Friedrich Gauss', 0),
(6, 'Nikola Tesla', 0);

