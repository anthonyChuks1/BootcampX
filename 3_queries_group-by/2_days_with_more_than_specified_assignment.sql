SELECT assignments.day as day, count(assignments.*) as total_assignments 
FROM assignments
GROUP BY assignments.day
HAVING count(assignments.*) >= 10
ORDER BY assignments.day;