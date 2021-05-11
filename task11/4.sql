SELECT user_id, name FROM hey_discount.user WHERE (user_id) in 
(SELECT user_id FROM hey_discount.post group by user_id having count(*) > 3 AND valid_until>date(NOW()))