export default class Blacklist {
    /*
     * https://developer.chrome.com/extensions/match_patterns
     * https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns
     */
    constructor() {
        this.patterns = [
            '*://*.2mdnsys.com/*',
            '*://*.24vunvrv.com/*',
            '*://*.33across.com/*',
            '*://*.360yield.com/*',
            '*://*.addthis.com/*',
            '*://*.addthisedge.com/*',
            '*://*.adf.ly/*',
            '*://*.adform.net/*',
            '*://*.admixer.net/*',
            '*://*.adnxs.com/*',
            '*://*.adriver.ru/*',
            '*://*.adsco.re/*',
            '*://*.adservice.google.com/*',
            '*://*.adskeeper.co.uk/*',
            '*://*.adsrvr.org/*',
            '*://*.adtrue.com/*',
            '*://*.advertising.com/*',
            '*://*.advinci.uno/*',
            '*://*.adxnexus.com/*',
            '*://*.ambient-platform.com/*',
            '*://*.amung.us/*',
            '*://*.apis.google.com/*',
            '*://*.arc.io/*',
            '*://*.audiencerun.com/*',
            '*://*.bebi.com/*',
            '*://*.bidgear.com/*',
            '*://*.bidswitch.net/*',
            '*://*.buysellads.com/*',
            '*://*.cachefly.net/*',
            '*://*.casalemedia.com/*',
            '*://*.chatango.com/*',
            '*://*.class2deal.com/*',
            '*://*.cloudfront.net/alpaca.min.css',
            '*://*.cnzz.com/*',
            '*://*.cobalten.com/*',
            '*://*.connect.facebook.net/*',
            '*://*.connectad.io/*',
            '*://*.consensu.org/*',
            '*://*.contextweb.com/*',
            '*://*.contributor.google.com/*',
            '*://*.cpmstar.com/*',
            '*://*.criteo.net/*',
            '*://*.defpush.com/*',
            '*://*.digitru.st/*',
            '*://*.doubleclick.net/*',
            '*://*.dpypzvjarj.com/*',
            '*://*.dtscout.com/*',
            '*://*.e-v-e-n.me/*',
            '*://*.eehuzaih.com/*',
            '*://*.elasticad.net/*',
            '*://*.eventronbesed.info/*',
            '*://*.evergreensame.com/*',
            '*://*.exosrv.com/*',
            '*://*.fingahvf.top/*',
            '*://*.fqtag.com/*',
            '*://*.fundingchoices.google.com/*',
            '*://*.genieessp.com/*',
            '*://*.genieessp.com/*',
            '*://*.google-analytics.com/*',
            '*://*.google.com/ads/*',
            '*://*.google.com/adsense/*',
            '*://*.googlesyndication.com/*',
            '*://*.googletagmanager.com/*',
            '*://*.googletagservices.com/*',
            '*://*.graveuniversalapologies.com/*',
            '*://*.h12-media.com/*',
            '*://*.histats.com/*',
            '*://*.hotjar.com/*',
            '*://*.hunchmotherhooddefine.com/*',
            '*://*.ie8eamus.com/*',
            '*://*.immunepine.com/*',
            '*://*.imonomy.com/*',
            '*://*.infolinks.com/*',
            '*://*.inter1ads.com/*',
            '*://*.jeconotinhi.info/*',
            '*://*.jigsawthirsty.com/*',
            '*://*.jnyyryjarlwbj.top/*',
            '*://*.jsdelivr.net/gh/vli-platform/adb-analytics*',
            '*://*.juicyads.com/*',
            '*://*.koindut.com/*',
            '*://*.lkqd.net/*',
            '*://*.luckypushh.com/*',
            '*://*.mgid.com/*',
            '*://*.mineralscreamrobes.com/*',
            '*://*.moatads.com/*',
            '*://*.mobtrks.com/*',
            '*://*.muses.org/*',
            '*://*.nakamasweb.com/*',
            '*://*.onclasrv.com/*',
            '*://*.onesignal.com/*',
            '*://*.outbrain.com/*',
            '*://*.outbrainimg.com/*',
            '*://*.overkirliaan.com/*',
            '*://*.passeura.com/*',
            '*://*.pianistrefutationgoose.com/*',
            '*://*.popcash.net/*',
            '*://*.popmonetizer.net/*',
            '*://*.premiumvertising.com/*',
            '*://*.propellerads.com/*',
            '*://*.propellerclick.com/*',
            '*://*.prowlenthusiasticcongest.com/*',
            '*://*.pubmatic.com/*',
            '*://*.pubmine.com/*',
            '*://*.pubpress.net/*',
            '*://*.pvclouds.com/*',
            '*://*.radarconsultation.com/*',
            '*://*.revcontent.com/*',
            '*://*.revrtb.net/*',
            '*://*.rmcxyfqbm.com/*',
            '*://*.runative-syndicate.com/*',
            '*://*.runnersgunpowder.com/*',
            '*://*.sascdn.com/*',
            '*://*.scorecardresearch.com/*',
            '*://*.sharethis.com/*',
            '*://*.sharpconnatechamber.com/*',
            '*://*.shorte.st/*',
            '*://*.sitemaji.com/*',
            '*://*.sweaterwarmly.com/*',
            '*://*.taboola.com/*',
            '*://*.tradeadexchange.com/*',
            '*://*.tynt.com/*',
            '*://*.utmostsecond.com/*',
            '*://*.vdo.ai/*',
            '*://*.veruta.com/*',
            '*://*.vidible.tv/*',
            '*://*.vidoomy.com/*',
            '*://*.w55c.net/*',
            '*://*.womanlimitless.com/*',
            '*://*.yieldbird.com/*',
            '*://*.yimg.com/*',
            '*://*.your-notice.com/*',
            '*://*.zap.buzz/*',
            '*://*.zdaptrksg.com/*',
            '*://*.zeusadx.com/*',
            '*://*.zryydi.com/*',
            //'*://*.accounts.google.com/*',
            //'*://*.cloudfront.net/*',
            //'*://*.discordapp.com/*',
            //'*://*.facebook.com/*',
            //'*://*.facebook.net/*',
            //'*://*.fbcdn.net/*',
            //'*://*.gstatic.com/*',
        ];
    }

    addPattern( pattern ) {
        if( !this.patterns.includes( pattern ) ) {
            this.patterns.push( pattern );
        }
    }
}