import {User} from '../interfaces/user';
const users : User[] = []

export const MyDataBaseModule = {
    add(user: User){
        users.push(user);
    },

    remove(index: number){
        users.splice(index, 1);
    },

    show(){
        for(const user of users){
            console.log("NOME: " +user.nome);
        }
    }
}