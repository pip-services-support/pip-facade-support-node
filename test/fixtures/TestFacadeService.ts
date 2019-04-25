import { Descriptor } from 'pip-services3-commons-node';
import { PartitionFacadeService } from 'pip-services3-facade-node';

import { AnnouncementsOperationsV1 } from '../../src/operations/version1/AnnouncementsOperationsV1';
import { FeedbacksOperationsV1 } from '../../src/operations/version1/FeedbacksOperationsV1';

export class TestFacadeService extends PartitionFacadeService {

    public constructor() {
        super();

        this._dependencyResolver.put('announcements', new Descriptor("pip-facade-support", "operations", "announcements", "*", "1.0"));
        this._dependencyResolver.put('feedback', new Descriptor("pip-facade-support", "operations", "feedbacks", "*", "1.0"));
    }

    protected register(): void {
        let announcements = this._dependencyResolver.getOneOptional<AnnouncementsOperationsV1>('announcements');
        if (announcements) {
            this.registerRoute('get', '/announcements', announcements.getAnnouncementsOperation());
            this.registerRoute('get', '/announcements/random', announcements.getRandomAnnouncementOperation());
            this.registerRoute('get', '/announcements/:announcement_id', announcements.getAnnouncementOperation());
            this.registerRoute('post', '/announcements', announcements.createAnnouncementOperation());
            this.registerRoute('put', '/announcements/:announcement_id', announcements.updateAnnouncementOperation());
            this.registerRoute('del', '/announcements/:announcement_id', announcements.deleteAnnouncementOperation());
        }

        let feedbacks = this._dependencyResolver.getOneOptional<FeedbacksOperationsV1>('feedbacks');
        if (feedbacks) {
            this.registerRoute('get', '/feedbacks', feedbacks.getFeedbacksOperation());
            this.registerRoute('get', '/feedbacks/:feedback_id', feedbacks.getFeedbackOperation());
            this.registerRoute('post', '/feedbacks', feedbacks.sendFeedbackOperation());
            this.registerRoute('put', '/feedbacks/:feedback_id', feedbacks.replyFeedbackOperation());
            this.registerRoute('del', '/feedbacks/:feedback_id', feedbacks.deleteFeedbackOperation());
        }
    }

}