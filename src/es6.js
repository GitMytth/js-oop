"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [firstName = " ", lastName = " "] = fio.split(" ");;
    const resultString = `${lastName} ${firstName}`;
    return resultString;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    const set = new Set(array);
    
    return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if(!array.length) return false;
    let minValue = array.reduce((previousValue, currentValue) => {
        return previousValue < currentValue ? previousValue : currentValue;
    });

    let maxValue = array.reduce((previousValue, currentValue) => {
        return previousValue > currentValue ? previousValue : currentValue;
    });

    return maxValue/minValue;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    
    constructor(){
        this.map = new Map();
    }

    set(key, value){
        if(typeof(key) === 'string' && typeof(value) === 'string') this.map.set(key, value);
        else throw 'Key or value is not a string';
    }

    get(key){
        return this.map.get(key);
    }

    has(key){
        return this.map.has(key);
    }

    delete(key){
        this.map.delete(key);
    }

    clear(){
        this.map.clear();
    }

    size(){
        return this.map.size;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};