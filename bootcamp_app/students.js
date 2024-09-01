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

pool
  .query(
    `
  SELECT
  students.id, 
  students.name, 
  cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '${process.argv[2]}%'
  LIMIT ${process.argv[3] || 5};
  `
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch((err) => 
    console.error("query error", err.stack));
