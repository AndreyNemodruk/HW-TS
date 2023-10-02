"use strict";
var DirectionNames;
(function (DirectionNames) {
    DirectionNames["humanitarian"] = "humanitarian";
    DirectionNames["linguistic"] = "linguistic";
    DirectionNames["economic"] = "economic";
})(DirectionNames || (DirectionNames = {}));
var Levels;
(function (Levels) {
    Levels["first"] = "first";
    Levels["second"] = "second";
    Levels["third"] = "third";
    Levels["fourth"] = "fourth";
    Levels["fifth"] = "fifth";
})(Levels || (Levels = {}));
var Attendance;
(function (Attendance) {
    Attendance["present"] = "present";
    Attendance["absent"] = "absent";
})(Attendance || (Attendance = {}));
var Subjects;
(function (Subjects) {
    Subjects["biology"] = "Biology";
    Subjects["drawing"] = "Drawing";
    Subjects["geography"] = "Geography";
    Subjects["history"] = "History";
    Subjects["literature"] = "Literature";
})(Subjects || (Subjects = {}));
var Grades;
(function (Grades) {
    Grades[Grades["one"] = 1] = "one";
    Grades[Grades["two"] = 2] = "two";
    Grades[Grades["three"] = 3] = "three";
    Grades[Grades["four"] = 4] = "four";
    Grades[Grades["five"] = 5] = "five";
})(Grades || (Grades = {}));
class School {
    constructor() {
        this._directions = [];
    }
    addDirection(direction) {
        this._directions.push(direction);
    }
    get directions() {
        return this._directions;
    }
}
class Direction {
    constructor(name) {
        this.levels = [];
        this._name = name;
    }
    get name() {
        return this._name;
    }
    addLevel(level) {
        this.levels.push(level);
    }
}
class Level {
    constructor(name, program) {
        this._groups = [];
        this._name = name;
        this._program = program;
    }
    get name() {
        return this._name;
    }
    get program() {
        return this._program;
    }
    addGroup(group) {
        this._groups.push(group);
    }
}
class Group {
    get students() {
        return this._students;
    }
    get directionName() {
        return this._directionName;
    }
    get levelName() {
        return this._levelName;
    }
    constructor(directionName, levelName) {
        this._students = [];
        this._directionName = directionName;
        this._levelName = levelName;
    }
    addStudent(student) {
        this._students.push(student);
    }
    showPerformance() {
        const sortedStudents = this.students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }
}
class Student {
    constructor(firstName, lastName, birthYear) {
        this._grades = {
            Biology: 0,
            Drawing: 0,
            Geography: 0,
            History: 0,
            Literature: 0,
        };
        this._attendance = [];
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
    setGrade(subject, grade) {
        this._grades[subject] = grade;
    }
    markAttendance(present) {
        this._attendance.push(present);
    }
    getPerformanceRating() {
        const gradeValues = Object.values(this._grades);
        if (gradeValues.length === 0)
            return 0;
        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) /
            gradeValues.length;
        const attendancePercentage = (this._attendance.filter((present) => present === Attendance.present)
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
const level = new Level(Levels.first, "program");
level.addGroup(group);
const direction = new Direction(DirectionNames.economic);
direction.addLevel(level);
const school = new School();
school.addDirection(direction);
console.log(group.showPerformance());
