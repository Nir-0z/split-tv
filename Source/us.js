fetch('https://api.allorigins.win/get?url=http://www.watchnews.pro/fox-news.html')
.then( (response) => response.text() )
.then( (text) => source['FoxNews'].link="https://1312990316.rsc.cdn77.org/"+text.match('cdn77.org\/([^#]{35})')[1]+"/1312990316/rewind-24400.m3u8" );

var source = {

 /* Networks */
  ABC: [{name:'ABC (East)', link:'//5e6cea03e25b6.streamlock.net/live/WTXLHD.stream/playlist.m3u8'}],
  CBS: [{name:'NBC (East)', link:'//5e6cea03e25b6.streamlock.net/live/WCTVDT.stream/playlist.m3u8'}],
  NBC: [{name:'CBS (East)', link:'//5e6cea03e25b6.streamlock.net/live/WTWC-NB.stream/playlist.m3u8'}],
  FOX: [{name:'FOX (East)', link:'//5e6cea03e25b6.streamlock.net/live/WTWC-FX.stream/playlist.m3u8'}],
  CW: [{name:'CW (East)', link:'//5e6cea03e25b6.streamlock.net/live/WTLHCW.stream/playlist.m3u8'}],
  PBS: [{name:'PBS (East)', link:'//status.tehw00t.net/miniProxy.php/https://wnetdt.lls.pbs.org/out/v1/0456457548354b88b32fc437e4e7ee01/index.m3u8'}],

 /* News */
  ABCNews: [{name:'ABC News', link:'//content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8'}],
  CBSNews: [{name:'CBS News', link:'//cbsn-us.cbsnstream.cbsnews.com/out/v1/55a8648e8f134e82a470f83d562deeca/master.m3u8'}],
  NBCNews: [{name:'NBC News', link:'//nbcnews2.akamaized.net/hls/live/723426/NBCNewsPlaymaker24x7Linear99a3a827-ua/master.m3u8'}],
  CNN: [{name:'CNN', link:'//cnnpro.newscdn.org/NF54vHKmvXlMhQ5xw4QqQQ==,1646612404/1384240915/rewind-48400.m3u8'}],
  FoxNews: [{name:'Fox News', link:'//1312990316.rsc.cdn77.org/m39AwZqPrWmNsyHKkqbiWg==,1646612404/1312990316/rewind-24400.m3u8'}],
  MSNBC: [{name:'MSNBC', link:'//1229472784.rsc.cdn77.org/FrqFUvV90YPCJQbjM6Jueg==,1646615203/1229472784/rewind-28000.m3u8'}],

 /* Cable */
  HLN: [{name:'HLN', link:'//turnerlive.warnermediacdn.com/hls/live/586496/cnngo/hln/VIDEO_0_3564000.m3u8'}],
  NewsNation: [{name:'News Nation', link:'//dcs-live.mp.lura.live/server/play/p0d3eNBh3XOxUQP7/manifest.m3u8'}],
  Newsmax: [{name:'Newsmax', link:'//newsmax-samsungus.amagi.tv/playlist.m3u8'}],
  OANN: [{name:'OANN', link:'//oneamericanews-roku-us.amagi.tv/playlist.m3u8'}],
  LiveNow: [{name:'Live Now', link:'//fox-foxnewsnow-samsungus.amagi.tv/playlist.m3u8'}],
  Cheddar: [{name:'Cheddar', link:'//live.chdrstatic.com/cbn/index.m3u8'}],

 /* Politics */
  CSPAN1: [{name:'C-SPAN 1', link:'//trn03.tulix.tv/teleup-cspan/playlist.m3u8'}],
  CSPAN2: [{name:'C-SPAN 2', link:'//skystreams-lh.akamaihd.net/i/SkyC2_1@500807/master.m3u8'}],
  CSPAN3: [{name:'C-SPAN 3', link:'//skystreams-lh.akamaihd.net/i/SkyC3_1@500808/master.m3u8'}],

 /* Business */
  CNBC: [{name:'CNBC', link:'//'}],
  FoxBusiness: [{name:'Fox Business', link:'//'}],
  Bloomberg: [{name:'Bloomberg', link:'//bloomberg-bloomberg-1-pt.samsung.wurl.com/manifest/playlist.m3u8'}],

 /* Weather */
  WeatherChannel: [{name:'Weather Channel', link:'//'}],
  AccuWeather: [{name:'Accu Weather', link:'//cdn-ue1-prod.tsv2.amagi.tv/linear/amg00684-accuweather-accuweather-plex/playlist.m3u8'}],
  FoxWeather: [{name:'Fox Weather', link:'//247wlive.foxweather.com/stream/index.m3u8'}],
 
};
