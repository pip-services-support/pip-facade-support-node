let SupportFacadeProcess = require('../obj/test/SupportFacadeProcess').SupportFacadeProcess;

try {
    new SupportFacadeProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}
