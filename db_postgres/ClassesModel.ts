import { Model, Optional, DataTypes } from 'sequelize';
import {db} from './db'

interface classesAttributes {
    id: number
    name: string
    health: number
    damage: number
    ability: boolean
    attack_type: string
  }
  
  interface classesCreationAttributes
    extends Optional<classesAttributes, 'id'> {}
  
  interface classesInstance
    extends Model<classesAttributes, classesCreationAttributes>,
      classesAttributes {
        createdAt?: Date;
        updateAt?: Date;
      }
  
  export const Classes = db.define<classesInstance>(
    'classes',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
      },
      name:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      health:{
        type:DataTypes.INTEGER,
        allowNull: false,
      },
      damage:{
        type:DataTypes.INTEGER,
        allowNull: false,
      },
      attack_type:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      ability:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    }
  );
