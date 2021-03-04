const { v4 } = require("uuid");
const { Model, DataTypes } = require("sequelize");

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "categories",
        hooks: {
          beforeCreate: (category, options) => {
            category.id = v4();
          },
        },
      }
    );
  }

  //   static associate(models) {
  //     this.belongsTo(models.Category, { foreignKey: "user_id", as: "user" });
  //   }
}

module.exports = Category;
