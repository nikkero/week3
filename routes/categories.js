const categoriesRouter = require("express").Router();

const { findAllCategories, createCategory, findCategoryById, updateCategory, sendCategoryUpdated, deleteCategory } = require("../middlewares/categories");
const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryDeleted } = require("../controllers/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", findAllCategories, createCategory, sendCategoryCreated);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put(
    "/categories/:id", // Слушаем запросы по эндпоинту
    findCategoryById, // Шаг 1. Находим игру по id из запроса
    // Шаг 2. Проверки, если нужны
    updateCategory, // Шаг 3. Обновляем запись с игрой
    sendCategoryUpdated // Шаг 4. Возвращаем на клиент ответ с результатом обновления
);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
