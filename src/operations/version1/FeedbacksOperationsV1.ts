let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node'; 
import { DependencyResolver } from 'pip-services-commons-node';

import { IFeedbacksClientV1 } from 'pip-clients-feedbacks-node';
import { FeedbackV1 } from 'pip-clients-feedbacks-node';

import { FacadeOperations } from 'pip-services-facade-node';

export class FeedbacksOperationsV1  extends FacadeOperations {
    private _feedbacksClient: IFeedbacksClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('feedbacks', new Descriptor('pip-services-feedbacks', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._feedbacksClient = this._dependencyResolver.getOneRequired<IFeedbacksClientV1>('feedbacks');
    }

    public getFeedbacksOperation() {
        return (req, res) => {
            this.getFeedbacks(req, res);
        }
    }

    public getFeedbackOperation() {
        return (req, res) => {
            this.getFeedback(req, res);
        }
    }

    public sendFeedbackOperation() {
        return (req, res) => {
            this.sendFeedback(req, res);
        }
    }

    public replyFeedbackOperation() {
        return (req, res) => {
            this.replyFeedback(req, res);
        }
    }

    public deleteFeedbackOperation() {
        return (req, res) => {
            this.deleteFeedback(req, res);
        }
    }

    private getFeedbacks(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._feedbacksClient.getFeedbacks(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    private getFeedback(req: any, res: any): void {
        let feedbackId = req.route.params.feedback_id;

        this._feedbacksClient.getFeedbackById(
            null, feedbackId, this.sendResult(req, res)
        );
    }

    private sendFeedback(req: any, res: any): void {
        let feedback = req.body || {};
        let user = req.user;

        this._feedbacksClient.sendFeedback(
            null, feedback, user, this.sendResult(req, res)
        );
    }

    private replyFeedback(req: any, res: any): void {
        let feedbackId = req.route.params.feedback_id;
        let reply = req.body || {};
        let user = req.user;
        let response = reply.response ? reply.response : reply.toString();

        this._feedbacksClient.replyFeedback(
            null, feedbackId, reply, user , this.sendResult(req, response)
        );
    }

    private deleteFeedback(req: any, res: any): void {
        let feedbackId = req.route.params.feedback_id;

        this._feedbacksClient.deleteFeedbackById(
            null, feedbackId, this.sendResult(req, res)
        );
    }

}
