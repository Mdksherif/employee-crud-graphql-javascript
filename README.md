to run the script by following command
npm run dev

//Querries
// fetch all data

query {
    employees {
      empId
      empName
      empProfession
      empProjects {
        projectName
        type
        status {
          projectStatus
          developerStatus
          projectStartDate
          plannedEndDate
          productionStatus
        }
      }
      empSalary
      empExperience
      empTechnologies
    }
  }
  
// create an id 
mutation {
  addEmployee(
    empId: 67891,
    empName: "farnas",
    empProfession: "Backend Developer",
    empSalary: 600000,
    empExperience: 3,
    empTechnologies: ["Node.js", "GraphQL"],
    empProjects:{
      projectName:"demo project",
      type:"international",
      status:{
        projectStatus:"build",
        developerStatus:"onBoarding",
        projectStartDate:"12/12/24",
        plannedEndDate: "12/12/25",
        productionStatus:"live"

      }
    }
    
    
  ) {
    empId
    empName
    empProfession
    empSalary
    empExperience
    empTechnologies
    empProjects {
      projectName
      type
      status {
        projectStatus
        developerStatus
        projectStartDate
        plannedEndDate
        productionStatus
      }
    }
  }
}


// update the data querry 
mutation {
  updateEmployee(
    empId: 12345,
    empName: "Farnas Updated",
    empProfession: "Senior Software Engineer",
    empSalary: 900000,
    empExperience: 6,
    empTechnologies: ["JavaScript", "React", "Node.js", "GraphQL"]
  ) {
    empId
    empName
    empProfession
    empSalary
    empExperience
    empTechnologies
  }
}


// delete the record 

mutation {
  deleteEmployee(empId: 67891) {
    empId
    empName
  }
}

// what are the structures to follow :

In Index.ts file is the server running file, in that file we can choose the prot and the server is running on the port;
