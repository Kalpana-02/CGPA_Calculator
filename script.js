const subjects = [
    "Computer Networks", "Operating System", "DBMS",
    "Engineering Maths - I", "Engineering Maths - II",
    "Cloud Computing", "Web Development",
    "Computer Architecture", "Discrete Maths", "Microprocessor"
];

function generateSubjectFields() {
    const numSubjects = parseInt(document.getElementById('numSubjects').value);
    if (!numSubjects || numSubjects < 1 || numSubjects > 10) {
        alert("Please select a number between 1 and 10");
        return;
    }

    const subjectFields = document.getElementById('subjectFields');
    subjectFields.innerHTML = '';

    for (let i = 0; i < numSubjects; i++) {
        const div = document.createElement('div');
        div.classList.add('course');

        const label = document.createElement('label');
        label.textContent = subjects[i] + ':';
        label.setAttribute('for', `subject${i}`);

        const select = document.createElement('select');
        select.id = `subject${i}`;
        select.name = `subject${i}`;
        select.required = true;

        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "Select Grade";
        select.appendChild(defaultOption);

        for (let j = 1; j <= 5; j++) {
            const option = document.createElement('option');
            option.value = j;
            option.textContent = j;
            select.appendChild(option);
        }

        div.appendChild(label);
        div.appendChild(select);
        subjectFields.appendChild(div);
    }

    document.getElementById('gradesForm').style.display = 'block';
}

function calculateCGPA() {
    const numSubjects = parseInt(document.getElementById('numSubjects').value);
    let totalGrades = 0;
    let validGrades = 0;

    for (let i = 0; i < numSubjects; i++) {
        const grade = parseInt(document.getElementById(`subject${i}`).value);
        if (!isNaN(grade)) {
            totalGrades += grade;
            validGrades++;
        }
    }

    if (validGrades > 0) {
        const averageGrade = totalGrades / validGrades;
        document.getElementById('result').textContent = `Your average grade is: ${averageGrade.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = `Please select valid grades for all subjects.`;
    }
}
