$(function() {$('html > head').prepend("<link id='common' rel='stylesheet' href='css/common.css'>" ) })
function create_basemaps(data) {/* To be added to the map constructor - e.g. var map = new Map("mapDiv", { basemap: create_basemaps() });Remove remnants of old basemap js/html/css code beforehand.
- If you pass this function nothing, the default action is a toggle between plain & satellite that will appear in the top right hand corner of the map.
- You can customise the basemap toggle quite finely, by passing it in a json object: {}, with the values you want to customise in it.
THE INPUT VARIABLE IS A JSON OBJECT, WHICH CAN CONTAIN THE FOLLOWING PROPERTIES:
	-	types: array, contains the names of the  basemaps you wish to allow.  Look at the self.types object below to see a complete list, or pass in ["*"] here to display all the basemaps on the map. The first basemap in the array will show by default.
	-	width: integer, change the width of the toggle box
	-	height: integer, change the height of the toggle box
	-	css: object, any other css you want to apply can be done so here. e.g. {top: '95px', right: '20px'}
	- 	customise_types: object, this is to alter the defaults in self.types below. e.g. To change the title of one of the basemaps, so the label reads differently, you can pass in, e.g: { watercolour: { text: "For Kids" } }
EXAMPLE: create_basemaps({types: ["*"],	width: 80,	css: {top: '95px', right:'30px'},	customise_types: {	watercolour: {text: "For Kids"}			}		})
- Any extra CSS <style> you put on the map page will override any positioning values placed here, for the sake of flexibility with css media queries	
bingMapsKey: 'As9QBiGS-vF01SV8wkYBT4RCYnlJsL4dTOaqn2MvGtteGZhtRnDCVMqhdNMBrz79'
mapbox access_token=pk.eyJ1IjoiYmVhdHNraW4iLCJhIjoiY2lwaTl1cng4MDFmMHU5bmp0ZmNocWg5YSJ9.iikVk6d67QOH9PD8QhZFww 	szOrdTheirKey='4vmpYY1uFdimsAkyGwuaFbbHEyfvA5Gy'
szOrdMyKey='2F6DEC09B8A65C07E0530B6CA40AD1A2';
	*/
var szAccess_token='access_token=pk.eyJ1IjoiemF3cyIsImEiOiJlaTNsUkZzIn0.bd_V0kPfj211OARXqIgOpA', szBingMapsKey='Au-BsmTdtDXpl2ODlgl9oSxI-IAJ8iYPWgrHTvU_E1wQYyJoo98PDk45M3kZ0oQM',szOrdMyKey='2F6DEC09B8A65C07E0530B6CA40AD1A2',szOrdTheirKey='4vmpYY1uFdimsAkyGwuaFbbHEyfvA5Gy';var ordnance_type;szOrdMyKey=szOrdTheirKey;
let szG=[];szG['moburl']=[];szG['moblid']=szG['moburl']
// let szG=[];szG['moburl']=['txt_url_satellite','txt_id_satellite', 'txt_url_plain','txt_idm_plain','plain_os', 'os_night','watercolour','monochrome','colour','buildings'];szG['moblid']=szG['moburl']
szG['moburl']['txt_url_satellite']='http://api.mapbox.com/v4/mapbox.streets-satellite/${level}/${col}/${row}@2x.png?'+szAccess_token; 
szG['moblid']['txt_id_satellite']={id: 'mapBox', copyright: "<a href='https://www.mapbox.com/about/maps/'>&copy; Mapbox</a>, <a href='http://www.openstreetmap.org/about/'>&copy; OpenStreetMap</a>, <a href='https://www.mapbox.com/map-feedback/#/-74.5/40/10'>Improve the Basemap</a>." } 

ordnance_type = 'Light' //Outdoor, Road, Night, Light
szG['moburl']['txt_url_plain']    ='https://api.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/' + ordnance_type + '%203857/{level}/{col}/{row}.png?key='+szOrdMyKey; 
szG['moblid']['txt_idm_plain']    ={copyright: 'Contains OS data &copy; Crown copyright and database right (2016)' } 
szG['moburl']['mob_url_plain']    ='https://cartodb-basemaps-{subDomain}.global.ssl.fastly.net/light_all/{level}/{col}/{row}@2x.png'; 
szG['moblid']['mob_idm_plain']    ={ subDomains: ['a', 'b', 'c', 'd'], copyright: '<a href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap</a> contributors <a href="https://cartodb.com/attributions">&copy; CartoDB</a>, CartoDB <a href="https://cartodb.com/attributions">attribution</a>' } 

ordnance_type = 'Light' //Outdoor, Road, Night, Light
szG['moburl']['txt_url_plain_os']    ='https://api.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/' + ordnance_type + '%203857/{level}/{col}/{row}.png?key='+szOrdMyKey 
szG['moblid']['txt_idm_plain_os']    ={copyright: 'Contains OS data &copy; Crown copyright and database right (2016)' }
szG['moburl']['mob_url_plain_os']    ='unused'; 
szG['moblid']['mob_idm_plain_os']    ='unused'; 

ordnance_type = 'Light' //Outdoor, Road, Night, Light
szG['moburl']['txt_url_os_night']    ='https://api.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/' + ordnance_type + '%203857/{level}/{col}/{row}.png?key='+szOrdMyKey 
szG['moblid']['txt_idm_os_night']    ={copyright: 'Contains OS data &copy; Crown copyright and database right (2016)' }
szG['moburl']['mob_url_os_night']    ='unused'; 
szG['moblid']['mob_idm_os_night']    ='unused'; 

ordnance_type = 'Light' //Outdoor, Road, Night, Light
szG['moburl']['txt_url_watercolour']    ='https://stamen-tiles-{subDomain}.a.ssl.fastly.net/watercolor/{level}/{col}/{row}.jpg' 
szG['moblid']['txt_idm_watercolour']    ={subDomains: ['a', 'b', 'c', 'd'], copyright: 'Leaflet' }
szG['moburl']['mob_url_watercolour']    ='unused'; 
szG['moblid']['mob_idm_watercolour']    ='unused'; 

ordnance_type = 'Light' //Outdoor, Road, Night, Light
szG['moburl']['txt_url_monochrome']    ='https://stamen-tiles-{subDomain}.a.ssl.fastly.net/toner-lite/{level}/{col}/{row}.png' 
szG['moblid']['txt_idm_monochrome']    ={subDomains: ['a', 'b', 'c', 'd'],  copyright: 'Leaflet' }
szG['moburl']['mob_url_monochrome']    ='unused'; 
szG['moblid']['mob_idm_monochrome']    ='unused'; 

ordnance_type = 'Outdoor' //Outdoor, Road, Night, Light
szG['moburl']['txt_url_colour']    ='https://api.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/' + ordnance_type + '%203857/{level}/{col}/{row}.png?key='+szOrdMyKey 
szG['moblid']['txt_idm_colour']    ={copyright: 'Contains OS data &copy; Crown copyright and database right (2016)' }
szG['moburl']['mob_url_colour']    ='unused'; 
szG['moblid']['mob_idm_colour']    ='unused'; 

ordnance_type = 'Road' //Outdoor, Road, Night, Light
szG['moburl']['txt_url_buildings']    ='https://api.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/' + ordnance_type + '%203857/{level}/{col}/{row}.png?key='+szOrdMyKey
szG['moblid']['txt_idm_buildings']    ={copyright: 'Contains OS data &copy; Crown copyright and database right (2016)' }
szG['moburl']['mob_url_buildings']    ='unused'; 
szG['moblid']['mob_idm_buildings']    ='unused'; 

//	console.log ("wdfsadfsadfsdf="+szG['satellite']['mob']['url'])
var self={}; require(['esri/layers/WebTiledLayer', 'esri/virtualearth/VETiledLayer'], function(WebTiledLayer, VETiledLayer) {data=data || {};
	self={use: data.types || ['plain', 'satellite'], //* = all, 1st one shown by default
          box_width: data.width || data.height || 64,   box_height: data.height || data.width || 60,
          types: {template: {text: 'This will appear as a label on the icon [Required]',   get: 'This returns the actual basemap layer [Required]',
                  get_mobile: 'This returns a different layer if the user is viewing on a mobile. If not provided, the get() function is used even on mobile. [Optional].',
                  img: 'Name of the image used to display the basemap icon. If not provided, the name of the template is used instead. [Optional]'   },
          satellite: { //thumbnail is based on this [name], stored in images/basemaps/[name].jpg
                  text: 'Satellite',   img: 'satellite',  get: function() {return new VETiledLayer({ bingMapsKey: szBingMapsKey,  mapStyle: VETiledLayer.MAP_STYLE_AERIAL_WITH_LABELS})  },
                  get_mobile: function() {return new WebTiledLayer(szG['moburl']['txt_url_satellite'], szG['moblid']['txt_id_satellite'] ) }   },//If this function isn't set, uses get() function instead, even on mobile
          plain: {text: 'Plain',            get: function() {return new WebTiledLayer(szG['moburl']['txt_url_plain'],      szG['moblid']['txt_idm_plain'] )     },
                                     get_mobile: function() {return new WebTiledLayer(szG['moburl']['mob_url_plain'],      szG['moblid']['mob_idm_plain'] )  }  },
          plain_os: {text: 'Light',         get: function() {return new WebTiledLayer(szG['moburl']['txt_url_plain_os'],   szG['moblid']['txt_idm_plain_os'] ) } },
          os_night: {text: 'Night',         get: function() {return new WebTiledLayer(szG['moburl']['txt_url_os_night'],   szG['moblid']['txt_idm_os_night'] ) } },
          watercolour: {text: 'Watercolour',get: function() {return new WebTiledLayer(szG['moburl']['txt_url_watercolour'],szG['moblid']['txt_idm_watercolour']  ) } },
          monochrome: { text: 'Monochrome', get: function() {return new WebTiledLayer(szG['moburl']['txt_url_monochrome'], szG['moblid']['txt_idm_monochrome'] ) } },
          colour: { text: 'Colour',         get: function() {return new WebTiledLayer(szG['moburl']['txt_url_colour'],     szG['moblid']['txt_idm_colour'] ) }  },
          buildings: {text: 'Buildings',    get: function() {return new WebTiledLayer(szG['moburl']['txt_url_buildings'],  szG['moblid']['txt_idm_buildings']) }}   },
        init: function() { if (data.customise_types) {  for (var i in data.customise_types) { for (var j in data.customise_types[i]) {self.types[i][j] = data.customise_types[i][j] }  } }
              setTimeout(function() { //Added in case basemaps is added inline in the map constructor, needs a delay
				map.loaded ?  self.set_first_basemap() : map.on('load', self.set_first_basemap);
				self.timeout = setInterval(function() {if (map.loaded) {self.set_first_basemap(); clearTimeout(self.timeout)} }, 100)  })        },
        set_first_basemap: function() {if (self.first_loaded) return
                self.first_loaded = true; if (self.use.length > 1) self.build();  self.change(store('last_basemap') || self.use[0])     },
        build: function() {var holder = $('<div></div>');  var search = self.use[0] == '*' ? Object.keys(self.types) : self.use
                if (search.length <= 1)  throw 'You must add at least two basemaps for this to work'
                for (var i in search) {; (function(i) {var name = search[i]; if (name == 'template') return;  var info = self.types[search[i]]; var img = (info.img || name) + '.jpg'
                        var elem = $('<div></div>').attr('id', 'bm_' + name).append("<div style='background-image:url(/images/basemaps/" + img +")'></div>").append('<span>' + info.text + '</span>')
                            .click(function() {self.change(name) }); holder.append(elem) })(i) }
                var inner = $('<div></div>') .append(holder).hover(function() {self.expand(true) },function() {self.expand(false) }).css('display', 'block');
                $("<div id='basemap_picker'></div>") .append(inner) .appendTo('body')
                self.create_custom_styles();  self.actual_height = $('#basemap_picker > div').height() //Any custom css elsewhere automatically overrides values sent in, so check for height here
            },
        create_custom_styles: function() {var style = '<style>'; style += '#basemap_picker > div { width: ' + self.box_width + 'px } ';
                style +='#basemap_picker > div > div > div > div { height: ' + self.box_height + 'px } ';
                if (data.css) {style += '#basemap_picker {'; for (var i in data.css) {style += i + ': ' + data.css[i] }; style += '}' }; style += '</style>'; $('html > head #common').after(style) },
        expand: function(b) {var actual_height = $('#basemap_picker > div > div > div > div').height()
                if (b) {var num_basemaps = $('#basemap_picker > div > div > div').length - 1 //hide self map
                    var max_height = num_basemaps * actual_height; $('#basemap_picker > div').animate({height: max_height + 'px'}, {queue: false, duration: 150 })
                } else {$('#basemap_picker > div').animate({height: actual_height}, {queue: false, duration: 150})} },
        change: function(type) {if (!self.types[type]) type = 'plain';  if (self.last_basemap) map.removeLayer(self.last_basemap)
                self.last_basemap =is_retina() && self.types[type].get_mobile ? self.types[type].get_mobile() : self.types[type].get();  map.addLayer(self.last_basemap)
                map.reorderLayer(self.last_basemap, 1); map.getLayer(map.layerIds[0]).hide() //Hide standard basemap
                if (self.use.length > 1) {var icon = type == self.use[0] ? self.use[1] : self.use[0]; $('#bm_' + icon).prependTo('#basemap_picker > div > div'); $('#bm_' + type).appendTo('#basemap_picker > div > div')
                    self.expand(false); store('last_basemap', type)  }
                $('body').addClass('basemap-' + type); $('body').removeClass('basemap-' + self.last_type); self.last_type = type} }
self.init() }); return 'streets'}
function db() { try {var stack = new Error().stack.replace(/^[^\(]+?[\n$]/gm, '') .replace(/^\s+at\s+/gm, '') .split('\n') //Debug to the console
        stack =  stack[1].split(':')[2] + ' (' + stack[1].substring(0, stack[1].indexOf('(') - 1) + ')'     //console.log(" ");//new line
        if (arguments.length == 0) {console.log(stack)  } else {console.log.call(console, stack,  arguments.length == 1 ? arguments[0] : arguments )   }   } catch (err) {}}
function is_mobile() {return $('body').width() <= 600}
function is_retina() {return ( (window.matchMedia && (window.matchMedia( 'only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches ||
window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)' ).matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3)    )}
function store(name, val) {   name += '_' + window.location.pathname //makes storage not work across maps
    try {if (typeof Storage !== 'undefined') {if (val === undefined) { var val = localStorage.getItem(name);  if (val == null) return false;   return JSON.parse(val)} 
															else {var xxx = JSON.stringify(val); localStorage.setItem(name, xxx);   // db("Storing", name, val, xxx);
            }        }    } catch (err) {return false }}
function once_only(name) {if (typeof Storage === 'undefined' || store(name)) return false; store(name, 1); return true}
function preload(arrayOfImages) {$(arrayOfImages).each(function() {$('<img/>')[0].src = this })}
/** * updateRSS works with the separate aaron-rss repo to syndicate alerts * @param {*} postTitle * @param {*} postDescription */
var updateRSS = function(postTitle, postDescription) {var dirNameOfThisMap = window.location.pathname.substr(1).replace(/\/.*/g, '');  var feedname = dirNameOfThisMap
    var postUrl = 'https://maps.london.gov.uk/' + feedname;  if (!postTitle) {postTitle = 'update' };  if (!postDescription) {postDescription = 'please check' }
    var rssApp = 'https://maps.london.gov.uk/node/aaron-rss'; $.post(rssApp + '/items?' + $.param({ feedname: feedname,  title: postTitle, description: postDescription, url: postUrl }),
            function() {// console.log( "success" )
            }        )
        .done(function() {console.log('second success') }) .fail(function(err) {console.log('error', err)})   .always(function() {    // console.log( "finished" )
        })}