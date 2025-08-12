// // Problem 1: Job Tracker Sorting (Medium)
// function sortJobsByDate(jobs){
//     return jobs.sort((a,b)=>new Date(b.appliedDate)-new Date(a.appliedDate))
// }
// const jobs = [
//     { title: "Software Engineer", company: "Company A", appliedDate: "2023-10-01" },
//     { title: "Data Analyst", company: "Company B", appliedDate: "2023-09-15" },
//     { title: "Product Manager", company: "Company C", appliedDate: "2023-10-05" },
//     { title: "Web Developer", company: "Company D", appliedDate: "2023-08-20" },
// ]
// console.log(sortJobsByDate(jobs));




// Problem 2: Status Frequency Counter (Easy)
function countStatus(jobs){
    const statusCount = {};
    jobs.forEach(job=>{
        const status  = job.status;
        statusCount[status] = (statusCount[status] || 0)+1;

    })
    return statusCount;
}
const jobsWithStatus = [
    { company: "Google", status: "Applied" },
    { company: "Meta", status: "Interview" },
    { company: "Amazon", status: "Applied" },
    { company: "Netflix", status: "Offer" },
    { company: "Tesla", status: "Rejected" },
    { company: "Adobe", status: "Applied" },
    { company: "Uber", status: "Interview" },
    { company: "Microsoft", status: "Rejected" }
  ];
  
  console.log(countStatus(jobsWithStatus));


  

// //   Problem 3: Detect Duplicate Applications (Medium)
// function hasDuplicateApplications(jobs) {
//     const seen = new Set();
  
//     for(let job of jobs){
//         const key = `${job.company.toLowerCase()}-${job.role.toLowerCase()}`;
//         if(seen.has(key)){
//             return true;
//         }
//         seen.add(key);
//     }
//   }
  
// const jobApps = [
//     { company: "Google", role: "SDE Intern" },
//     { company: "google", role: "sde intern" }, 
//     { company: "Amazon", role: "Backend Intern" }
//   ];
  
//   console.log(hasDuplicateApplications(jobApps));
  