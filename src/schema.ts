import { gql } from 'graphql-tag';

const typeDefs = gql`
  type ProjectStatus {
    projectStatus: String
    developerStatus: String
    projectStartDate: String
    plannedEndDate: String
    productionStatus: String
  }

  type Project {
    projectName: String
    type: String
    status: [ProjectStatus]
  }

  input projectInput {
    projectName: String
    type: String
    status: [ProjectStatusInput]
  }

  input ProjectStatusInput{
    projectStatus: String
    developerStatus: String
    projectStartDate: String
    plannedEndDate: String
    productionStatus: String
  }

  type Employee {
    empId: Int
    empName: String
    empProfession: String
    empProjects: [Project]
    empSalary: Int
    empExperience: Int
    empTechnologies: [String]
  }

  type Query {
    employees: [Employee]
    employee(empId: Int!): Employee
  }

  type Mutation {
    addEmployee(
      empId: Int!,
      empName: String!,
      empProfession: String!,
      empSalary: Int!,
      empExperience: Int!,
      empTechnologies: [String!]!,
      empProjects:[projectInput]
    ): Employee

    updateEmployee(
      empId: Int!,
      empName: String,
      empProfession: String,
      empSalary: Int,
      empExperience: Int,
      empTechnologies: [String!],
      empProjects: [projectInput]
    ): Employee

    deleteEmployee(empId: Int!): Employee
  }
`;

export default typeDefs;
