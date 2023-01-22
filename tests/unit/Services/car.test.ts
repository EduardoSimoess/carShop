import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Testes relacionados à camada service', function () {
  it('Criando um carro corretamente', async function () {
    const car: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput: Car = new Car({
      id: '63cda65d7a01f8bc01eac03f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.createNewCar(car);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Listando todos os carros', async function () {
    const carArray: ICar[] = [
      {
        id: '63cda65d7a01f8bc01eac03f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '63cdaa307a01f8bc01eac041',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },     
    ];

    sinon.stub(Model, 'find').resolves(carArray);

    const service = new CarService();
    const result = await service.carList();

    expect(result).to.be.deep.equal(carArray);
  });

  it('Se o carro com o id correto é retornado', async function () {
    const carById: ICar = {
      id: '63cda65d7a01f8bc01eac03f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,  
    };

    sinon.stub(Model, 'findById').resolves(carById);

    const service = new CarService();
    const result = await service.carById('63cda65d7a01f8bc01eac03f');

    expect(result).to.be.deep.equal(carById);
  });

  afterEach(function () {
    sinon.restore();
  });
});