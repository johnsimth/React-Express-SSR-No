module.exports = (sequelize, DataTypes) => {
  const uploadData = sequelize.define(
    'uploadData',
    {
      filename: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {},
  );
  return uploadData;
};
