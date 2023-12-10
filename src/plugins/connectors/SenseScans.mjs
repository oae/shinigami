import FoolSlide from './templates/FoolSlide.mjs';

export default class SenseScans extends FoolSlide {

    constructor() {
        super();
        super.id = 'sensescans';
        super.label = 'SenseScans';
        this.tags = [ 'manga', 'high-quality', 'english', 'scanlation' ];
        this.url = 'https://sensescans.com';
        this.links = {
            login: 'https://sensescans.com/index.php?action=login2'
        };
        this.path = '/reader/directory/';
        this.language = 'english';
    }
}