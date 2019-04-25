import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
export declare class AnnouncementsOperationsV1 extends FacadeOperations {
    private _announcementsClient;
    constructor();
    setReferences(references: IReferences): void;
    getAnnouncementsOperation(): (req: any, res: any) => void;
    getRandomAnnouncementOperation(): (req: any, res: any) => void;
    getAnnouncementOperation(): (req: any, res: any) => void;
    createAnnouncementOperation(): (req: any, res: any) => void;
    updateAnnouncementOperation(): (req: any, res: any) => void;
    deleteAnnouncementOperation(): (req: any, res: any) => void;
    private getAnnouncements;
    private getRandomAnnouncement;
    private getAnnouncement;
    private createAnnouncement;
    private updateAnnouncement;
    private deleteAnnouncement;
}
