import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

// const invalid = 'Invalid mongo id';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const moto: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    const newMoto = await this.service.createNewMoto(moto);
    return this.res.status(201).json(newMoto);
  }

  //   public async carById() {
  //     const { id } = this.req.params;
    
  //     try {
  //       const car = await this.service.carById(id);
  //       console.log(car);
  //       if (!car) {
  //         return this.res.status(404).json({ message: 'Car not found' });
  //       }
  //       return this.res.status(200).json(car);
  //     } catch (error) {
  //       return this.res.status(422).json({ message: invalid });
  //     }
  //   }

  //   public async carList() {
  //     try {
  //       const list = await this.service.carList();
  //       // console.log(list);    
  //       return this.res.status(200).json(list);
  //     } catch (error) {
  //       return this.res.status(422).json({ message: invalid });
  //     }
  //   }

//   public async updatedCar() {
//     const { id } = this.req.params;
//     try {
//       const newCar = await this.service.carUpdated(id, this.req.body);
//       const { status, message, car } = newCar;
//       if (message) return this.res.status(status).json({ message });
//       return this.res.status(status).json(car);
//     } catch (error) {
//       return this.res.status(422).json({ message: invalid });
//     }
//   }
}

export default MotorcycleController;