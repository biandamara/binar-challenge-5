let users = require("../db/users.json");

// fungsi membaca data user
function getUser(req, res) {
    res.status(200).json(users);
}

// fungsi membaca data user berdasarkan id
function getUserID(req, res) {
    const data = users.find((item) => {
        return item.id == req.params.id;
    });

    // data user tidak ditemukan
    if (!data) {
        res.status(404).json({
            massage: "User Not Found",
        });
    }

    res.status(200).json(data);
}

// eksport ke dalam module
module.exports = {
    getUser,
    getUserID,
};
