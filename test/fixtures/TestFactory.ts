import { CompositeFactory } from 'pip-services-commons-node';
import { FacadeFactory } from 'pip-services-facade-node';
import { DefaultContainerFactory } from 'pip-services-container-node';

import { AnnouncementsServiceFactory } from 'pip-services-announcements-node';
import { AnnouncementsClientFactory } from 'pip-clients-announcements-node';
import { FeedbacksServiceFactory } from 'pip-services-feedbacks-node';
import { FeedbacksClientFactory } from 'pip-clients-feedbacks-node';

import { SupportFacadeFactory } from '../../src/build/SupportFacadeFactory';
import { TestFacadeFactory } from './TestFacadeFactory';

export class TestFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new FacadeFactory);
        this.add(new SupportFacadeFactory);
        this.add(new TestFacadeFactory);

        this.add(new AnnouncementsServiceFactory);
        this.add(new AnnouncementsClientFactory);
        this.add(new FeedbacksServiceFactory);
        this.add(new FeedbacksClientFactory);
    }

}
