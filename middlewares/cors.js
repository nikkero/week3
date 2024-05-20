function cors(req, res, next) {
    const { origin } = req.headers;
    if (allowedCorsOrigin.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    }

    next();
}
const allowedCorsOrigin = [
    "https://practicum.yandex.ru",
    "https://students-projects.ru",
    "http://localhost:3000",
];

module.exports = { cors };
