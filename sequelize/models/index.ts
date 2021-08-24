import User from "./User";


export {
  User
}

export default function (callback: Function) {

  /* User Relation */
  /* User.hasMany(Group, {
    foreignKey: 'user_id',
    as: 'groups'
  }); */

  console.log('Sequelize Relation initalize!');
  callback();
}