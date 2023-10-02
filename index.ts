enum DirectionNames {
  humanitarian = "humanitarian",
  linguistic = "linguistic",
  economic = "economic",
}

enum Levels {
  first = "first",
  second = "second",
  third = "third",
  fourth = "fourth",
  fifth = "fifth",
}

enum Attendance {
  present = "present",
  absent = "absent",
}

enum Subjects {
  biology = "Biology",
  drawing = "Drawing",
  geography = "Geography",
  history = "History",
  literature = "Literature",
}

enum Grades {
  one = 1,
  two,
  three,
  four,
  five,
}

class School {
  private _directions: Direction[] = [];

  addDirection(direction: Direction) {
    this._directions.push(direction);
  }

  get directions() {
    return this._directions;
  }
}

class Direction {
  levels: Level[] = [];
  private _name: DirectionNames;

  constructor(name: DirectionNames) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  addLevel(level: Level) {
    this.levels.push(level);
  }
}

class Level {
  private _groups: Group[] = [];
  private _name: Levels;
  private _program: string;

  constructor(name: Levels, program: string) {
    this._name = name;
    this._program = program;
  }

  get name() {
    return this._name;
  }

  get program() {
    return this._program;
  }

  addGroup(group: Group) {
    this._groups.push(group);
  }
}

class Group {
  private _students: Student[] = [];
  private _directionName: DirectionNames;
  private _levelName: Levels;

  get students() {
    return this._students;
  }

  get directionName() {
    return this._directionName;
  }

  get levelName() {
    return this._levelName;
  }

  constructor(directionName: DirectionNames, levelName: Levels) {
    this._directionName = directionName;
    this._levelName = levelName;
  }

  addStudent(student: Student) {
    this._students.push(student);
  }

  showPerformance() {
    const sortedStudents = this.students.sort(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  private _grades: { [key in Subjects]: Grades } = {
    Biology: 0,
    Drawing: 0,
    Geography: 0,
    History: 0,
    Literature: 0,
  };
  private _attendance: Attendance[] = [];
  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName() {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  get age() {
    return new Date().getFullYear() - this._birthYear;
  }

  setGrade(subject: Subjects, grade: Grades) {
    this._grades[subject] = grade;
  }

  markAttendance(present: Attendance) {
    this._attendance.push(present);
  }

  getPerformanceRating() {
    const gradeValues = Object.values(this._grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade =
      gradeValues.reduce((sum: number, grade) => sum + grade, 0) /
      gradeValues.length;

    const attendancePercentage =
      (this._attendance.filter((present) => present === Attendance.present)
        .length /
        this._attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

const vasya = new Student("Вася", "Пупкин", 2000);
const kostya = new Student("Kocтя", "Сидоров", 2000);
const tolik = new Student("Толик", "Иванов", 2000);

vasya.markAttendance(Attendance.absent);
vasya.markAttendance(Attendance.present);
kostya.markAttendance(Attendance.absent);
kostya.markAttendance(Attendance.absent);
tolik.markAttendance(Attendance.present);
tolik.markAttendance(Attendance.present);
vasya.setGrade(Subjects.biology, Grades.four);
vasya.setGrade(Subjects.geography, Grades.four);
tolik.setGrade(Subjects.biology, Grades.five);
tolik.setGrade(Subjects.geography, Grades.five);

const group = new Group(DirectionNames.economic, Levels.first);
group.addStudent(vasya);
group.addStudent(tolik);
group.addStudent(kostya);

console.log(group.showPerformance());
