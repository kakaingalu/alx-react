import { Map, Seq } from 'immutable';

const printBestStudents = (grades) => {
  const filteredGrades = Seq(grades)
    .filter((student) => student.score >= 70)
    .map((student) => Map(student).update('firstName', (name) => name.charAt(0).toUpperCase() + name.slice(1)))
    .map((student) => student.update('lastName', (name) => name.charAt(0).toUpperCase() + name.slice(1)))
    .toObject();

  console.log(JSON.stringify(filteredGrades, null, 4));
};

export default printBestStudents;
