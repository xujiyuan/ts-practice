import { Injectable } from '@nestjs/common';
import { Employee } from '../type/Employee';
import { haveFun } from '../repository/fun';

@Injectable()
export class AppService {
  getHello = (): string => 'Hello World!';

  // Generate a list of last names.
  getLastNames = (employees: Employee[]): string[] => [];

  // Generate a list of first names order by last name.
  getSortedFirstNames = (employees: Employee[]): string[] => [];

  // Generate a list of names of the 5 mostly highly paid employees.
  getTopFive = (employees: Employee[]): string[] => [];

  // Generate a list of names who can not work on php project.
  getNoPhp = (employees: Employee[]): string[] => [];

  // Generate a list of names who can work on c++ and go projects.
  getCppAndGo = (employees: Employee[]): string[] => [];

  // Generate a sum of the total salary cost.
  getSalaryCost = (employees: Employee[]): number => -1;

  // Generate a list of all employees missing a group.
  getMissingGroups = (employees: Employee[]): Employee[] => [];

  // Create an object that maps group names to number of employees in the group.
  // Employees with no group must be counted in a group named 'NoGroup'.
  getGroupCounts = (employees: Employee[]): { [key: string]: number } => ({});

  getAsyncRequest = async () => {
    try {
      const mood = await haveFun();
      return mood ?? 'unhappy';
    } catch (error) {
      return 'I do not want to tell you.';
    }
  };
}
