SELECT
  students.name as student,
  avg(assignment_submissions.duration) as average_assignment_duration
FROM
  assignment_submissions
  JOIN assignments on assignments.id = assignment_id
  JOIN students on students.id = student_id
WHERE
  students.end_date IS NULL
GROUP BY
  students.name
ORDER BY
  average_assignment_duration desc;