const imported = require("../../emailAccess.js");

exports.getEmail = async (req, res) => {
  imported.getListEmail(async function(result) {
    const response = await imported.listMessages(result);
    res.send({
      data: response.data.messages
    });
  });
};

exports.getEmailBody = (req, res) => {
  const messageId = req.params._id;
  console.log(req.params._id);
  imported.getListEmail(async function(result) {
    const response = await imported.getSpecificMessage(result, messageId);
    res.send({
      data: {
        id: response.data.id,
        body: response.data.snippet
      }
    });
  });
};
