const name = 'Nicolas',
	age = 24,
	gender = 'male';

const sayHi = (name: string, age: number, gender: string): string =>
	`Hello ${name}, you are ${age}, you are a ${gender}!`;

sayHi('Nicolas', 24, 'male');

export {};
