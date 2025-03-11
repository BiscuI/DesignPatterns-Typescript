import { Vehicle } from "../vehicle/vehicle";

export abstract class VehicleFactory{
    //FactoryMethod -> poderia ter um corpo no escopo
    abstract getVehicle(vehicleName: string): Vehicle; 

    //Essa classe creator pode ter lógica implementada
    pickUp(customerName: string, vehicleName: string): Vehicle{
        const car = this.getVehicle(vehicleName);
        car.pickUp(customerName);
        return car;
    }
}