const text = "Im Ironman";

test("It should has the word Ironman", () => {
    expect(text).toMatch(/Ironman/);
});

// Ejemplo 2

const fruits = ["manzana", "platano", "fresa"];
test("¿Tenemos mango?", () => {
    expect(fruits).toContain("manzana");
});

//
const x = 10;
const y = 9;
test("mayor que ?", () => {
    expect(x).toBeGreaterThan(y);
});

//
test("Es verdadero ?", () => {
    expect(true).toBeTruthy();
});

//
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""));
};

test("Probar un funcion callback", () => {
    reverseString("hola", (str) => {
        expect(str).toBe("alo");
    });
});

// Clase 5/16
