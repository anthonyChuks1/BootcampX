SELECT
teachers.name as teacher,
students.name as student,
assignments.name as assignment,
(assistance_requests.completed_at - assistance_requests.started_at) as duration

FROM 
assistance_requests
JOIN
students on students.id = student_id
JOIN
teachers on teachers.id = teacher_id
JOIN
assignments on assignments.id = assignment_id
ORDER BY duration;