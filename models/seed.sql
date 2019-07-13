INSERT INTO places (category, place_name, street_address, city, jurisdiction, zip_code, phone_number, summary, services, external_link, createdAt, updatedAt) VALUES ("Medical", "Your Medical Home", "23 Elm St", "Exeter", "NH", "03825", "(603) 555-4267", "Some sort of summary statement here", "Description of services here", "https://yourmedicalhome.com", '2019-07-12 10:27:52', '2019-07-12 10:27:52');
INSERT INTO places (category, place_name, street_address, city, jurisdiction, zip_code, phone_number, summary, services, external_link, createdAt, updatedAt) VALUES ("Entertainment", "Children's Museum of New Hampshire", "6 Washington Street", "Dover", "NH", "03820", "(603) 742-2002", "Some sort of summary statement here", "Description of services here", "https://www.childrens-museum.org", '2019-07-12 10:27:52', '2019-07-12 10:27:52');

INSERT INTO users (user_name, email_address, createdAt, updatedAt) VALUES ("John Smith", "jsmith@google.com", '2019-07-12 11:27:52', '2019-07-12 11:27:52');
INSERT INTO users (user_name, email_address, createdAt, updatedAt) VALUES ("Karen Smith", "smithfam@comcast.net", '2019-07-12 12:27:52', '2019-07-12 12:27:52');

INSERT INTO reviews (rating, comments, createdAt, updatedAt, PlaceId, UserId) VALUES (3, "Was okay but not great", '2019-07-12 12:27:52', '2019-07-12 12:27:52', 1, 2);
INSERT INTO reviews (rating, comments, createdAt, updatedAt, PlaceId, UserId) VALUES (5, "Excellent!!", '2019-07-12 12:27:52', '2019-07-12 12:27:52', 2, 2);
INSERT INTO reviews (rating, comments, createdAt, updatedAt, PlaceId, UserId) VALUES (1, "Too much going on with no supervision", '2019-07-12 12:27:52', '2019-07-12 12:27:52', 2, 1);