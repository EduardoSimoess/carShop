import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';

import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.cars || model('cars', this.schema);
  }
  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findById(id: string): Promise<ICar | null> {
    const car = await this.model.findById(id);
    // if (!car) {
    //   throw new Error('Car not found');
    // }
    return car;
  }

  public async findAll(): Promise<ICar[]> {
    const list = await this.model.find();
    // console.log(list);
    return list;
  }
}

export default CarODM;