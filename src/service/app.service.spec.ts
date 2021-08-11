import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../controller/app.controller';
import { AppService } from './app.service';
import { employees } from '../constant';
import { Employee } from 'src/type/Employee';
describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('App Service', () => {
    /**
     * This is an example test
     */
    test('should return Hello World!', () => {
      expect(appService.getHello()).toEqual('Hello World!');
    });

    /**
     * Please write this test first and implement the functionality
     */
    test('getSalaryCost should return sum of the total salary cost.', () => {
      expect(1).toEqual(2);
    });

    /**
     * Please implement the functions for the tests below
     */
    test('getLastNames should return a list of last names', () => {
      const lastNameTest = [
        'Wayne',
        'Austin',
        'Kane',
        'Shima',
        'Nancy',
        'Maximoff',
        'Van Dyne',
        'Danvers',
        'Howlett',
      ];
      expect(appService.getLastNames(employees)).toEqual(lastNameTest);
    });

    test('getSortedFirstNames should return a list of sorted first names', () => {
      const firstNameTest = [
        'Steve',
        'Carol',
        'James',
        'Kathy',
        'Wanda',
        'Charles',
        'Tetsuo',
        'Janet',
        'Bruce',
      ];
      expect(appService.getSortedFirstNames(employees)).toEqual(firstNameTest);
    });

    test('it should return a list of the 5 mostly highly paid employees', () => {
      const topFive = [
        'Carol Danvers',
        'James Howlett',
        'Wanda Maximoff',
        'Janet Van Dyne',
        'Tetsuo Shima',
      ];
      expect(appService.getTopFive(employees)).toEqual(topFive);
    });

    test('getNoPhp should return employees who can not work on php project', () => {
      const phpGuy = ['Bruce Wayne'];
      expect(appService.getNoPhp(employees)).toEqual(phpGuy);
    });

    test('getCppAndGo should return employees can work on c++ and go projects.', () => {
      const cppAndGo = [];
      expect(appService.getCppAndGo(employees)).toEqual(cppAndGo);
    });

    test('getMissingGroups should return a list of all employees missing a group', () => {
      const missingGroups: Employee[] = [
        {
          name: 'Charles Nancy',
          salary: 150,
          skill: ['javascript', 'php', 'coldfusion', 'java'],
        },
      ];
      expect(appService.getMissingGroups(employees)).toEqual(missingGroups);
    });

    test('getGroupCounts should return an object with count to each group', () => {
      const groupReport = {
        group1: 3,
        group2: 1,
        NoGroup: 1,
        group3: 2,
        group4: 2,
      };
      expect(appService.getGroupCounts(employees)).toEqual(groupReport);
    });

    /**
     * getAsyncRequest function has been implemented, please write a test for it
     *
     * Hint: You can use spyon of jest or mock if you prefer
     *
     * https://jestjs.io/docs/jest-object
     */
    test('implement me', () => {
      expect(1).toEqual(2);
    });
  });
});
