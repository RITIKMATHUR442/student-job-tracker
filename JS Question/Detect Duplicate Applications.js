function hasDuplicateApplications(jobs) {
    const seen = new Set();
  
    for(let job of jobs){
        const key = `${job.company.toLowerCase()}-${job.role.toLowerCase()}`;
        if(seen.has(key)){
            return true;
        }
        seen.add(key);
    }
  }
  
const jobApps = [
    { company: "Google", role: "SDE Intern" },
    { company: "google", role: "sde intern" }, 
    { company: "Amazon", role: "Backend Intern" }
  ];
  
  console.log(hasDuplicateApplications(jobApps));
  