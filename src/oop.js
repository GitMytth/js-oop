/**
 * Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
 * Если координаты не переданы - 0,0; Аналогично если только 1 координата.
 * Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
 */
class Point {

    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }

    distance(){
        return Math.sqrt((this.x)**2 + (this.y)**2);
    }
}

/**
 * Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
 * который будет наследоваться от точки в двумерном пространстве.
 * Реализовать статический метод, который возвращает расстояние между Point3D.
 */
class Point3D extends Point {

    constructor(x, y, z = 0){
        super(x, y);
        this.z = z;
    }

    static vectorLength(a, b) {
        return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2 + (a.z - b.z)**2);
    }
}

/**
 * Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала.
 * Предусмотреть 2 варианта инициализации - массивом в конструкторе (из него создается очередь) и без параметров.
 * Со звездочкой: написать тесты методы класса (oop.spec.js)
 */
class Queue {
    
    constructor(array){
        if(Array.isArray(array) && array.length) this.items = Array.from(array);
        else this.items = new Array();
    }

    pushBack(item){
        this.items.push(item);
    }

    getFront(){
        if(!this.length) throw "Queue is empty";

        return this.items.shift();
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
