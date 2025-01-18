let students = [
    { name: '张三', age: 18, score: 85 },
    { name: '李四', age: 19, score: 92 },
    { name: '王五', age: 18, score: 78 },
    { name: '赵六', age: 20, score: 90 },
    { name: '孙七', age: 19, score: 88 }
];

function calculateAverageScore(students) {
    let totalScore = 0;
    for (let student of students) {
        totalScore += student.score;
    }
    return totalScore / students.length;
}


function findHighestScoreStudent(students) {
    let highestScoreStudent = students[0];
    for (let student of students) {
        if (student.score > highestScoreStudent.score) {
            highestScoreStudent = student;
        }
    }
    return highestScoreStudent;
}


function sortStudentsByScore(students) {
    return students.sort((a, b) => b.score - a.score);
}
console.log('所有学生的平均成绩为：' + calculateAverageScore(students));
console.log('成绩最高的学生信息：');
console.log(findHighestScoreStudent(students));
console.log('按成绩从高到低排序后的学生信息：');
console.log(sortStudentsByScore(students));