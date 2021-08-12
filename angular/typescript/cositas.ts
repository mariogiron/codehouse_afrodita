let estado: boolean;
estado = true;

let cadena: string = "hola";

let arrNum: number[] = [1, 2, 3, 4];
let arrString: Array<string> = ['Hola', 'Adios'];

let tupla: [string, number] = ['hola', 34];

function sumar(numA: number, numB: number): number {
    return numA + numB;
}

const restar = (numA: number, numB: number): void => {
    document.body.innerText = String(numA + numB);
}


let valor: any = 'cadena';
valor = 5;
valor = true;

