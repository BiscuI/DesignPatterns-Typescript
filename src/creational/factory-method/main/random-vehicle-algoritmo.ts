import { BycicleFactory } from "../factories/bycicle-factory";
import { CarFactory } from "../factories/car-factory";
import { RandomNumber } from "../utils/random-number";
import { Vehicle } from "../vehicle/vehicle";

export function RandomCarAlgorithm(): Vehicle{
    const carFactory = new CarFactory();
    const bikeFactory = new BycicleFactory();
    const carro1 = carFactory.getVehicle("Uninho com escada");
    const carro2 = carFactory.getVehicle("Velocipede");
    const bike1 = bikeFactory.getVehicle("Monark");

    const vehicles = [carro1, carro2, bike1];

    return vehicles[RandomNumber(vehicles.length)];  
}