INSERT INTO users (username, password)
VALUES
('user1', md5('123')),
('user2', md5('123')),
('user3', md5('123')),
('user4', md5('123')),
('user5', md5('123')),
('user6', md5('123')),
('user7', md5('123')),
('user8', md5('123')),
('user9', md5('123')),
('user10', md5('123'));

INSERT INTO score (user_id, score)
VALUES
(1, 800),
(2, 950),
(3, 720),
(4, 890),
(5, 600),
(6, 820),
(7, 710),
(8, 880),
(9, 940),
(10, 780);