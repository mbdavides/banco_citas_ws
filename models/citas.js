const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_clie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_clie",
      autoIncrement: false,
      references: {
        key: "id_clie",
        model: "clientesModel"
      }
    },
    id_usu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_usu",
      autoIncrement: false,
      references: {
        key: "id_usu",
        model: "usuariosModel"
      }
    },
    id_ventanilla: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_ventanilla",
      autoIncrement: false,
      references: {
        key: "id_ventanilla",
        model: "ventanillasModel"
      }
    },
    fec_cita: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "fec_cita",
      autoIncrement: false
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hora",
      autoIncrement: false
    },
    estado: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "estado",
      autoIncrement: false
    },
    fec_reg: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "fec_reg",
      autoIncrement: false
    },
    id_cita: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_cita",
      autoIncrement: true
    }
  };
  const options = {
    tableName: "citas",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };

  const CitasModel = sequelize.define("citasModel", attributes, options);

  CitasModel.associate = function (models) {
    CitasModel.belongsTo(models.clientesModel, {
      foreignKey: 'id_clie'
    });
    CitasModel.belongsTo(models.usuariosModel, {
      foreignKey: 'id_usu'
    });
    CitasModel.belongsTo(models.ventanillasModel, {
      foreignKey: 'id_ventanilla'
    });
  };

  return CitasModel;
};