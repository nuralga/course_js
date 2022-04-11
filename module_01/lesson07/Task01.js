'use strict';

{
    const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
    const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

    const filter = ([...allStudents], [...failedStudents]) => {
        for (const key in failedStudents) {
            if (allStudents.includes(failedStudents[key])) 
                allStudents.splice(allStudents.indexOf(failedStudents[key]), 1);
        }

        return allStudents;
    }

    console.log(filter(allStudents, failedStudents));
}