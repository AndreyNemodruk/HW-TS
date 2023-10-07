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
var Marks;
(function (Marks) {
    Marks[Marks["one"] = 1] = "one";
    Marks[Marks["two"] = 2] = "two";
    Marks[Marks["three"] = 3] = "three";
    Marks[Marks["four"] = 4] = "four";
    Marks[Marks["five"] = 5] = "five";
})(Marks || (Marks = {}));
var Status;
(function (Status) {
    Status["active"] = "active";
    Status["inactive"] = "inactive";
})(Status || (Status = {}));
class School {
    constructor() {
        // implement 'add area' ++
        // 'remove area' ++
        // 'add lecturer' ++
        // 'remove lecturer' ++
        this._areas = [];
        this._lecturers = []; // Name, surname, position, company, experience, courses, contacts
    }
    get areas() {
        return this._areas;
    }
    get lecturers() {
        return this._lecturers;
    }
    addArea(area) {
        this._areas.push(area);
    }
    removeArea(id) {
        this._areas = [...this._areas].filter((i) => i.id !== id);
    }
    addLecturer(lecturer) {
        this._lecturers.push(lecturer);
    }
    removeLecturer(id) {
        this._lecturers = this._lecturers.filter((i) => i.id !== id);
    }
}
class Area {
    constructor({ name, id }) {
        // implement getters for fields ++
        // 'add/remove level' methods ++
        this._levels = [];
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
    addLevel(level) {
        this._levels.push(level);
    }
    removeLevel(id) {
        this._levels = this._levels.filter((i) => i.id !== id);
    }
}
class Level {
    constructor({ name, description, id }) {
        this._groups = [];
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
    addGroup(group) {
        this._groups.push(group);
    }
    removeGroup(id) {
        this._groups = this._groups.filter((i) => i.id !== id);
    }
}
class Group {
    constructor({ directionName, levelName, id }) {
        this._status = Status.inactive;
        this._students = new StudentsArray(); // Modify the array so that it has a valid toSorted method*
        this._directionName = directionName;
        this._levelName = levelName;
        this._id = id;
    }
    showPerformance() {
        const sortedStudents = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
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
    addStudent(student) {
        this._students.push(student);
    }
    removeStudent(id) {
        const index = this._students.findIndex((i) => i.id === id);
        if (index !== -1) {
            this._students.splice(index, 1);
        }
    }
}
class Student {
    constructor({ firstName, lastName, birthYear, id }) {
        this._grades = {
            Biology: [],
            Drawing: [],
            Geography: [],
            History: [],
            Literature: [],
        };
        this._visits = {
            Biology: [],
            Drawing: [],
            Geography: [],
            History: [],
            Literature: [],
        }; // lesson: present
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
    setGrade(subject, mark) {
        this._grades[subject].push(mark);
    }
    setVisits(subject, visit) {
        this._visits[subject].push(visit);
    }
    getPerformanceRating() {
        const gradeValues = Object.values(this._grades).flat();
        const visitsValues = Object.values(this._visits).flat();
        if (!gradeValues.length)
            return 0;
        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage = (visitsValues.filter((i) => i === Attendance.present).length /
            visitsValues.length) *
            100;
        return (averageGrade + attendancePercentage) / 2;
    }
}
class StudentsArray extends Array {
    constructor(...students) {
        super();
        this.push(...students);
    }
    toSorted(callback) {
        for (let j = 0; j < this.length; j++) {
            let isSorted = true;
            for (let i = 1; i < this.length - j; i++) {
                if (callback(this[i], this[i - 1]) < 0) {
                    [this[i], this[i - 1]] = [this[i - 1], this[i]];
                    isSorted = false;
                }
            }
            if (isSorted)
                break;
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
