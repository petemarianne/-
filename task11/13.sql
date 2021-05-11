SELECT name FROM hey_discount.user WHERE (user_id) in 
((SELECT user_id FROM hey_discount.ad group by user_id, created_at having count(*) > 3 
AND date(ad.created_at)>date('2021-05-01')))