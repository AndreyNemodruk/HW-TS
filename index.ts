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

type LecturersType = {
  id: string;
  Name: string;
  surname: string;
  position: string;
  company: string;
  experience: string;
  courses: string;
  contacts: string;
};

type AreasType = {
  id: string;
};

class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  _areas: AreasType[] = [];
  _lecturers: LecturersType[] = []; // Name, surname, position, company, experience, courses, contacts

  get areas() {
    return this._areas;
  }

  get lecturers() {
    return this._lecturers;
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  _levels: Levels[] = [];
  _name: string;

  constructor(name: string) {
    this._name = name;
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  _groups;
  _name;

  constructor(name, description) {
    this.name = name;
    this._description = description;
  }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  _area;
  _status;
  _students = []; // Modify the array so that it has a valid toSorted method*

  constructor(directionName, levelName) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  showPerformance() {
    const sortedStudents = this._students.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );
    return sortedStudents;
  }
}

class Student {
  // implement 'set grade' and 'set visit' methods

  _firstName;
  _lastName;
  _birthYear;
  _grades = []; // workName: mark
  _visits = []; // lesson: present

  constructor(firstName, lastName, birthYear) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
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

  getPerformanceRating() {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage =
      (this._visits.filter((present) => present).length / this._visits.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
