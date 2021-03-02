const { v4 } = require("uuid");
const { hashSync } = require("bcryptjs");
const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        avatar: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        status: DataTypes.ENUM(["PENDING", "ACTIVE"]),
        confirmation_code: DataTypes.STRING,
        is_admin: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        hooks: {
          beforeCreate: (user, options) => {
            const hash = hashSync(user.password, 15);
            user.id = v4();
            user.password = hash;
          },
        },
      }
    );
  }

  //   static associate(models) {
  //     this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  //   }
}

module.exports = User;
