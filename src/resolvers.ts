import { employees } from './index';

const resolvers = {
  Query: {
    employees: () => employees,
    employee: (_: any, args: { empId: number }) => employees.find(emp => emp.empId === args.empId)
  },
  Mutation: {
    addEmployee: (_: any, args: any) => {
      const newEmployee = { ...args };
      employees.push(newEmployee);
      return newEmployee;
    },
    updateEmployee: (_: any, args: any) => {
      const employeeIndex = employees.findIndex(emp => emp.empId === args.empId);
      if (employeeIndex === -1) return null;

      const updatedEmployee = {
        ...employees[employeeIndex],
        ...args
      };
      employees[employeeIndex] = updatedEmployee;
      return updatedEmployee;
    },
    deleteEmployee: (_: any, args: { empId: number }) => {
      const employeeIndex = employees.findIndex(emp => emp.empId === args.empId);
      if (employeeIndex === -1) return null;

      const deletedEmployee = employees.splice(employeeIndex, 1)[0];
      return deletedEmployee;
    }
  }
};

export default resolvers;
