"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_facade_node_1 = require("pip-services3-facade-node");
class AnnouncementsOperationsV1 extends pip_services3_facade_node_1.FacadeOperations {
    constructor() {
        super();
        this._dependencyResolver.put('announcements', new pip_services3_commons_node_1.Descriptor('pip-services-announcements', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._announcementsClient = this._dependencyResolver.getOneRequired('announcements');
    }
    getAnnouncementsOperation() {
        return (req, res) => {
            this.getAnnouncements(req, res);
        };
    }
    getRandomAnnouncementOperation() {
        return (req, res) => {
            this.getRandomAnnouncement(req, res);
        };
    }
    getAnnouncementOperation() {
        return (req, res) => {
            this.getAnnouncement(req, res);
        };
    }
    createAnnouncementOperation() {
        return (req, res) => {
            this.createAnnouncement(req, res);
        };
    }
    updateAnnouncementOperation() {
        return (req, res) => {
            this.updateAnnouncement(req, res);
        };
    }
    deleteAnnouncementOperation() {
        return (req, res) => {
            this.deleteAnnouncement(req, res);
        };
    }
    getAnnouncements(req, res) {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        this._announcementsClient.getAnnouncements(null, filter, paging, this.sendResult(req, res));
    }
    getRandomAnnouncement(req, res) {
        let filter = this.getFilterParams(req);
        this._announcementsClient.getRandomAnnouncement(null, filter, this.sendResult(req, res));
    }
    getAnnouncement(req, res) {
        let announcementId = req.route.params.announcement_id;
        this._announcementsClient.getAnnouncementById(null, announcementId, this.sendResult(req, res));
    }
    createAnnouncement(req, res) {
        let announcement = req.body || {};
        this._announcementsClient.createAnnouncement(null, announcement, this.sendResult(req, res));
    }
    updateAnnouncement(req, res) {
        let announcementId = req.route.params.announcement_id;
        let announcement = req.body || {};
        announcement.id = announcementId;
        this._announcementsClient.updateAnnouncement(null, announcement, this.sendResult(req, res));
    }
    deleteAnnouncement(req, res) {
        let announcementId = req.route.params.announcement_id;
        this._announcementsClient.deleteAnnouncementById(null, announcementId, this.sendResult(req, res));
    }
}
exports.AnnouncementsOperationsV1 = AnnouncementsOperationsV1;
//# sourceMappingURL=AnnouncementsOperationsV1.js.map