const axios = require("axios");

module.exports = async () => {
    const result = await axios.get("https:\/\/avatars.githubusercontent.com\/u\/97351945?s=200&v=4%22");

return result.data.file;
    ("https:\/\/avatars.githubusercontent.com\/u\/97351945?s=200&v=4%22.jpg");
};