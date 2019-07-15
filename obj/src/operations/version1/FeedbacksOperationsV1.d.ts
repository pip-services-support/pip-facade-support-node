import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
export declare class FeedbacksOperationsV1 extends FacadeOperations {
    private _feedbacksClient;
    constructor();
    setReferences(references: IReferences): void;
    getFeedbacksOperation(): (req: any, res: any) => void;
    getFeedbackOperation(): (req: any, res: any) => void;
    sendFeedbackOperation(): (req: any, res: any) => void;
    replyFeedbackOperation(): (req: any, res: any) => void;
    deleteFeedbackOperation(): (req: any, res: any) => void;
    private getFeedbacks(req, res);
    private getFeedback(req, res);
    private sendFeedback(req, res);
    private replyFeedback(req, res);
    private deleteFeedback(req, res);
}
