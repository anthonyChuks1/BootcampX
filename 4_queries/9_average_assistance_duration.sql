SELECT avg (total_duration) as average_total_duration --get the total_duration variable from the nested query
FROM(
  SELECT
  cohorts.name as cohort,
  sum(started_at - created_at) as total_duration --<--The variable we want
FROM
  assistance_requests
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
GROUP BY
  cohorts.name
ORDER BY
  total_duration
) as total_durations;--then call the query and put it in a table called total_durations

