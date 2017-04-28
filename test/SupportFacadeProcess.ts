import { IReferences } from 'pip-services-commons-node';
import { ProcessContainer } from 'pip-services-container-node';

import { TestFactory } from './fixtures/TestFactory';

export class SupportFacadeProcess extends ProcessContainer {

    public constructor() {
        super("Operations", "Client facade Operations microservice");
        this._factories.add(new TestFactory);
    }

}
