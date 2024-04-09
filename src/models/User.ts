import { Model, DataTypes  } from 'sequelize';
import { sequelize }from '../db/mysql';

export interface UserInstance extends Model {
    id: number;
    name: string;
    age: number;
}

export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        get(){
            return this.getDataValue('name').toUpperCase();
        }
    },
    firstLetter:{
        type: DataTypes.VIRTUAL,
        get(){
            let letter: string = this.getDataValue('name');
            return letter.charAt(0);
        }
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 0
        // set(value: number){
        //     if(value < 18){
        //         value = 18;
        //     }
        //     this.setDataValue('age', value);
        // }
    },
}, {
    tableName: "usuario",
    timestamps: false
});

