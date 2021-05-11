create database if not exists hey_discount;
use hey_discount;

create table user
(
	user_id bigint not null auto_increment primary key,
	name varchar(200) not null,
    is_vendor bool not null
);

create table ad
(
	ad_id bigint not null auto_increment primary key,
	user_id bigint not null,
    title varchar(100) not null,
	description varchar(250) not null,
	created_at datetime not null,
	photo_link varchar(10000) default null,
    discount int not null,
    valid_until datetime not null,
    rating double default null,
    reviews int default null,
	foreign key (user_id) references user (user_id)
);

create table review
(
	review_id bigint not null auto_increment primary key,
	ad_id bigint not null,
	user_id bigint not null,
    created_at datetime not null,
    text varchar(1000) not null,
    foreign key (ad_id) references ad (ad_id),
    foreign key (user_id) references user (user_id)
);

insert user (user_name, name, isVendor)
values
(1, 'user1', true),
(2, 'user2', false),
(3, 'user3', false),
(4, 'user4', true),
(5, 'user5', false),
(6, 'user6', true),
(7, 'user7', true),
(8, 'user8', true),
(9, 'user9', true),
(10, 'user10', false),
(11, 'user11', true),
(12, 'user12', true),
(13, 'user13', true),
(14, 'user14', true);

insert ad (ad_id, title, description, created_at, photo_link, discount, valid_until, rating, reviews, user_id)
values
(1001, 'title','description', '2021-03-01 20:57:00', 'www.picture.ru', 30, '2021-06-01 23:00:00', 3.8, 3, 1),
(1002, 'title2','description2', '2021-03-20 19:49:34', NULL, 50, '2021-05-20 20:00:00', 5, 4, 4),
(1003, 'title3','description3', NOW(), NULL, 70, '2021-07-21 21:00:00', NULL, NULL, 6),
(1004, 'title4','description4', NOW(), NULL, 50, '2021-09-09 21:00:00', NULL, NULL, 7),
(1005, 'title5','description5', '2021-05-01 14:37:00', NULL, 15, '2021-09-09 21:00:00', 4.7, 10, 8),
(1006, 'title6','description6', '2021-04-10 10:00:00', NULL, 23, '2021-07-10 20:30:00', 2, 1, 9),
(1007, 'title7','description7', '2021-05-07 12:58:34', NULL, 90, '2021-05-07 22:00:00', 5, 3, 11),
(1008, 'title8','description8', '2020-05-15 00:00:00', NULL, 10, '2020-12-12 19:00:00', 3.9, 190, 12),
(1009, 'title9','description9', '2021-03-05 14:29:43', NULL, 45, '2021-04-13 17:30:00', 4.1, 15, 13),
(1010, 'title10','description10', '2021-04-01 10:09:14', NULL, 5, '2021-05-06 24:00:00', 4.8, 23, 14);

insert review (review_id, created_at, text, ad_id, user_id)
values
(100001, '2021-03-01 23:50:00', 'review1.1', 1001, 2),
(100002, '2021-03-10 13:24:00', 'review1.2', 1001, 3),
(100003, '2021-03-29 16:30:15', 'review1.3', 1001, 5),
(100004, '2021-05-09 10:30:15', 'review2.1', 1002, 2),
(100005, '2021-04-10 13:24:00', 'review2.2', 1002, 3),
(100006, '2021-05-02 16:30:15', 'review2.3', 1002, 5),
(100007, '2021-05-10 17:03:05', 'review2.4', 1002, 10),
(100008, '2021-05-07 15:47:00', 'review3.1', 1007, 3),
(100009, '2021-05-09 16:30:15', 'review3.2', 1007, 5),
(100010, '2021-05-11 17:03:05', 'review3.3', 1007, 10);