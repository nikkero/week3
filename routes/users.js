const usersRouter = require("express").Router();

const { findAllUsers, createUser, findUserById, updateUser, sendUserUpdated, deleteUser } = require("../middlewares/users");
const { sendAllUsers, sendUserCreated, sendUserById, sendUserDeleted } = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put(
    "/users/:id", // Слушаем запросы по эндпоинту
    findUserById, // Шаг 1. Находим игру по id из запроса
    // Шаг 2. Проверки, если нужны
    updateUser, // Шаг 3. Обновляем запись с игрой
    sendUserUpdated // Шаг 4. Возвращаем на клиент ответ с результатом обновления
);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;
