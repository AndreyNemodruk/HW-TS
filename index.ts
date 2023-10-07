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

enum Marks {
  one = 1,
  two,
  three,
  four,
  five,
}

type Grade = {
  [key in Subjects]: Marks[];
};

type Visit = {
  [key in Subjects]: Attendance[];
};

type LecturerData = {
  id: string;
  Name: string;
  surname: string;
  position: string;
  company: string;
  experience: string;
  courses: string;
  contacts: string;
};

type AreaData = {
  name: string;
  id: string;
};

type LevelData = {
  id: string;
  name: Levels;
  description: string;
};

type StudentData = {
  id: string;
  firstName: string;
  lastName: string;
  birthYear: number;
};

type GroupData = {
  directionName: DirectionNames;
  levelName: Levels;
  id: string;
};

enum Status {
  active = "active",
  inactive = "inactive",
}

class School {
  // implement 'add area' ++
  // 'remove area' ++
  // 'add lecturer' ++
  // 'remove lecturer' ++
  private _areas: Area[] = [];
  private _lecturers: LecturerData[] = []; // Name, surname, position, company, experience, courses, contacts

  get areas() {
    return this._areas;
  }

  get lecturers() {
    return this._lecturers;
  }

  addArea(area: Area) {
    this._areas.push(area);
  }

  removeArea(id: string) {
    this._areas = [...this._areas].filter((i) => i.id !== id);
  }

  addLecturer(lecturer: LecturerData) {
    this._lecturers.push(lecturer);
  }

  removeLecturer(id: string) {
    this._lecturers = this._lecturers.filter((i) => i.id !== id);
  }
}

class Area {
  // implement getters for fields ++
  // 'add/remove level' methods ++
  private _levels: Level[] = [];
  private _name: string;
  private _id: string;

  constructor({ name, id }: AreaData) {
    this._name = name;
    this._id = id;
  }

  get id() {
    return this._id;
  }
  get levels() {
    return this._levels;
  }
  get name() {
    return this._name;
  }

  addLevel(level: Level) {
    this._levels.push(level);
  }

  removeLevel(id: string) {
    this._levels = this._levels.filter((i) => i.id !== id);
  }
}

class Level {
  // implement getters for fields ++
  // 'add/remove group' methods ++
  private _id: string;
  private _groups: Group[] = [];
  private _name: string;
  private _description: string;

  constructor({ name, description, id }: LevelData) {
    this._name = name;
    this._description = description;
    this._id = id;
  }

  get groups() {
    return this._groups;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get id() {
    return this._id;
  }

  addGroup(group: Group) {
    this._groups.push(group);
  }

  removeGroup(id: string) {
    this._groups = this._groups.filter((i) => i.id !== id);
  }
}

class Group {
  // implement getters for fields ++
  // and 'add/remove student' ++
  // and 'set status' methods ++
  private _directionName: DirectionNames;
  private _levelName: Levels;
  private _id: string;
  private _status: Status = Status.inactive;
  private _students = new StudentsArray(); // Modify the array so that it has a valid toSorted method*

  constructor({ directionName, levelName, id }: GroupData) {
    this._directionName = directionName;
    this._levelName = levelName;
    this._id = id;
  }

  showPerformance() {
    const sortedStudents = this._students.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );
    return sortedStudents;
  }

  get directionName() {
    return this._directionName;
  }
  get levelName() {
    return this._levelName;
  }
  get id() {
    return this._id;
  }

  get status() {
    return this._status;
  }

  get students() {
    return this._students;
  }

  setStatusActive() {
    this._status = Status.active;
  }

  setStatusInActive() {
    this._status = Status.inactive;
  }

  addStudent(student: Student) {
    this._students.push(student);
  }

  removeStudent(id: string) {
    const index = this._students.findIndex((i) => i.id === id);
    if (index !== -1) {
      this._students.splice(index, 1);
    }
  }
}

class Student {
  // implement 'set grade'
  // 'set visit' methods
  private _id: string;
  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: Grade = {
    Biology: [],
    Drawing: [],
    Geography: [],
    History: [],
    Literature: [],
  };
  private _visits: Visit = {
    Biology: [],
    Drawing: [],
    Geography: [],
    History: [],
    Literature: [],
  }; // lesson: present

  constructor({ firstName, lastName, birthYear, id }: StudentData) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
    this._id = id;
  }

  get fullName() {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  get age() {
    return new Date().getFullYear() - this._birthYear;
  }

  get id() {
    return this._id;
  }

  setGrade(subject: Subjects, mark: Marks) {
    this._grades[subject].push(mark);
  }

  setVisits(subject: Subjects, visit: Attendance) {
    this._visits[subject].push(visit);
  }

  getPerformanceRating() {
    const gradeValues = Object.values(this._grades).flat();
    const visitsValues = Object.values(this._visits).flat();

    if (!gradeValues.length) return 0;

    const averageGrade =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage =
      (visitsValues.filter((i) => i === Attendance.present).length /
        visitsValues.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

class StudentsArray extends Array<Student> {
  constructor(...students: Student[]) {
    super();
    this.push(...students);
  }

  public toSorted(callback: (a: Student, b: Student) => number) {
    for (let j = 0; j < this.length; j++) {
      let isSorted = true;
      for (let i = 1; i < this.length - j; i++) {
        if (callback(this[i], this[i - 1]) < 0) {
          [this[i], this[i - 1]] = [this[i - 1], this[i]];
          isSorted = false;
        }
      }
      if (isSorted) break;
    }
    return this;
  }
}

const vasya = new Student({
  firstName: "Вася",
  lastName: "Пупкин",
  birthYear: 2000,
  id: "0",
});
const kostya = new Student({
  firstName: "Kocтя",
  lastName: "Сидоров",
  birthYear: 2000,
  id: "1",
});
const tolik = new Student({
  firstName: "Толик",
  lastName: "Иванов",
  birthYear: 2000,
  id: "2",
});

vasya.setVisits(Subjects.biology, Attendance.absent);
vasya.setVisits(Subjects.drawing, Attendance.present);
kostya.setVisits(Subjects.biology, Attendance.absent);
kostya.setVisits(Subjects.drawing, Attendance.absent);
tolik.setVisits(Subjects.biology, Attendance.present);
tolik.setVisits(Subjects.drawing, Attendance.present);

vasya.setGrade(Subjects.biology, Marks.four);
vasya.setGrade(Subjects.geography, Marks.four);
tolik.setGrade(Subjects.biology, Marks.five);
tolik.setGrade(Subjects.geography, Marks.five);

const group = new Group({
  directionName: DirectionNames.economic,
  levelName: Levels.first,
  id: "11",
});

group.addStudent(vasya);
group.addStudent(tolik);
group.addStudent(kostya);

console.log(group.showPerformance());
