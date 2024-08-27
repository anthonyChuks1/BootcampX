SELECT
  count(assistance_requests.*) as total_assistances,
  teachers.name as name
FROM
  assistance_requests
  JOIN teachers on teachers.id = teacher_id
WHERE
  teachers.name LIKE 'Waylon Boehm'
GROUP BY
  teachers.name;