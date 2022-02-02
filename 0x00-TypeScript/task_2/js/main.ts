interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }
    getCoffeeBreak() {
        return 'Getting a coffee break';
    }
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

export class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }
    getCoffeeBreak() {
        return 'Cannot have a break';
    }
    workTeacherTasks() {
        return 'Getting to work';
    }
}

export function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) return new Teacher();
  return new Director();
}


export function isDirector(employee: any): employee is Director {
    return employee instanceof Director;
}

export function executeWork(employee: DirectorInterface | TeacherInterface) {
    return (isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks());
}

type Subjects = "Math" | "History";

export function teachClass(todayClass:Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}

//testing
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

//testing isDirector
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

console.log(teachClass('Math'));
console.log(teachClass('History'));
