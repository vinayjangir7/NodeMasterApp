var server = require('./lib/server');
var helpers = require('./lib/helpers');
var config = require('./lib/config');

server.init();
let payload = {
    from: 'User <User@' + config.mailGunDomainName + '>',
    to: 'vinayjangir7@gmail.com',
    subject: 'Welcome',
    msg: 'Welcome to my app',
};
/* helpers.sendMailGunEmail(payload, (err) => {
    console.log(err);
}); */

/* helpers.acceptStripePayment((err) => {
    console.log(err);
}); */
