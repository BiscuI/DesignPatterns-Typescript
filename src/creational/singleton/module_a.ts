import { MyDataBaseFunction } from './db/my-database-function';

const myDataBaseClassic = MyDataBaseFunction;
myDataBaseClassic.add({nome: 'Pablo', idade: 20});
myDataBaseClassic.add({nome: 'Celina', idade: 24});
myDataBaseClassic.add({nome: 'Emerson', idade: 27});

export {myDataBaseClassic}