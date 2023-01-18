import { Model, Optional, DataTypes } from 'sequelize';
import {db} from './db'
import {Classes} from "./ClassesModel"
 
interface usersAttributes {
    id: number
    name: string
    email: string
    password: string
    class_id:number
  }
  
  interface usersCreationAttributes
    extends Optional<usersAttributes, 'id'> {}
  
  interface usersInstance
    extends Model<usersAttributes, usersCreationAttributes>,
      usersAttributes {
        createdAt?: Date;
        updateAt?: Date;
      }
  
  export const Users = db.define<usersInstance>(
    'users',
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
      email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      class_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }
  );

  Users.belongsTo(Classes,{
    foreignKey:"class_id",
    as:"classes"
  })