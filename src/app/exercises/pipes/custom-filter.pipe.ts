import { Pipe, PipeTransform } from '@angular/core';

interface Employees {
  name: string;
  department: string;
}

@Pipe({
  name: 'filterDepartment',
})
export class filterDepartmentPipe implements PipeTransform {
  transform(employees: Employees[], filterDepartment: string) {
    if (!employees || !filterDepartment) {
      return employees;
    }
    return employees.filter((employee) => {
      let check = employee.department;
      return check.toLowerCase().includes(filterDepartment.toLowerCase());
    });
  }
}
