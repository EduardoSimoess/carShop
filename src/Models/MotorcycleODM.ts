import {
  Schema,
  model,
  models,
} from 'mongoose';
  
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';
  
class MotorcycleODM extends AbstractODM<IMotorcycle> {  
  constructor() {
    super('cars', new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }));
    this.model = models.cars || model('motorcycles', this.schema);
  }
}
  
export default MotorcycleODM;