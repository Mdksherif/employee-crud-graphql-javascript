import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { json } from 'body-parser';
import typeDefs from './schema';
import resolvers from './resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  app.use('/graphql', json(), expressMiddleware(server));

  app.listen({ port: 4000 }, () =>
    console.log('Server running at http://localhost:4000/graphql')
  );
});

export const employees = [
    {
      empId: 12345,
      empName: 'Farnas',
      empProfession: 'Software Engineer',
      empProjects: [
        {
          projectName: "Project A",
          type: "National Project",
          status: [
            {
              projectStatus: "in Progress",
              developerStatus: "active",
              projectStartDate: "12/12/2023",
              plannedEndDate: "21/12/2024",
              productionStatus: "Live"
            }
          ]
        },
        {
          projectName: "Project B",
          type: "International Project",
          status: [
            {
              projectStatus: "in Progress",
              developerStatus: "active",
              projectStartDate: "12/12/2023",
              plannedEndDate: "21/12/2024",
              productionStatus: "Live"
            }
          ]
        }
      ],
      empSalary: 800000,
      empExperience: 5,
      empTechnologies: ['JavaScript', 'React', 'Node.js']
    }
];
  