class BaseController {
  sendResponse(req, res) {
    const status = req.responseStatus || 200;
    const result = req.responseData || {};

    res.status(status).send(result);
  }

  // addLastModified(entity) {
  //   return { ...entity, lastModifiedDate: Date.now() };
  // }

  // castFields(data, fields, castFunction) {
  //   fields.forEach(name => {
  //     if (data.hasOwnProperty(name)) {
  //       data[name] = castFunction(data[name]);
  //     }
  //   });
  // }
}

module.exports = BaseController;
