module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
        comment: "이메일",
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "유저 이름",
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "비밀번호",
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
      tableName: "tb_user",
    }
  );
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
  };
  return User;
};
