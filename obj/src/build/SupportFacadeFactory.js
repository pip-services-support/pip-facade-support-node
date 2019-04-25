"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const AnnouncementsOperationsV1_1 = require("../operations/version1/AnnouncementsOperationsV1");
const FeedbacksOperationsV1_1 = require("../operations/version1/FeedbacksOperationsV1");
class SupportFacadeFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(SupportFacadeFactory.AnnouncementsOperationsV1Descriptor, AnnouncementsOperationsV1_1.AnnouncementsOperationsV1);
        this.registerAsType(SupportFacadeFactory.FeedbacksOperationsV1Descriptor, FeedbacksOperationsV1_1.FeedbacksOperationsV1);
    }
}
SupportFacadeFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("pip-facade-support", "factory", "default", "default", "1.0");
SupportFacadeFactory.AnnouncementsOperationsV1Descriptor = new pip_services3_commons_node_1.Descriptor("pip-facade-support", "operations", "announcements", "*", "1.0");
SupportFacadeFactory.FeedbacksOperationsV1Descriptor = new pip_services3_commons_node_1.Descriptor("pip-facade-support", "operations", "feedbacks", "*", "1.0");
exports.SupportFacadeFactory = SupportFacadeFactory;
//# sourceMappingURL=SupportFacadeFactory.js.map