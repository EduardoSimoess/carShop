import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  public returnMoto(moto: IMotorcycle): Motorcycle {
    return new Motorcycle(moto);
  }

  public async createNewMoto(moto: IMotorcycle) {
    const newMotoODM = new MotorcycleODM();
    const newMoto = await newMotoODM.create(moto);
    return this.returnMoto(newMoto);
  }

  //   public async motoById(id: string) {
  //     const carODM = new CarODM();
  //     const car = await carODM.findById(id);
  //     if (car) {
  //       const { model, year, color, status, buyValue, doorsQty, seatsQty } = car;
  //       const i = { id: car.id, model, year, color, status, buyValue, doorsQty, seatsQty };
  //       return i;
  //     }
  //     return undefined;
  //   }

  //   public async motoList() {
  //     const carODM = new CarODM();
  //     const list = await carODM.findAll();
    
  //     const ajusted = list.map((item) => {
  //       const { model, year, color, status, buyValue, doorsQty, seatsQty } = item;
  //       const i = { id: item.id, model, year, color, status, buyValue, doorsQty, seatsQty };
  //       return i;
  //     });

  //     return ajusted;
  //   }

  //   public async motoUpdated(id: string, carData: IMotorcycle) {
  //     const carODM = new CarODM();
  //     const updated = await carODM.updateById(id, carData);
  //     if (updated.car) {
  //       const { model, year, color, status, buyValue, doorsQty, seatsQty } = updated.car;
  //       const i = { id, model, year, color, status, buyValue, doorsQty, seatsQty };
  //       return { status: 200, car: i };
  //     }

//     return updated;
//   }
}

export default MotorcycleService;