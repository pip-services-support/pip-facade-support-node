"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_facade_node_1 = require("pip-services3-facade-node");
class FeedbacksOperationsV1 extends pip_services3_facade_node_1.FacadeOperations {
    constructor() {
        super();
        this._dependencyResolver.put('feedbacks', new pip_services3_commons_node_1.Descriptor('pip-services-feedbacks', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._feedbacksClient = this._dependencyResolver.getOneRequired('feedbacks');
    }
    getFeedbacksOperation() {
        return (req, res) => {
            this.getFeedbacks(req, res);
        };
    }
    getFeedbackOperation() {
        return (req, res) => {
            this.getFeedback(req, res);
        };
    }
    sendFeedbackOperation() {
        return (req, res) => {
            this.sendFeedback(req, res);
        };
    }
    replyFeedbackOperation() {
        return (req, res) => {
            this.replyFeedback(req, res);
        };
    }
    deleteFeedbackOperation() {
        return (req, res) => {
            this.deleteFeedback(req, res);
        };
    }
    getFeedbacks(req, res) {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        this._feedbacksClient.getFeedbacks(null, filter, paging, this.sendResult(req, res));
    }
    getFeedback(req, res) {
        let feedbackId = req.route.params.feedback_id;
        this._feedbacksClient.getFeedbackById(null, feedbackId, this.sendResult(req, res));
    }
    sendFeedback(req, res) {
        let feedback = req.body || {};
        let user = req.user;
        this._feedbacksClient.sendFeedback(null, feedback, user, this.sendResult(req, res));
    }
    replyFeedback(req, res) {
        let feedbackId = req.route.params.feedback_id;
        let body = req.body || {};
        let user = req.user;
        let reply = _.isString(body) ? body : '' + body.reply;
        this._feedbacksClient.replyFeedback(null, feedbackId, reply, user, this.sendResult(req, res));
    }
    deleteFeedback(req, res) {
        let feedbackId = req.route.params.feedback_id;
        this._feedbacksClient.deleteFeedbackById(null, feedbackId, this.sendResult(req, res));
    }
}
exports.FeedbacksOperationsV1 = FeedbacksOperationsV1;
//# sourceMappingURL=FeedbacksOperationsV1.js.map