const allowedCors = [
    "https://pindiegg.nomoredomainswork.ru",
    "https://pindieapi.nomoredomainswork.ru",
    "http://localhost:3000",
    "http://localhost:3001",
    "https://158.160.171.248",
];

function cors(req, res, next) {
    const { origin } = req.headers;

    if (allowedCors.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
    }
    res.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
    );
    next();
}

module.exports = { cors }; 

