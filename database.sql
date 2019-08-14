
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

INSERT INTO "public"."artists"("id","first_name","last_name","artist_medium","description","img_url")
VALUES
(2,E'Gian Lorenzo',E'Bernini',E'Sculpture/Architect',E'Gian Lorenzo Bernini was an Italian sculptor and architect.  While a major figure in the world of architecture, he was also the leading sculptor of his age, credited with creating the Baroque style of sculpture.',E'https://www.passionforpaintings.com/49235/gian-lorenzo-thumb-oil-self-portrait-as-a-young-man-c1623-xx-galleria-borghese-rome.jpg'),
(3,E'John',E'Singer Sargent',E'Painter',E'John Singer Sargent was an American expatriate artist, considered the "leading portrait painter of his generation" for his evocations of Edwardian-era luxury. He created roughly 900 oil paintings and more than 2,000 watercolors, as well as countless sketches and charcoal drawings.',E'https://i.pinimg.com/originals/b4/d4/b9/b4d4b96a9d32354055997d0952aeacc9.jpg'),
(4,E'Diego',E'Velazquez',E'Painter',E'Diego Rodríguez de Silva y Velázquez was a Spanish painter, the leading artist in the court of King Philip IV, and one of the most important painters of the Spanish Golden Age. He was an individualistic artist of the contemporary Baroque period.',E'https://images.metmuseum.org/CRDImages/ep/original/DP221248.jpg'),
(5,E'William',E'Bougereau',E'Painter',E'William Bouguereau was a French academic painter. In his realistic genre paintings he used mythological themes, making modern interpretations of classical subjects, with an emphasis on the female human body.',E'https://mydailyartdisplay.files.wordpress.com/2013/12/photograph-of-william-bouguereau-c-1870.jpg'),
(6,E'Michelangelo',E'da Caravaggio',E'Painter',E'Michelangelo Merisi da Caravaggio was an Italian painter active in Rome, Naples, Malta, and Sicily from the early 1590s to 1610. His paintings combine a realistic observation of the human state, both physical and emotional, with a dramatic use of lighting, which had a formative influence on Baroque painting. ',E'https://i.pinimg.com/originals/33/74/9b/33749be0143c196f8aeb781cf6a7e72b.jpg'),
(8,E'Mary',E'Cassat',E'Painter',E'Mary Stevenson Cassatt was an American painter and printmaker. She was born in Allegheny City, Pennsylvania, but lived much of her adult life in France, where she first befriended Edgar Degas and later exhibited among the Impressionists',E'https://americangirlsartclubinparis.files.wordpress.com/2014/11/mary_cassatt_en_1903-32354.jpg?w=584'),
(10,E'Johua ',E'LaRock',E'Painter',E'Joshua LaRock is internationally recognized as a preeminent figurative artist. His exquisite paintings are an ode to the past filtered through a contemporary life. LaRock’s portraits and figurative pieces alike are memorable for both their emotive quality and for evoking an eerily present feeling. Inspired by Bouguereau and other masters of the past, Joshua imbues a shade of the timeless, drawing the viewer deeper into his personal interpretation of how the world ought to be.',E'https://static1.squarespace.com/static/544262cfe4b0635ae5d8fd8b/56156c18e4b0332fd31e56bb/5bc653021905f4fa15c30c6f/1539724037871/Self+portrait+5x7+web.jpg'),
(13,E'Michael ',E'Klein',E'Painter',E'Michael Klein is part of a group of American artists leading the revival of representational painting hearkening back to the Renaissance and French Academic traditions. Klein had two major solo exhibitions in New York City in 2008 and 2010.',E'https://static1.squarespace.com/static/56f445902b8ddef4a05fed65/t/5a7cea040d9297b9285e34e1/1518135820063/Joshua-LaRock---24x17-%E2%80%9CThe-Flower-Painter-%28Portrait-of-Michael-Klein%29%E2%80%9D-%2412%2C500.jpg'),
(14,E'William ',E'Paxton',E'Painter',E'William McGregor Paxton was an American painter and instructor who embraced the Boston School paradigm and was a co-founder of The Guild of Boston Artists. He taught briefly while a student at Cowles Art School, where he met his wife Elizabeth Okie Paxton, and at the Museum of Fine Arts School in Boston',E'https://s3.amazonaws.com/assets.saam.media/files/styles/max_650x650/s3/images/JuleyBio/J0002037_1b.jpg?itok=QAbIGnBH'),
(21,E'Jean Leon ',E'Gerome',E'Painter',E'Jean-Léon Gérôme was a French painter and sculptor in the style now known as academicism. The range of his oeuvre included historical painting, Greek mythology, Orientalism, portraits, and other subjects, bringing the academic painting tradition to an artistic climax. He is considered one of the most important painters from this academic period. He was also a teacher with a long list of students.',E'https://1.bp.blogspot.com/-z6U9pq0bFAc/W4RufE0scfI/AAAAAAAAArc/NYZ-G5b48C0fZL04AWDAlocgHtueH2CXgCEwYBhgL/s1600/jean%2Bleon%2Bgerome%2Bartist.jpg');

INSERT INTO "public"."pieces"("id","title","year","status","image_url","artist_id")
VALUES
(1,E'Bust of Constanza Bonarelli',1637,TRUE,E'http://www.gianlorenzobernini.org/Bust%20of%20Costanza%20Bonarelli%20Gian%20Lorenzo%20Bernini.jpg',2),
(3,E'David',1624,FALSE,E'https://live.staticflickr.com/2939/14066248025_cd21d79a6c_b.jpg',2),
(4,E'Apollo and Daphne',1625,TRUE,E'http://blogs.cuit.columbia.edu/deb2170/files/2014/12/Apollo-and-Daphne.jpg',2),
(5,E'Medusa',1640,TRUE,E'https://artofyore.files.wordpress.com/2016/10/medusa-by-gion-lorenzo-bernini.jpg',2),
(6,E'Self-Portrait',1906,TRUE,E'https://upload.wikimedia.org/wikipedia/commons/b/bb/Sargent%2C_John_SInger_%281856-1925%29_-_Self-Portrait_1907_b.jpg',3),
(7,E'Daughters of Edward Boit',1882,TRUE,E'https://upload.wikimedia.org/wikipedia/commons/9/96/The_Daughters_of_Edward_Darley_Boit%2C_John_Singer_Sargent%2C_1882_%28unfree_frame_crop%29.jpg',3),
(8,E'Portrait of Henry James',1913,TRUE,E'https://upload.wikimedia.org/wikipedia/commons/1/14/Henry_James_by_John_Singer_Sargent.jpg',3),
(9,E'El Jaleo',1882,TRUE,E'http://www.theodorewiprud.com/wp-content/uploads/2013/12/EL_JALEO-SINGER-544545.jpg',3),
(10,E'Elizabeth Winthrop Chanler',1893,TRUE,E'https://upload.wikimedia.org/wikipedia/commons/a/a2/John_Singer_Sargent_-_Elizabeth_Winthrop_Chanler_%28Mrs._John_Jay_Chapman%29_-_Google_Art_Project.jpg',3),
(11,E'Las Meninas',1656,TRUE,E'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/890px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg',4),
(13,E'Mars Resting',1640,TRUE,E'https://content3.cdnprado.net/imagenes/Documentos/imgsem/ec/ec55/ec55aa06-b32e-481e-8ea6-22deaf2e9a25/1aec4fcf-3625-450e-bf34-d074d781c69b.jpg',4),
(14,E'Triumph of Bacchus',1628,TRUE,E'https://upload.wikimedia.org/wikipedia/commons/5/5d/Vel%C3%A1zquez_-_El_Triunfo_de_Baco_o_Los_Borrachos_%28Museo_del_Prado%2C_1628-29%29.jpg',4),
(15,E'Juan de Pareja',1650,FALSE,E'https://upload.wikimedia.org/wikipedia/commons/0/06/Retrato_de_Juan_Pareja%2C_by_Diego_Vel%C3%A1zquez.jpg',4),
(16,E'Nymphs and Satyr',1873,TRUE,E'https://clarkart.files.wordpress.com/2011/08/nymphs.jpg',5),
(17,E'Song of the Angels',1882,TRUE,E'https://upload.wikimedia.org/wikipedia/commons/0/05/William-Adolphe_Bouguereau_%281825-1905%29_-_Song_of_the_Angels_%281881%29.jpg',5),
(18,E'Self-Portrait',1886,FALSE,E'https://upload.wikimedia.org/wikipedia/commons/3/36/William-Adolphe_Bouguereau_%281825-1905%29_-_Self-Portrait_Presented_To_M._Sage_%281886%29.jpg',5),
(19,E'Innocence',1893,TRUE,E'https://upload.wikimedia.org/wikipedia/commons/1/1b/Bouguereau-Linnocence.jpg',5),
(20,E'The Abduction of Psyche',1895,TRUE,E'https://upload.wikimedia.org/wikipedia/commons/b/b3/Psycheabduct.jpg',5),
(21,E'The Conversion of Saint Paul',1600,FALSE,E'https://www.wga.hu/art/c/caravagg/05/29ceras.jpg',6),
(22,E'The Calling of Saint Matthew',1600,FALSE,E'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Caravaggio%2C_Michelangelo_Merisi_da_-_The_Calling_of_Saint_Matthew_-_1599-1600_%28hi_res%29.jpg/821px-Caravaggio%2C_Michelangelo_Merisi_da_-_The_Calling_of_Saint_Matthew_-_1599-1600_%28hi_res%29.jpg',6),
(23,E'David',1607,FALSE,E'https://www.caravaggio.org/images/paintings/david-with-the-head-of-goliath-1610.jpg',6),
(24,E'The Entombment of Christ',1603,TRUE,E'http://www.museivaticani.va/content/dam/museivaticani/immagini/collezioni/musei/pinacoteca/12_01_caravaggio_deposizione.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg\n',6),
(25,E'The Crucifixion of Saint Peter',1600,TRUE,E'http://1.bp.blogspot.com/-jPWbaiCU1ws/TlQX-P_z0OI/AAAAAAAAAUQ/xn1WZBE_SCo/w1200-h630-p-k-no-nu/St.+Peter%252C+crucifixion+-+caravaggio.jpg',6),
(65,E'Chrissy',2018,TRUE,E'paulImages/Chrissy.jpg',9),
(66,E'Still Life with Bells ',2018,FALSE,E'paulImages/Bells.jpg',9),
(67,E'Still Life with Apples',2018,TRUE,E'paulImages/Apples.jpg',9),
(68,E'Self Portrait',20178,TRUE,E'paulImages/SelfPortrait.jpg',9),
(69,E'Still Life (unfinished)',2016,TRUE,E'paulImages/UnfinishedStillLife.jpg',9),
(73,E'Soldier',2017,FALSE,E'https://static1.squarespace.com/static/544262cfe4b0635ae5d8fd8b/561569abe4b087dd39e84289/5bc65cb8a4222f158d525ffe/1539726706738/Yair+web.jpg?format=1000w',10),
(74,E'CEO',2018,FALSE,E'https://static1.squarespace.com/static/544262cfe4b0635ae5d8fd8b/561569abe4b087dd39e84289/5880d9df1b10e3d0938917bc/1539726703143/Stephen+Ling+-+Portrait.jpg?format=2500w',10),
(75,E'Flowers and Peaches',2015,TRUE,E'https://images.squarespace-cdn.com/content/v1/5d1782c64ab7f9000125079a/1562178001650-3RPFSRT3WT9ACLF0UFIL/ke17ZwdGBToddI8pDm48kKU45l7W_0bi1aqRP-RwbXp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQRK9-vG2WXVFtbI-vgdt_4Bhvn4GSD4GhtITbMmmUqgSjbBNrbtIqOChUU05IIgtw/image-asset.jpeg?format=2500w',13),
(76,E'Grapes',2013,FALSE,E'https://images.squarespace-cdn.com/content/v1/5d1782c64ab7f9000125079a/1562178054434-GNB9K950A8WNRNOF4MBI/ke17ZwdGBToddI8pDm48kHekWKcz85m2o7IRsQxWbM57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2MhwoAzxPYkozoBsEWnu3jB6nMqhnJtYb3KT_XygryARiA/image-asset.jpeg?format=2500w',13),
(77,E'Tea Leaves',1909,TRUE,E'https://www.metmuseum.org/toah/images/hb/hb_10.64.8.jpg',14),
(78,E'The Housemaid',1910,TRUE,E'https://biblioklept.files.wordpress.com/2014/09/william-mcgregor-paxton-the-hausmaid-1910.jpg?w=1400',14),
(79,E'String of Pearls',1908,TRUE,E'https://upload.wikimedia.org/wikipedia/commons/d/d5/William-McGregor-Paxton-The-String-of-Pearls-Oil-Painting.jpg',14),
(81,E'The Childs Bath',1893,FALSE,E'https://upload.wikimedia.org/wikipedia/commons/7/72/Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg',8),
(82,E'Girl Arranging Her Hair.',1886,TRUE,E'https://s.yimg.com/aah/artsheaven/girl-arranging-her-hair-24.jpg',8),
(83,E'The Reader',1877,TRUE,E'https://upload.wikimedia.org/wikipedia/en/d/d7/Mary_Cassatt_The_Reader_1877.jpg',8),
(84,E'Little Girl in a Blue Armchair',1878,TRUE,E'https://si.wsj.net/public/resources/images/BN-XT686_ICONS0_GR_20180307141214.jpg',8),
(85,E'Artist in Studio',2016,FALSE,E'https://static1.squarespace.com/static/544262cfe4b0635ae5d8fd8b/56156c18e4b0332fd31e56bb/5893528ce3df28b756729b29/1539726697136/Self+Portrait+web.jpg?format=1500w',10),
(86,E'Portrait of Girl',2015,FALSE,E'https://static1.squarespace.com/static/544262cfe4b0635ae5d8fd8b/56156c18e4b0332fd31e56bb/5bc6588c8165f507de0cf59e/1539726686991/Elly+web.jpg?format=1500w',10),
(87,E'Nude with Vessel',2016,FALSE,E'https://static1.squarespace.com/static/544262cfe4b0635ae5d8fd8b/56156c18e4b0332fd31e56bb/5880d1e0ff7c501fc6f6a46b/1484837362211/Thirst.jpg?format=2500w',10),
(88,E'Little Girl',2012,FALSE,E'https://static1.squarespace.com/static/544262cfe4b0635ae5d8fd8b/561569abe4b087dd39e84289/5bc65cae71c10bb5312ce2ea/1539726714047/Martha+web.jpg?format=1500w',10),
(89,E'Motherhood',1909,TRUE,E'https://wahooart.com/Art.nsf/O/8BWUN4/$File/Mary-Stevenson-Cassatt-Motherhood.JPG',8),
(90,E'Suspended',2017,TRUE,E'https://static1.squarespace.com/static/56f445902b8ddef4a05fed65/5a506183e2c483af0bd03ce3/5a5061bcc830256b616a187e/1519428869302/Michael-Klein---%E2%80%9CSuspended%E2%80%9D-18x30-and-valued-at-%2412%2C500.jpg',13),
(91,E'Still Life Floral',2018,TRUE,E'https://static.wixstatic.com/media/a4c24a_952f80e0e00a448fb20772b544f135ec~mv2.jpg/v1/fill/w_1048,h_768,al_c,q_90/file.jpg',13),
(92,E'Still Life with Plums',2012,TRUE,E'https://4.bp.blogspot.com/-2FJYJZUH1MQ/UvJ91v_WovI/AAAAAAADHng/MsPJtz1qZ3g/s1600/Michael+Klein+-+www,tuttartpitturasculturapoesiamusica,com+(66).jpg',13),
(93,E'Girl Sleeping',2012,TRUE,E'https://images.squarespace-cdn.com/content/v1/5d1782c64ab7f9000125079a/1562178755432-XPVOAGR4TDIRJA0C6U18/ke17ZwdGBToddI8pDm48kBpH1lT0_pcvk74eJGukqH17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fLsFB-0HhCzQZ8zI7WMkAaS31l00aEbTrAM6xBTAMiR7Q/image-asset.jpeg?format=1000w',13),
(94,E'Oranges',2011,TRUE,E'https://images.squarespace-cdn.com/content/v1/5d1782c64ab7f9000125079a/1562179269770-4RSALIYJD2FYOU1TM91R/ke17ZwdGBToddI8pDm48kBF30jSm9YwW1CSK7dksfIR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jx26OsUsdtRqeCAL0cq5lxSysSIUmqCzEbBa3cJWj2FRg/image-asset.jpeg?format=2500w',13),
(95,E'Sylvia',1908,TRUE,E'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/sylvia-william-mcgregor-paxton.jpg',14),
(96,E'New Necklace',1910,TRUE,E'https://images.fineartamerica.com/images-medium-large/the-new-necklace-william-mcgregor-paxton.jpg',14),
(97,E'Pollice Verso',1872,TRUE,E'https://www.lashorasperdidas.com/wp-content/uploads/2019/06/pollice.jpg',21),
(98,E'The Carpet Sellers',1887,TRUE,E'https://i.pinimg.com/originals/ac/0c/61/ac0c614dbb2825cff19d393b8fd5be78.jpg',21),
(99,E'The Duel After the Masquerade ',1859,TRUE,E'https://seanmunger.com/wp-content/uploads/2018/09/duel-after-the-masquerade-by-gerome-1859-pd.jpg',21),
(100,E'Reception of Le Grand Condé by Louis XIV at Versailles ',1878,TRUE,E'https://eclecticlightdotcom.files.wordpress.com/2018/07/geromeconde.jpg?w=1024',21),
(101,E'The Harem on the Terrace',1875,TRUE,E'http://en.allpaintingsstore.com/Art.nsf/O/8BWS9B/$File/Jean-Leon-Gerome-The-Harem-on-the-Terrace.JPG',21),
(104,E'Caballero, Francisco Pacheco',1622,TRUE,E'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vel%C3%A1zquez_-_Caballero%2C_Francisco_Pacheco_%28Museo_del_Prado%2C_c._1622%29.jpg/897px-Vel%C3%A1zquez_-_Caballero%2C_Francisco_Pacheco_%28Museo_del_Prado%2C_c._1622%29.jpg',4),
(105,E'Unknown Woman',1650,TRUE,E'https://upload.wikimedia.org/wikipedia/commons/6/6c/Diego_Vel%C3%A1zquez_057.jpg',4),
(106,E'St. Longinus',1630,TRUE,E'https://i.pinimg.com/originals/95/f3/2a/95f32ad8429e479ec2422ea615839a28.jpg',2),
(107,E'Bust of Paul V',1650,TRUE,E'https://m.smedata.sk/api-media/media/image/spectator/3/56/56173/56173_1200x.jpeg?rev=3',2),
(113,E'Prosperina',1647,TRUE,E'https://media.mutualart.com/Images/2009_12/22/0012/789403/129056329679422492_2dbb296c-318c-46a3-b725-06dcef26993d_38066_570.Jpeg',2),
(118,E'The Bohemian',1850,TRUE,E'https://render.fineartamerica.com/images/rendered/default/print/5.250/8.000/break/images-medium-5/the-bohemian-william-adolphe-bouguereau.jpg',5),
(119,E'Essie, Ruby, and Ferdinand',1902,TRUE,E'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Essie_Ruby_and_Ferdinand.jpg/1238px-Essie_Ruby_and_Ferdinand.jpg',3),
(123,E'the blue mosque',1850,TRUE,E'https://images.fineartamerica.com/images-medium-large-5/the-blue-mosque-jean-leon-gerome.jpg',21);

INSERT INTO "public"."selfies"("id","image_url","artist_id")
VALUES
(1,E'https://www.passionforpaintings.com/49235/gian-lorenzo-thumb-oil-self-portrait-as-a-young-man-c1623-xx-galleria-borghese-rome.jpg',2),
(2,E'https://i.pinimg.com/originals/b4/d4/b9/b4d4b96a9d32354055997d0952aeacc9.jpg',3),
(3,E'https://mydailyartdisplay.files.wordpress.com/2013/12/photograph-of-william-bouguereau-c-1870.jpg',4),
(4,E'https://images.metmuseum.org/CRDImages/ep/original/DP221248.jpg',5),
(5,E'https://i.pinimg.com/originals/33/74/9b/33749be0143c196f8aeb781cf6a7e72b.jpg',6),
(6,E'https://americangirlsartclubinparis.files.wordpress.com/2014/11/mary_cassatt_en_1903-32354.jpg?w=584',8),
(7,E'https://static1.squarespace.com/static/544262cfe4b0635ae5d8fd8b/56156c18e4b0332fd31e56bb/5bc653021905f4fa15c30c6f/1539724037871/Self+portrait+5x7+web.jpg',10),
(8,E'https://static1.squarespace.com/static/56f445902b8ddef4a05fed65/t/5a7cea040d9297b9285e34e1/1518135820063/Joshua-LaRock---24x17-%E2%80%9CThe-Flower-Painter-%28Portrait-of-Michael-Klein%29%E2%80%9D-%2412%2C500.jpg',13),
(9,E'https://s3.amazonaws.com/assets.saam.media/files/styles/max_650x650/s3/images/JuleyBio/J0002037_1b.jpg?itok=QAbIGnBH',14);