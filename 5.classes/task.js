class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(state) {
		if (state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		} else {
			this._state = state;
		}
	}

	get state() {
		return this._state;
	}
}

const sherlock = new PrintEditionItem(
	"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
	2019,
	1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state, type)
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state, type)
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state, type)
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state, type)
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state, type)
		this.type = 'detective';
	}
}

const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
		  if (this.books[i].name === bookName) {
			return this.books.splice(i, 1)[0];
		  }
		}
		return null;
	}
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);
library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);

class Student {
	constructor(name, marks) {
		this.name = name,
			this.marks = {}
	}

	addMark(mark, subject) {
		if (Number.parseFloat(mark) < 2 || Number.parseFloat(mark) > 5) {
			return this.marks;
		}

		if (!this.marks.hasOwnProperty(subject)) {
			this.marks[subject] = [];
		}

		this.marks[subject].push(mark);

		return this.marks;
	}

	getAverageBySubject(subject) {
		if (!this.marks.hasOwnProperty(subject)) {
			return 0;
		}

		let sum = this.marks[subject].reduce((sum, current) => sum + current, 0);

		return sum / this.marks[subject].length
	}

	getAverage() {
		let subjects = Object.keys(this.marks)
		let sum = 0;

		if (subjects.length === 0) {
			return 0
		}

		for (let i = 0; i < subjects.length; i++) {
			sum += this.getAverageBySubject(subjects[i]);
		}

		return sum / subjects.length;
	}
}