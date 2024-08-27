SELECT
  count(assistance_requests.*) as total_assistances,
  students.name as name
FROM
  assistance_requests
  JOIN students on students.id = student_id
WHERE
  students.name LIKE 'Elliot Dickinson'
GROUP BY
  students.name;