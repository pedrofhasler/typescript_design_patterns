// A Director Class
import House from './house';
import HouseBuilder from './house-builder';

export default class IglooDirector {
  static construct(): House {
    //Note que nessa classe, omitimos o set_number_of windows
    //porque normalmente igloos não tem janelas
    return new HouseBuilder()
      .setBuildingType('Igloo')
      .setWallMaterial('Ice')
      .setNumberDoors(1)
      .getResult();
  }
}
