let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node'; 
import { DependencyResolver } from 'pip-services3-commons-node';

import { IAnnouncementsClientV1 } from 'pip-clients-announcements-node';
import { AnnouncementV1 } from 'pip-clients-announcements-node';

import { FacadeOperations } from 'pip-services3-facade-node';

export class AnnouncementsOperationsV1  extends FacadeOperations {
    private _announcementsClient: IAnnouncementsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('announcements', new Descriptor('pip-services-announcements', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._announcementsClient = this._dependencyResolver.getOneRequired<IAnnouncementsClientV1>('announcements');
    }

    public getAnnouncementsOperation() {
        return (req, res) => {
            this.getAnnouncements(req, res);
        }
    }

    public getRandomAnnouncementOperation() {
        return (req, res) => {
            this.getRandomAnnouncement(req, res);
        }
    }

    public getAnnouncementOperation() {
        return (req, res) => {
            this.getAnnouncement(req, res);
        }
    }

    public createAnnouncementOperation() {
        return (req, res) => {
            this.createAnnouncement(req, res);
        }
    }

    public updateAnnouncementOperation() {
        return (req, res) => {
            this.updateAnnouncement(req, res);
        }
    }

    public deleteAnnouncementOperation() {
        return (req, res) => {
            this.deleteAnnouncement(req, res);
        }
    }

    private getAnnouncements(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._announcementsClient.getAnnouncements(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    private getRandomAnnouncement(req: any, res: any): void {
        let filter = this.getFilterParams(req);

        this._announcementsClient.getRandomAnnouncement(
            null, filter, this.sendResult(req, res)
        );
    }

    private getAnnouncement(req: any, res: any): void {
        let announcementId = req.route.params.announcement_id;

        this._announcementsClient.getAnnouncementById(
            null, announcementId, this.sendResult(req, res)
        );
    }

    private createAnnouncement(req: any, res: any): void {
        let announcement = req.body || {};

        this._announcementsClient.createAnnouncement(
            null, announcement, this.sendResult(req, res)
        );
    }

    private updateAnnouncement(req: any, res: any): void {
        let announcementId = req.route.params.announcement_id;
        let announcement = req.body || {};
        announcement.id = announcementId;

        this._announcementsClient.updateAnnouncement(
            null, announcement, this.sendResult(req, res)
        );
    }

    private deleteAnnouncement(req: any, res: any): void {
        let announcementId = req.route.params.announcement_id;

        this._announcementsClient.deleteAnnouncementById(
            null, announcementId, this.sendResult(req, res)
        );
    }

}