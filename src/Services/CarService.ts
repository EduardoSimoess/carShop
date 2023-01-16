import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
// import IReturn from '../Interfaces/IReturn';

class CarService {
  public returnCar(car: ICar): Car {
    return new Car(car);
  }

  public async createNewCar(car: ICar) {
    const newCarODM = new CarODM();
    const newCar = await newCarODM.create(car);
    return this.returnCar(newCar);
  }

  public async carById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    if (car) {
      const { model, year, color, status, buyValue, doorsQty, seatsQty } = car;
      const i = { id: car.id, model, year, color, status, buyValue, doorsQty, seatsQty };
      console.log(i);
      return i;
    }
    return undefined;
  }

  public async carList() {
    const carODM = new CarODM();
    const list = await carODM.findAll();
    // console.log(list);
    
    const ajusted = list.map((item) => {
      const { model, year, color, status, buyValue, doorsQty, seatsQty } = item;
      const i = { id: item.id, model, year, color, status, buyValue, doorsQty, seatsQty };
      return i;
    });

    return ajusted;
  }
}

export default CarService;