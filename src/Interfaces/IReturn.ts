import ICar from './ICar';

interface IReturn {
  status: number,
  message?: string,
  car?: ICar | null
}
  
export default IReturn;