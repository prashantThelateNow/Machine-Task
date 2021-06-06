
module.exports = (sequelize, DataTypes) => {
    const asset = sequelize.define('tbl_asset',{
        assetCategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tbl_tank_category',
                key: 'id'
            },
            validate: {
                isInt: true,
                notNull: true,
            }
        },
        assetTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tbl_tank_type',
                key: 'id'
            },
            validate: {
                isInt: true,
                notNull: true,
            }
        },
        assetNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isInt: true,
                notNull: true,
                max: 30
            }
        },
        manufacturerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isInt: true,
                notNull: true,
                max: 50
            }
        },
        manufacturerSerialNo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isInt: true,
                notNull: true,
                max: 50
            }
        },
        buildYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                notNull: true,
            }
        },
        grossWeight: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                isDecimal: true
            }
        },
        tareWeight: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                isDecimal: true
            }
        },
        netWeight: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                isDecimal: true
            }
        },
        ownershipType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isInt: true,
                notNull: true,
                max: 20
            }
        },
        leaseId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tbl_lease',
                key: 'id'
            },
            validate: {
                isInt: true,
                notNull: false,
            }
        },
        ownershipDate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                isDate: true
            }
        },
        locationId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tbl_location',
                key: 'id'
            },
            validate: {
                isInt: true,
                notNull: false,
            }
        },
        depotId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tbl_depot',
                key: 'id'
            },
            validate: {
                isInt: true,
                notNull: true,
            }
        },
        assetStatusId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tbl_tank_status',
                key: 'id'
            },
            validate: {
                isInt: true,
                notNull: true,
            }
        },
        firstHydroTestDate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                isDate: true
            }
        },
        lastHydroTestDate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                isDate: true
            }
        },
        nextTestDate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                isDate: true
            }
        }
    },
    {
        timestamp: false
    });

    return asset;
}
