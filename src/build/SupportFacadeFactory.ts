import { Factory } from 'pip-services-components-node';
import { Descriptor } from 'pip-services-commons-node';

import { AnnouncementsOperationsV1 } from '../operations/version1/AnnouncementsOperationsV1';
import { FeedbacksOperationsV1 } from '../operations/version1/FeedbacksOperationsV1';

export class SupportFacadeFactory extends Factory {
	public static Descriptor = new Descriptor("pip-facade-support", "factory", "default", "default", "1.0");

	public static AnnouncementsOperationsV1Descriptor = new Descriptor("pip-facade-support", "operations", "announcements", "*", "1.0");
	public static FeedbacksOperationsV1Descriptor = new Descriptor("pip-facade-support", "operations", "feedbacks", "*", "1.0");
	
	public constructor() {
		super();

		this.registerAsType(SupportFacadeFactory.AnnouncementsOperationsV1Descriptor, AnnouncementsOperationsV1);
		this.registerAsType(SupportFacadeFactory.FeedbacksOperationsV1Descriptor, FeedbacksOperationsV1);
	}
	
}
