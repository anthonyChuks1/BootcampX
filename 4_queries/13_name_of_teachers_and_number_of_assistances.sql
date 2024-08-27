SELECT DISTINCT
  teachers.name as teacher,
  cohorts.name as cohort,
  count(*) as total_assistances
FROM
  assistance_requests
  JOIN teachers ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
WHERE
  cohorts.name = 'JUL02'
GROUP BY 
cohorts.name, teachers.name
ORDER BY
  teachers.name;