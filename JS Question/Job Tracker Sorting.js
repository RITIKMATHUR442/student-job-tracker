function sortJobsByDate(jobs){
    return jobs.sort((a,b)=>new Date(b.appliedDate)-new Date(a.appliedDate))
}
const jobs = [
    { title: "Software Engineer", company: "Company A", appliedDate: "2023-10-01" },
    { title: "Data Analyst", company: "Company B", appliedDate: "2023-09-15" },
    { title: "Product Manager", company: "Company C", appliedDate: "2023-10-05" },
    { title: "Web Developer", company: "Company D", appliedDate: "2023-08-20" },
]
console.log(sortJobsByDate(jobs));
