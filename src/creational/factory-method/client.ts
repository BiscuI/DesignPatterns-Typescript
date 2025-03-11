import { CarFactory } from "./factories/car-factory";
import { Bycicle } from "./vehicle/bycicle";
import { Car } from "./vehicle/car";

//Normalmente, instanciariamos com new, como no exemplo abaixo
console.log("ABORDAGEM PADRÃO")
const fusca = new Car('fusca');
const monark = new Bycicle('monark');
fusca.pickUp('Luis');
monark.pickUp('Maria');

//Porém, essa abordagem pode dificultar a manutençao em aplicações grandes;
//Qualquer alteração na classe acarretaria em erros em todas as intanciações ao longo do sistema

console.log("ABORDAGEM COM FACTORY")
const factory = new CarFactory();
const celta = factory.getVehicle('Celta');
celta.stop();