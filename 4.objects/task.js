function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
};

Student.prototype.addMarks = function(...marksToAdd) {
	if (this.hasOwnProperty("marks")) {
		this.marks = [...this.marks, ...marksToAdd];
	}
};

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty("marks") && this.marks.length > 0) {
		let sumElement = 0;
		let countElement = 0;

		for (let i = 0; i < this.marks.length; i++) {
			sumElement += this.marks[i];
			countElement++;
		}

		let avg = sumElement / countElement;

		return avg;
	} else {
		return 0;
	}
};

Student.prototype.exclude = function(reason) {
	delete this.subjectName;
	delete this.marks;

	this.excluded = reason;
};
