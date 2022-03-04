/* start */
var grid = GridStack.init({ maxRow:'15', cellHeight:'auto', margin:'0.5vh', draggable:{handle:'.handle'}, resizable:{handles:'s,e,w,se,sw'}, alwaysShowResizeHandle: /Android|iPhone|iPad|Opera Mini/i.test(navigator.userAgent) });
screen.orientation.onchange = function (){ screen.orientation.type.match(/\w+/)=='portrait' ? grid.cellHeight('5vh') : grid.cellHeight('11.5vh') };
screen.orientation.onchange();

/* source */
var channels = ['ABC News','CBS News','NBC News','CNN','Fox News','MSNBC'];
var sources = [
'//content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8',
'//cbsn-us.cbsnstream.cbsnews.com/out/v1/55a8648e8f134e82a470f83d562deeca/master.m3u8',
'//nbcnews2.akamaized.net/hls/live/723426/NBCNewsPlaymaker24x7Linear99a3a827-ua/master.m3u8',
'https://cnnpro.newscdn.org/ih0ABXPvMIG5jeMajaKhNw==,1646405435/1384240915/rewind-48400.m3u8',
'https://1312990316.rsc.cdn77.org/Gc0fPvEFR-QyTydMrC-L2Q==,1646405435/1312990316/rewind-24400.m3u8',
'https://1229472784.rsc.cdn77.org/jRfakEJefoIq-6OKF1vQrA==,1646408235/1229472784/rewind-28000.m3u8'
];

/* build */
$(function() {
 for(let i in channels) {
  grid.addWidget({w:4, h:4, content:'<div class="center handle">'+channels[i]+'</div><video playsinline autoplay muted id="ch0'+i+'"></video>'});
  $('#ch0'+i)[0].setAttribute('controls','controls');
  add(i);
 }
});
 
/* add */
let add = i => {
 if (Hls.isSupported()) { var hls = new Hls(); hls.loadSource(sources[i]); hls.attachMedia($('#ch0'+i)[0]); }
 else { $('#ch0'+i)[0].src = sources[i]; }
}
