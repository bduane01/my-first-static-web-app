module.exports = async function (context, req) {
    var crypto = require('crypto')
    const buf = crypto.randomBytes(256)
    const paddedBin = BigInt('0x' + buf.toString('hex')).toString(2).padStart(buf.length * 8, '0')

    context.res.json({
        kilocrumb: paddedBin
    });
    // context.log('JavaScript HTTP trigger function processed a request.');

    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: responseMessage
    // };
}

