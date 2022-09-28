import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class countries extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    country_id: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    country_name: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'regions',
        key: 'region_id'
      }
    }
  }, {
    sequelize,
    tableName: 'countries',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "countries_pkey",
        unique: true,
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
  }
}
