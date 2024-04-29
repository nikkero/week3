// Файл middlewares/games.js

// Импортируем модель
const games = require("../models/game");

const findAllGames = async (req, res, next) => {
    // По GET-запросу на эндпоинт /games найдём все документы категорий
    // const result = await games.find({});
    req.gamesArray = await games
        .find({})
        .populate("categories")
        .populate("users");
    //   const result = await games
    //       .find({})
    //       .populate("categories")
    //       .populate("users");
    //   console.log(result);
    // Выведем в терминал результат поиска
    // console.log(result);
    next();
};

// Экспортируем функцию поиска всех игр
module.exports = findAllGames;
