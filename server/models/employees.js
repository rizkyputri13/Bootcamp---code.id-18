import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class employees extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    employee_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    hire_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    job_id: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'jobs',
        key: 'job_id'
      }
    },
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    commission_pct: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'employee_id'
      }
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departments',
        key: 'department_id'
      }
    },
    xemp_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employees',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "employees_pkey",
        unique: true,
        fields: [
          { name: "employee_id" },
        ]
      },
    ]
  });
  }
}
