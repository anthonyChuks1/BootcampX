const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

//const fs = require("fs");
// const path = `../3_queries_group-by/6_students_with_lower_average_completion_time.sql`

// fs.readFile(path, 'utf-8', (err, data)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log(data);
//   pool.query(
//     data
//   )
//   .then((res)=> {
//     console.log(res.rows);
//   })
//   .catch((err) => console.error("query error", err.stack));

// })

// pool.query(
//   // `
//   // SELECT id, name, cohort_id
//   // FROM students
//   // LIMIT 5;
//   // `
// )
// .then((res)=> {
//   console.log(res);
// })
// .catch((err) => console.error("query error", err.stack));
const queryString = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort 
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;


const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];

pool
  .query(queryString, values)
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch((err) => console.error("query error", err.stack));
