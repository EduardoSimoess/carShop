import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
// import IReturn from '../Interfaces/IReturn';
import CarODM from '../Models/CarODM';

class CarService {
  public returnCar(car: ICar): Car {
    return new Car(car);
  }

  public async createNewCar(car: ICar) {
    const newCarODM = new CarODM();
    const newCar = await newCarODM.create(car);
    console.log(newCar);
    return newCar;
  }
}

export default CarService;