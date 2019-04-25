import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';

import { TestFactory } from './fixtures/TestFactory';

export class SupportFacadeProcess extends ProcessContainer {

    public constructor() {
        super("Operations", "Client facade Operations microservice");
        this._factories.add(new TestFactory);
    }

}
