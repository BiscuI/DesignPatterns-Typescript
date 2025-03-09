import { MyDataBaseFunction } from "./db/my-database-function";
import {myDataBaseClassic as dbFromModuleA, myDataBaseClassic} from './module_a'

const db1 = MyDataBaseFunction;
db1.add({nome: 'Paulo', idade: 20});
db1.add({nome: 'Tereza', idade: 24});
db1.add({nome: 'Thales', idade: 27});
db1.show();

console.log(myDataBaseClassic === MyDataBaseFunction);