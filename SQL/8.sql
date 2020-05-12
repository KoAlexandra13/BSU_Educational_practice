SELECT NAME, count(p.POST_ID)'number of posts loaded today' FROM user u join posts p on u.USER_ID = p.USER_ID 
where p.CREATED_AT between CURDATE() and CURDATE() + 1 
group by u.USER_ID having count(p.POST_ID) > 3;