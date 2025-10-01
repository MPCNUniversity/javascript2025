SELECT distinct p.amount 

FROM payment p

ORDER BY p.amount DESC

LIMIT 1



SELECT distinct p.amount 

FROM payment p

ORDER BY p.amount DESC

LIMIT 20 OFFSET 3;



// offset neemt de eerste rijen weg

// gebruikt als een grote database wordt weergegeven in browser voor paginering



//spelen met offset om efficiente database zoek queries te maken met functies en offset

// Offset 0

// ook al is de id beginnend met 1 de offset telt zoals in array's en begint op positie 0





SELECT distinct p.amount 

FROM payment p

where p.amount >= 3 and p.amount <=9;

//uniek





SELECT p.amount 

FROM payment p

where p.amount >= 3 and p.amount <=9;

//alle



https://dev.mysql.com/doc/refman/8.4/en/built-in-function-reference.html



SELECT lower(f.title)

from film f;



In front end niveau omzetten van input van klanten naar lower of uppercase voordat er opgeslagen wordt in de database



SELECT LOWER(f.title) as film, f.length as lengte, length(f.title) as length\_title

FROM film f;



//length



SELECT LOWER(f.title) as film, f.length as lengte, length(f.title) as length\_title, LEFT(f.title,1), RIGHT(f.title,1)

FROM film f;



//LEFT   Right



SELECT LOWER(f.title) as film, f.length as lengte, length(f.title) as length\_title, Upper(LEFT(f.title,1)), UPPER(RIGHT(f.title,1))

FROM film f;



//upper()



SELECT LOWER(f.title) as film, f.length as lengte, length(f.title) as length\_title, concat(Upper(LEFT(f.title,1)), UPPER(RIGHT(f.title,1)))

FROM film f;



//concat()  samenvoegen van data



SELECT LOWER(f.title) as film, f.length as lengte, length(f.title) as length\_title, concat(Upper(LEFT(f.title,1)), UPPER(RIGHT(f.title,1))) as INITIALS

FROM film f;





**KEYWORDS**

SELECT DISTINCT 'FUNCTIONS' AS

FROM 

WHERE OPERATOREN (BETWEEN, IN, OR, AND, LIKE,<,>,=, NOT

ORDER BY (ASC,DESC)

LIMIT OFFSET  (AANTAL RIJEN BEPERKEN)



GROUP BY  (Alle velden die een functie bevatten)



/foutief

SELECT a.last\_name

FROM actor a

GROUP BY

;



/foutief

SELECT a.last\_name, COUNT(a.last\_name) as aantal

FROM actor a

GROUP BY aantal

;



SELECT a.last\_name, COUNT(a.last\_name) as aantal

FROM actor a

GROUP BY a.last\_name

;



Alleen opsomming van de velden ZONDER functie

om weergave te krijgen van velden met functie



SELECT a.last\_name, COUNT(a.last\_name) as aantal

FROM actor a

GROUP BY a.last\_name

HAVING aantal > 1

;



SELECT a.last\_name, COUNT(a.last\_name) as aantal

FROM actor a

WHERE a.last\_name like 'D%' 

GROUP BY a.last\_name

HAVING aantal > 1

;



SELECT a.last\_name, COUNT(a.last\_name) as aantal

FROM actor a

WHERE a.last\_name like 'D%' 

GROUP BY a.last\_name

HAVING aantal > 1

ORDER BY aantal DESC

;



SELECT a.last\_name, COUNT(a.last\_name) as aantal

FROM actor a

WHERE a.last\_name like 'D%' 

GROUP BY a.last\_name

HAVING aantal > 1

ORDER BY aantal DESC LIMIT 3

;



SELECT a.last\_name, COUNT(a.last\_name) as aantal

FROM actor a

WHERE a.last\_name like 'D%' and a.last\_name like'%ES'

GROUP BY a.last\_name

HAVING aantal > 1

ORDER BY aantal DESC LIMIT 3;



alle films met aantal x dat een film voorkomt en alleen de titels die meer dan 1x voorkomen



1. alle films selecteren
2. veld aantal toevoegen
3. groeperen : films volgens titel groeperen
4. tegelijkertijd tel je de films



SELECT f.title, COUNT(f.title) as aantal

from film f

GROUP BY f.title

ORDER BY aantal DESC

;



SELECT f.title, COUNT(f.title) as aantal

from film f

GROUP BY f.title

HAVING aantal > 1;



pag 24 tot 27 nog  niet gezien nog niet naar kijken . Gaat over functies in twee tabellen



1



3

4



11

12

13

14

15

20

22

23

24

25

26

27

28

29

30

33

36

37

38

39

40

42











