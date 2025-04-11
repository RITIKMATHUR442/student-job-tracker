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
  