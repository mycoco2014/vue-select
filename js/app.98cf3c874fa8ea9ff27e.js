webpackJsonp([2,0],[function(e,a,l){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}l(105);var n=l(43),o=t(n),i=l(117),s=t(i),r=l(45),u=t(r),c=l(125),d=t(c),p=l(42),v=t(p),h=l(28),b=t(h),f=l(44);o["default"].use(d["default"]),o["default"].component("v-select",v["default"]),o["default"].component("v-code",b["default"]),o["default"].filter("score",function(e){return Math.round(e)}),o["default"].config.debug=!0,o["default"].config.devtools=!0,new o["default"]({el:"body",store:u["default"],components:{App:s["default"]},vuex:{getters:{placeholder:function(e){return e.placeholder},selected:function(e){return e.selected},type:function(e){return e.optionType},options:function(e){return e.options[e.optionType]},multiple:function(e){return e.multiple}},actions:{setSelected:f.setSelected,toggleMultiple:f.toggleMultiple,setPlaceholder:f.setPlaceholder,toggleOptionType:f.toggleOptionType}}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a,l){var t,n;t=l(50),n=l(107),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,a){"use strict";e.exports=[{value:"AF",label:"Afghanistan"},{value:"AX",label:"Åland Islands"},{value:"AL",label:"Albania"},{value:"DZ",label:"Algeria"},{value:"AS",label:"American Samoa"},{value:"AD",label:"Andorra"},{value:"AO",label:"Angola"},{value:"AI",label:"Anguilla"},{value:"AQ",label:"Antarctica"},{value:"AG",label:"Antigua and Barbuda"},{value:"AR",label:"Argentina"},{value:"AM",label:"Armenia"},{value:"AW",label:"Aruba"},{value:"AU",label:"Australia"},{value:"AT",label:"Austria"},{value:"AZ",label:"Azerbaijan"},{value:"BS",label:"Bahamas"},{value:"BH",label:"Bahrain"},{value:"BD",label:"Bangladesh"},{value:"BB",label:"Barbados"},{value:"BY",label:"Belarus"},{value:"BE",label:"Belgium"},{value:"BZ",label:"Belize"},{value:"BJ",label:"Benin"},{value:"BM",label:"Bermuda"},{value:"BT",label:"Bhutan"},{value:"BO",label:"Bolivia"},{value:"BA",label:"Bosnia and Herzegovina"},{value:"BW",label:"Botswana"},{value:"BV",label:"Bouvet Island"},{value:"BR",label:"Brazil"},{value:"IO",label:"British Indian Ocean Territory"},{value:"BN",label:"Brunei Darussalam"},{value:"BG",label:"Bulgaria"},{value:"BF",label:"Burkina Faso"},{value:"BI",label:"Burundi"},{value:"KH",label:"Cambodia"},{value:"CM",label:"Cameroon"},{value:"CA",label:"Canada"},{value:"CV",label:"Cape Verde"},{value:"KY",label:"Cayman Islands"},{value:"CF",label:"Central African Republic"},{value:"TD",label:"Chad"},{value:"CL",label:"Chile"},{value:"CN",label:"China"},{value:"CX",label:"Christmas Island"},{value:"CC",label:"Cocos (Keeling) Islands"},{value:"CO",label:"Colombia"},{value:"KM",label:"Comoros"},{value:"CG",label:"Congo"},{value:"CD",label:"Congo, The Democratic Republic of The"},{value:"CK",label:"Cook Islands"},{value:"CR",label:"Costa Rica"},{value:"CI",label:"Cote D'ivoire"},{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"},{value:"DJ",label:"Djibouti"},{value:"DM",label:"Dominica"},{value:"DO",label:"Dominican Republic"},{value:"EC",label:"Ecuador"},{value:"EG",label:"Egypt"},{value:"SV",label:"El Salvador"},{value:"GQ",label:"Equatorial Guinea"},{value:"ER",label:"Eritrea"},{value:"EE",label:"Estonia"},{value:"ET",label:"Ethiopia"},{value:"FK",label:"Falkland Islands (Malvinas)"},{value:"FO",label:"Faroe Islands"},{value:"FJ",label:"Fiji"},{value:"FI",label:"Finland"},{value:"FR",label:"France"},{value:"GF",label:"French Guiana"},{value:"PF",label:"French Polynesia"},{value:"TF",label:"French Southern Territories"},{value:"GA",label:"Gabon"},{value:"GM",label:"Gambia"},{value:"GE",label:"Georgia"},{value:"DE",label:"Germany"},{value:"GH",label:"Ghana"},{value:"GI",label:"Gibraltar"},{value:"GR",label:"Greece"},{value:"GL",label:"Greenland"},{value:"GD",label:"Grenada"},{value:"GP",label:"Guadeloupe"},{value:"GU",label:"Guam"},{value:"GT",label:"Guatemala"},{value:"GG",label:"Guernsey"},{value:"GN",label:"Guinea"},{value:"GW",label:"Guinea-bissau"},{value:"GY",label:"Guyana"},{value:"HT",label:"Haiti"},{value:"HM",label:"Heard Island and Mcdonald Islands"},{value:"VA",label:"Holy See (Vatican City State)"},{value:"HN",label:"Honduras"},{value:"HK",label:"Hong Kong"},{value:"HU",label:"Hungary"},{value:"IS",label:"Iceland"},{value:"IN",label:"India"},{value:"ID",label:"Indonesia"},{value:"IR",label:"Iran, Islamic Republic of"},{value:"IQ",label:"Iraq"},{value:"IE",label:"Ireland"},{value:"IM",label:"Isle of Man"},{value:"IL",label:"Israel"},{value:"IT",label:"Italy"},{value:"JM",label:"Jamaica"},{value:"JP",label:"Japan"},{value:"JE",label:"Jersey"},{value:"JO",label:"Jordan"},{value:"KZ",label:"Kazakhstan"},{value:"KE",label:"Kenya"},{value:"KI",label:"Kiribati"},{value:"KP",label:"Korea, Democratic People's Republic of"},{value:"KR",label:"Korea, Republic of"},{value:"KW",label:"Kuwait"},{value:"KG",label:"Kyrgyzstan"},{value:"LA",label:"Lao People's Democratic Republic"},{value:"LV",label:"Latvia"},{value:"LB",label:"Lebanon"},{value:"LS",label:"Lesotho"},{value:"LR",label:"Liberia"},{value:"LY",label:"Libyan Arab Jamahiriya"},{value:"LI",label:"Liechtenstein"},{value:"LT",label:"Lithuania"},{value:"LU",label:"Luxembourg"},{value:"MO",label:"Macao"},{value:"MK",label:"Macedonia, The Former Yugoslav Republic of"},{value:"MG",label:"Madagascar"},{value:"MW",label:"Malawi"},{value:"MY",label:"Malaysia"},{value:"MV",label:"Maldives"},{value:"ML",label:"Mali"},{value:"MT",label:"Malta"},{value:"MH",label:"Marshall Islands"},{value:"MQ",label:"Martinique"},{value:"MR",label:"Mauritania"},{value:"MU",label:"Mauritius"},{value:"YT",label:"Mayotte"},{value:"MX",label:"Mexico"},{value:"FM",label:"Micronesia, Federated States of"},{value:"MD",label:"Moldova, Republic of"},{value:"MC",label:"Monaco"},{value:"MN",label:"Mongolia"},{value:"ME",label:"Montenegro"},{value:"MS",label:"Montserrat"},{value:"MA",label:"Morocco"},{value:"MZ",label:"Mozambique"},{value:"MM",label:"Myanmar"},{value:"NA",label:"Namibia"},{value:"NR",label:"Nauru"},{value:"NP",label:"Nepal"},{value:"NL",label:"Netherlands"},{value:"AN",label:"Netherlands Antilles"},{value:"NC",label:"New Caledonia"},{value:"NZ",label:"New Zealand"},{value:"NI",label:"Nicaragua"},{value:"NE",label:"Niger"},{value:"NG",label:"Nigeria"},{value:"NU",label:"Niue"},{value:"NF",label:"Norfolk Island"},{value:"MP",label:"Northern Mariana Islands"},{value:"NO",label:"Norway"},{value:"OM",label:"Oman"},{value:"PK",label:"Pakistan"},{value:"PW",label:"Palau"},{value:"PS",label:"Palestinian Territory, Occupied"},{value:"PA",label:"Panama"},{value:"PG",label:"Papua New Guinea"},{value:"PY",label:"Paraguay"},{value:"PE",label:"Peru"},{value:"PH",label:"Philippines"},{value:"PN",label:"Pitcairn"},{value:"PL",label:"Poland"},{value:"PT",label:"Portugal"},{value:"PR",label:"Puerto Rico"},{value:"QA",label:"Qatar"},{value:"RE",label:"Reunion"},{value:"RO",label:"Romania"},{value:"RU",label:"Russian Federation"},{value:"RW",label:"Rwanda"},{value:"SH",label:"Saint Helena"},{value:"KN",label:"Saint Kitts and Nevis"},{value:"LC",label:"Saint Lucia"},{value:"PM",label:"Saint Pierre and Miquelon"},{value:"VC",label:"Saint Vincent and The Grenadines"},{value:"WS",label:"Samoa"},{value:"SM",label:"San Marino"},{value:"ST",label:"Sao Tome and Principe"},{value:"SA",label:"Saudi Arabia"},{value:"SN",label:"Senegal"},{value:"RS",label:"Serbia"},{value:"SC",label:"Seychelles"},{value:"SL",label:"Sierra Leone"},{value:"SG",label:"Singapore"},{value:"SK",label:"Slovakia"},{value:"SI",label:"Slovenia"},{value:"SB",label:"Solomon Islands"},{value:"SO",label:"Somalia"},{value:"ZA",label:"South Africa"},{value:"GS",label:"South Georgia and The South Sandwich Islands"},{value:"ES",label:"Spain"},{value:"LK",label:"Sri Lanka"},{value:"SD",label:"Sudan"},{value:"SR",label:"Suriname"},{value:"SJ",label:"Svalbard and Jan Mayen"},{value:"SZ",label:"Swaziland"},{value:"SE",label:"Sweden"},{value:"CH",label:"Switzerland"},{value:"SY",label:"Syrian Arab Republic"},{value:"TW",label:"Taiwan, Province of China"},{value:"TJ",label:"Tajikistan"},{value:"TZ",label:"Tanzania, United Republic of"},{value:"TH",label:"Thailand"},{value:"TL",label:"Timor-leste"},{value:"TG",label:"Togo"},{value:"TK",label:"Tokelau"},{value:"TO",label:"Tonga"},{value:"TT",label:"Trinidad and Tobago"},{value:"TN",label:"Tunisia"},{value:"TR",label:"Turkey"},{value:"TM",label:"Turkmenistan"},{value:"TC",label:"Turks and Caicos Islands"},{value:"TV",label:"Tuvalu"},{value:"UG",label:"Uganda"},{value:"UA",label:"Ukraine"},{value:"AE",label:"United Arab Emirates"},{value:"GB",label:"United Kingdom"},{value:"US",label:"United States"},{value:"UM",label:"United States Minor Outlying Islands"},{value:"UY",label:"Uruguay"},{value:"UZ",label:"Uzbekistan"},{value:"VU",label:"Vanuatu"},{value:"VE",label:"Venezuela"},{value:"VN",label:"Viet Nam"},{value:"VG",label:"Virgin Islands, British"},{value:"VI",label:"Virgin Islands, U.S."},{value:"WF",label:"Wallis and Futuna"},{value:"EH",label:"Western Sahara"},{value:"YE",label:"Yemen"},{value:"ZM",label:"Zambia"},{value:"ZW",label:"Zimbabwe"}]},function(e,a){"use strict";e.exports=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, The Democratic Republic of The","Cook Islands","Costa Rica","Cote D'ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-bissau","Guyana","Haiti","Heard Island and Mcdonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran, Islamic Republic of","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory, Occupied","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and The Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and The South Sandwich Islands","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Timor-leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"]},,,,,,,,,,,function(e,a,l){var t,n;l(103),t=l(55),n=l(112),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,a,l){var t,n;l(104),t=l(59),n=l(116),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},,function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.setSelected=function(e,a){var l=e.dispatch;l("SET_SELECTED",a)},a.toggleOptionType=function(e){var a=e.dispatch;a("TOGGLE_OPTION_TYPE")},a.setPlaceholder=function(e,a){var l=e.dispatch;l("SET_PLACEHOLDER",a)},a.toggleMultiple=function(e){var a=e.dispatch;a("TOGGLE_MULTIPLE")}},function(e,a,l){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var n=l(43),o=t(n),i=l(126),s=t(i);o["default"].use(s["default"]),o["default"].config.debug=!0;var r={selected:null,placeholder:"Select a Country",multiple:!0,maxHeight:"400px",options:{advanced:l(29),simple:l(30)},optionType:"advanced"},u={SET_SELECTED:function(e,a){e.selected=a},TOGGLE_OPTION_TYPE:function(e){"advanced"===e.optionType?e.optionType="simple":e.optionType="advanced"},SET_PLACEHOLDER:function(e,a){e.placeholder=a},TOGGLE_MULTIPLE:function(e){e.multiple=!e.multiple},SET_MAX_HEIGHT:function(e,a){e.maxHeight=a}};a["default"]=new s["default"].Store({state:r,mutations:u})},function(e,a){"use strict";e.exports={props:{loading:{type:Boolean,"default":!1},onSearch:{type:Function,"default":!1},debounce:{type:Number,"default":0}},watch:{search:function(){this.search.length>0&&this.onSearch&&this.onSearch(this.search,this.toggleLoading)}},methods:{toggleLoading:function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return null==e?this.loading=!this.loading:this.loading=e}}}},function(e,a){"use strict";e.exports={watch:{typeAheadPointer:function(){this.maybeAdjustScroll()}},methods:{maybeAdjustScroll:function(){var e=this.pixelsToPointerTop(),a=this.pixelsToPointerBottom();return e<=this.viewport().top?this.scrollTo(e):a>=this.viewport().bottom?this.scrollTo(this.viewport().top+this.pointerHeight()):void 0},pixelsToPointerTop:function l(){for(var l=0,e=0;e<this.typeAheadPointer;e++)l+=this.$els.dropdownMenu.children[e].offsetHeight;return l},pixelsToPointerBottom:function(){return this.pixelsToPointerTop()+this.pointerHeight()},pointerHeight:function(){var e=this.$els.dropdownMenu.children[this.typeAheadPointer];return e?e.offsetHeight:0},viewport:function(){return{top:this.$els.dropdownMenu.scrollTop,bottom:this.$els.dropdownMenu.offsetHeight+this.$els.dropdownMenu.scrollTop}},scrollTo:function(e){return this.$els.dropdownMenu.scrollTop=e}}}},function(e,a){"use strict";e.exports={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){this.typeAheadPointer=0}},methods:{typeAheadUp:function(){this.typeAheadPointer>0&&(this.typeAheadPointer--,this.maybeAdjustScroll&&this.maybeAdjustScroll())},typeAheadDown:function(){this.typeAheadPointer<this.filteredOptions.length-1&&(this.typeAheadPointer++,this.maybeAdjustScroll&&this.maybeAdjustScroll())},typeAheadSelect:function(){this.filteredOptions[this.typeAheadPointer]?this.select(this.filteredOptions[this.typeAheadPointer]):this.taggable&&this.search.length&&this.select(this.search),this.clearSearchOnSelect&&(this.search="")}}}},function(e,a,l){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var n=l(118),o=t(n),i=l(121),s=t(i),r=l(41),u=t(r);a["default"]={components:{Params:s["default"],Examples:o["default"],Ajax:u["default"]}}},function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={props:["lang"],computed:{"class":function(){return"language-"+this.lang}}}},function(e,a,l){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var n=l(60),o=t(n),i=l(29),s=t(i),r=l(30),u=t(r),c=l(42),d=t(c),p=l(28),v=t(p),h=l(41),b=t(h),f=l(124),g=t(f);a["default"]={components:{vSelect:d["default"],vCode:v["default"],InstallSnippet:g["default"],Ajax:b["default"]},data:function(){return{countries:s["default"],simple:u["default"],callback:"console",reactive:null,install:null,syncedVal:"Canada"}},methods:{consoleCallback:function(e){console.dir((0,o["default"])(e))},alertCallback:function(e){alert((0,o["default"])(e))}},computed:{getCallback:function(){return"alert"===this.callback?this.alertCallback:this.consoleCallback}}}},function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={data:function(){return{repo:null,error:null,options:null}},methods:{getOptions:function(e,a){var l=this;a(!0),this.$http.get("https://api.github.com/search/repositories",{q:e}).then(function(e){l.options=e.data.items,a(!1)})["catch"](function(e){l.error=e.data,a(!1)})}}}},function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={data:function(){return{repo:null,error:null,options:null}},methods:{getOptions:function(e,a){var l=this;a(!0),this.$http.get("https://api.github.com/search/repositories",{q:e}).then(function(e){l.options=e.data.items,a(!1)})["catch"](function(e){l.error=e.data,a(!1)})}}}},function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={}},function(e,a,l){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var n=l(120),o=t(n),i=l(119),s=t(i),r=l(123),u=t(r),c=l(122),d=t(c);a["default"]={components:{GitHubSearchBasic:o["default"],GitHubSearch:s["default"],AjaxProps:u["default"],AjaxExample:d["default"]},data:function(){return{basicSource:!1,spinner:!1}}}},function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={}},function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={}},function(e,a,l){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var n=l(28),o=t(n);a["default"]={components:{vCode:o["default"]}}},function(e,a,l){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var n=l(62),o=t(n),i=l(65),s=t(i),r=l(66),u=t(r),c=l(47),d=t(c),p=l(48),v=t(p),h=l(46),b=t(h);a["default"]={mixins:[d["default"],v["default"],b["default"]],props:{value:{"default":null},options:{type:Array,"default":function(){return[]}},maxHeight:{type:String,"default":"400px"},searchable:{type:Boolean,"default":!0},multiple:{type:Boolean,"default":!1},placeholder:{type:String,"default":""},transition:{type:String,"default":"expand"},clearSearchOnSelect:{type:Boolean,"default":!0},label:{type:String,"default":"label"},getOptionLabel:{type:Function,"default":function(e){return"object"===("undefined"==typeof e?"undefined":(0,u["default"])(e))&&this.label&&e[this.label]?e[this.label]:e}},onChange:Function,taggable:{type:Boolean,"default":!1},pushTags:{type:Boolean,"default":!1},createOption:{type:Function,"default":function(e){return"object"===(0,u["default"])(this.options[0])?(0,s["default"])({},this.label,e):e}}},data:function(){return{search:"",open:!1}},watch:{value:function(e,a){this.multiple?this.onChange?this.onChange(e):null:this.onChange&&e!==a?this.onChange(e):null},options:function(){this.taggable||this.$set("value",this.multiple?[]:null)},multiple:function(e){this.$set("value",e?[]:null)}},methods:{select:function(e){this.isOptionSelected(e)?this.multiple&&this.value.$remove(e):(this.taggable&&!this.optionExists(e)&&(e=this.createOption(e),this.pushTags&&this.options.push(e)),this.multiple?this.value?this.value.push(e):this.$set("value",[e]):this.value=e),this.onAfterSelect(e)},onAfterSelect:function(e){this.multiple||(this.open=!this.open,this.$els.search.blur()),this.clearSearchOnSelect&&(this.search="")},toggleDropdown:function(e){e.target!==this.$els.openIndicator&&e.target!==this.$els.search&&e.target!==this.$els.toggle&&e.target!==this.$el||(this.open?this.$els.search.blur():(this.open=!0,this.$els.search.focus()))},isOptionSelected:function(e){var a=this;if(this.multiple&&this.value){var l=!1;return this.value.forEach(function(t){"object"===("undefined"==typeof t?"undefined":(0,u["default"])(t))&&t[a.label]===e?l=!0:t===e&&(l=!0)}),l}return this.value===e},onEscape:function(){this.search.length?this.search="":this.$els.search.blur()},maybeDeleteValue:function(){return!this.$els.search.value.length&&this.value?this.multiple?this.value.pop():this.$set("value",null):void 0},optionExists:function(e){var a=this,l=!1;return this.options.forEach(function(t){"object"===("undefined"==typeof t?"undefined":(0,u["default"])(t))&&t[a.label]===e?l=!0:t===e&&(l=!0)}),l}},computed:{dropdownClasses:function(){return{open:this.open,searchable:this.searchable,loading:this.loading}},searchPlaceholder:function(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions:function(){var e=this.$options.filters.filterBy(this.options,this.search);return this.taggable&&this.search.length&&!this.optionExists(this.search)&&e.unshift(this.search),e},isValueEmpty:function(){return this.value?"object"===(0,u["default"])(this.value)?!(0,o["default"])(this.value).length:!this.value.length:!0},valueAsArray:function(){return this.multiple?this.value:this.value?[this.value]:[]}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a){},function(e,a){},function(e,a){},function(e,a){},,function(e,a){e.exports='<div class=container> <div class="col-md-10 col-md-offset-1"> <examples></examples> <params></params> </div> </div>'},function(e,a){e.exports="<code :class=class><slot></slot></code>"},function(e,a){e.exports="<section> <h2 class=page-header id=install>Install &amp; and Usage</h2> <div class=\"row row-col-vh\"> <div class=col-md-7> <install-snippet></install-snippet> </div> <div class=col-md-5> <p>The resulting vue-select, and it's value: <v-code lang=json>{{ install | json }}</v-code></p> <v-select :value.sync=install :options=\"['foo','bar','baz']\"></v-select> </div> </div> <h2 class=page-header id=examples>Examples</h2> <article class=doc-row id=ex-multiple> <h3 class=page-header>Single/Multiple Selection</h3> <div class=row> <div class=col-md-6> <h4>Single Option Select</h4> <pre><v-code lang=markup>&#x3C;v-select :options=&#x22;countries&#x22;&#x3E;&#x3C;/v-select&#x3E;</v-code></pre> <v-select :options=countries></v-select> </div> <div class=col-md-6> <h4>Multiple Option Select</h4> <pre><v-code lang=markup>&#x3C;v-select multiple :options=&#x22;countries&#x22;&#x3E;&#x3C;/v-select&#x3E;</v-code></pre> <v-select multiple=multiple :options=countries></v-select> </div> </div> </article> <article class=doc-row id=ex-reactive> <h3 class=page-header>Reactive Options</h3> <div class=row> <div class=col-md-6> <p>When the list of options provided by the parent changes, vue-select will react as you'd expect.</p> <div style=margin-top:0 class=radio> <label> <input type=radio name=reactive-options v-model=reactive :value=countries> <v-code lang=markup>&#x3C;v-select :options=&#x22;countries&#x22;&#x3E;&#x3C;/v-select&#x3E;</v-code> </label> </div> <div class=radio> <label> <input type=radio name=reactive-options v-model=reactive :value=\"['foo','bar','baz']\"> <v-code lang=markup>&#x3C;v-select options=&#x22;['foo','bar','baz']&#x22;&#x3E;&#x3C;/v-select&#x3E;</v-code> </label> </div> </div> <div class=col-md-6> <v-select :options=reactive></v-select> </div> </div> </article> <article class=doc-row id=ex-syncing> <h3 class=page-header>Two-Way Value Syncing</h3> <div class=row> <div class=col-md-6> <p>The most common use case for vue-select is being able to sync the components value with a parent component. The <code>value</code> property supports two-way data binding to accomplish this.</p> <p>The <code>.sync</code> data-binding modifier is completely optional. You may use <code>value</code> without a two-way binding to preselect options.</p> <p>Here we have preselected 'Canada' by setting <code>syncedVal: 'Canada'</code> on the parent component. The buttons below demonstrate how you can set the <code>value</code> from the parent.</p> <p>Current value: <v-code>{{ syncedVal | json }}</v-code></p> </div> <div class=col-md-6> <div class=form-group> <pre><v-code lang=markup>&#x3C;v-select :value.sync=&#x22;syncedVal&#x22; :options=&#x22;countries&#x22;&#x3E;&#x3C;/v-select&#x3E;</v-code></pre> </div> <div class=form-group> <v-select :options=simple :value.sync=syncedVal></v-select> </div> <div class=form-group> <button @click=\"syncedVal = 'United States'\" class=\"btn btn-default\">Set to United States</button> <button @click=\"syncedVal = 'Canada'\" class=\"btn btn-default\">Set to Canada</button> </div> </div> </div> </article> <article class=doc-row id=ex-labels> <h3 class=page-header>Custom Labels</h3> <div class=row> <div class=col-md-6> <p>By default when the <code>options</code> array contains objects, <code>vue-select</code> looks for the <code>label</code> key for display. If your data source doesn't contain that key, you can set your own using the <code>label</code> prop.</p> <p>On this page, the list of countries used in the examples contains <code>value</code> and <code>label</code> properties: <v-code lang=json>{value: \"CA\", label: \"Canada\"}</v-code>. In this example, we'll display the country code instead of the label.</p> </div> <div class=col-md-6> <pre><v-code lang=markup>&#x3C;v-select label=&#x22;value&#x22; :options=&#x22;countries&#x22;&#x3E;&#x3C;/v-select&#x3E;</v-code></pre> <v-select :options=countries label=value></v-select> </div> </div> </article> <article class=doc-row id=ex-vuex> <h3 class=page-header>On-Change Callback <small>Vuex Compatibility</small></h3> <div class=row> <div class=col-md-6> <p>vue-select provides an <code>onChange</code> property that accepts a callback function. This function is passed the currently selected value(s) as it's only parameter.</p> <p>This is very useful when integrating with Vuex, as it will allow your to trigger an action to update your vuex state object. Choose a callback and see it in action.</p> <div class=form-inline> <div class=radio> <label> <input type=radio v-model=callback value=console> <code>console.log(val)</code> </label> </div> <div class=radio> <label> <input type=radio v-model=callback value=alert> <code>alert(val)</code> </label> </div> </div> </div> <div class=col-md-6> <pre><v-code lang=markup>&#x3C;v-select on-change=&#x22;consoleCallback&#x22; :options=&#x22;countries&#x22;&#x3E;&#x3C;/v-select&#x3E;</v-code></pre> <pre><v-code lang=javascript>methods: {\n  consoleCallback(val) {\n    console.dir(JSON.stringify(val))\n  },\n\n  alertCallback(val) {\n    alert(JSON.stringify(val))\n  }\n}</v-code></pre> <v-select :options=countries :on-change=getCallback></v-select> </div> </div> </article> <ajax></ajax> </section>"},function(e,a){e.exports='<div> <div class="github-search panel panel-default"> <div class=panel-heading> <v-select :debounce=250 :value.sync=repo :options=options :on-search=getOptions placeholder="Search GitHub Repositories..." label=full_name></v-select> </div> <div class=panel-body v-if=repo> <img :src=repo.owner.avatar_url alt="{{ repo.owner.login }}" class=gravatar> <p>{{ repo.description }}</p> </div> <div class=panel-footer v-if=repo> <ul class=list-inline role=tablist> <li><a href="{{ repo.url }}">Stars <span class=badge>{{ repo.stargazers_count }}</span></a> </li> <li><a href="{{ repo.url }}">Forks <span class=badge>{{ repo.forks }}</span></a></li> <li><a href="{{ repo.url }}">Open Issues <span class=badge>{{ repo.open_issues_count }}</span></a></li> </ul> </div> </div> <div v-if=error class="alert alert-warning" role=alert> <button type=button class=close @click="error = null"> <span aria-hidden=true>&times;</span></button> {{ error.message }} </div> </div>'},function(e,a){e.exports='<div> <p><v-select :debounce=250 :options=options :on-search=getOptions placeholder="Search GitHub Repositories..." label=full_name></v-select></p> <div v-if=error class="alert alert-warning" role=alert> <button type=button class=close @click="error = null"> <span aria-hidden=true>&times;</span></button> {{ error.message }} </div> </div>'},function(e,a){e.exports="<h2 class=page-header>Parameters</h2> <pre v-pre><code class=language-javascript>props: {\n\n  /**\n   * Contains the currently selected value. Very similar to a\n   * `value` attribute on an &amp;lt;input&amp;gt;. In most cases, you'll want\n   * to set this as a two-way binding, using :value.sync. However,\n   * this will not work with Vuex, in which case you'll need to use\n   * the onChange callback property.\n   * @type {Object||String||null}\n   */\n  value: {\n    default: null\n  },\n\n  /**\n   * An array of strings or objects to be used as dropdown choices.\n   * If you are using an array of objects, vue-select will look for\n   * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A\n   * custom label key can be set with the `label` prop.\n   * @type {Array}\n   */\n  options: {\n    type: Array,\n    default() { return [] },\n  },\n\n  /**\n   * Enable/disable filtering the options.\n   * @type {Boolean}\n   */\n  searchable: {\n    type: Boolean,\n    default: true\n  },\n\n  /**\n   * Equivalent to the `multiple` attribute on a `&lt;select&gt;` input.\n   * @type {Boolean}\n   */\n  multiple: {\n    type: Boolean,\n    default: false\n  },\n\n  /**\n   * Equivalent to the `placeholder` attribute on an `&lt;input&gt;`.\n   * @type {String}\n   */\n  placeholder: {\n    type: String,\n    default: ''\n  },\n\n  /**\n   * Sets a Vue transition property on the `.dropdown-menu`. vue-select\n   * does not include CSS for transitions, you'll need to add them yourself.\n   * @type {String}\n   */\n  transition: {\n    type: String,\n    default: 'expand'\n  },\n\n  /**\n   * Enables/disables clearing the search text when an option is selected.\n   * @type {Boolean}\n   */\n  clearSearchOnSelect: {\n    type: Boolean,\n    default: true\n  },\n\n  /**\n   * Tells vue-select what key to use when generating option labels when\n   * `option` is an object.\n   * @type {String}\n   */\n  label: {\n    type: String,\n    default: 'label'\n  },\n\n  /**\n   * An optional callback function that is called each time the selected\n   * value(s) change. When integrating with Vuex, use this callback to trigger\n   * an action, rather than using :value.sync to retreive the selected value.\n   * @type {Function}\n   * @default {null}\n   */\n  onChange: Function\n}\n  </code></pre>"},function(e,a){e.exports='<article class=example id=ex-ajax> <h3 id=ajax class=page-header>AJAX Remote Option Loading</h3> <div class=row> <div class=col-md-6> <p> The <code>onSearch</code> prop allows you to load options via ajax in a parent component when the search text is updated. It is invoked with two parameters, <code>search</code> &amp; <code>loading</code>. </p> <h4>onSearch Callback Parameters <small>search, loading</small></h4> <p> <code>search</code> is a string containing the current search text. <code>loading</code> is a function that accepts a boolean value, and is used to toggle the \'loading\' class on the top-level vue-select wrapper. </p> <h4>Loading Spinner</h4> <p> Vue Select includes a default loading spinner that appears when the loading class is present. The <code>spinner</code> slot allows you to implement your own spinner. </p> <div id=spinner-example :class={loading:spinner}> <button class="btn btn-sm btn-default" @click="spinner = !spinner">Toggle Spinner</button> <div class=spinner v-show=spinner>Loading...</div> </div> <h4>Debounce Input</h4> <p> Vue Select also accepts a <code>debounce</code> prop that can be used to prevent <code>onSearch</code> from being called until input has completed. </p> <h4>Library Agnostic</h4> <p> Since Vue.js does not ship with ajax functionality as part of the core library, it\'s up to you to process the ajax requests in your parent component. </p> </div> <div class=col-md-6> <h4>Example <small>GitHub API</small></h4> <p>In this example, <a href=https://github.com/vuejs/vue-resource>Vue Resource</a> is used to access the <a href=https://developer.github.com/v3/ >GitHub API</a>. </p> <git-hub-search-basic></git-hub-search-basic> <ajax-example></ajax-example> </div> </div> <div class=row> <div class=col-md-6> </div> </div>  </article>';
},function(e,a){e.exports="<pre><v-code lang=markup>&lt;v-select\n	:debounce=&quot;250&quot;\n	:on-search=&quot;getOptions&quot;\n	:options=&quot;options&quot;\n	placeholder=&quot;Search GitHub Repositories...&quot;\n	label=&quot;full_name&quot;\n&gt;\n&lt;/v-select&gt;</v-code></pre> <pre><v-code lang=javascript>data() {\n	return {\n		options: null\n	}\n},\nmethods: {\n  getOptions(search, loading) {\n    loading(true)\n    this.$http.get('https://api.github.com/search/repositories', {\n       q: search\n    }).then(resp => {\n       this.options = resp.data.items\n       loading(false)\n    })\n  }\n}\n</v-code></pre>"},function(e,a){e.exports="<pre><v-code lang=javascript>/**\n * Accept a callback function that will be run\n * when the search text changes. The callback\n * will be invoked with these parameters:\n\n * @param {search}  String          Current search text\n * @param {loading} Function(bool)  Toggle loading class\n */\nonSearch: {\n	type: Function,\n	default: false\n},\n\n/**\n * Milliseconds to wait before invoking this.onSearch().\n * Used to prevent sending an AJAX request until input\n * has completed.\n */\ndebounce: {\n	type: Number,\n	default: 0\n}</v-code></pre>"},function(e,a){e.exports="<p>Install from GitHub via NPM</p> <pre><v-code lang=bash>npm install sagalbot/vue-select</v-code></pre> <p>To use the vue-select component in your templates, simply import it, and register it with your component.</p> <pre><v-code lang=markup>&#x3C;template&#x3E;\n  &#x3C;div id=&#x22;myApp&#x22;&#x3E;\n    &#x3C;v-select :value.sync=&#x22;selected&#x22; :options=&#x22;options&#x22;&#x3E;&#x3C;/v-select&#x3E;\n  &#x3C;/div&#x3E;\n&#x3C;/template&#x3E;\n&#x3C;script&#x3E;</v-code>\n<v-code lang=javascript>import vSelect from \"vue-select\"\n  export default {\n    components: {vSelect},\n\n    data() {\n      return {\n        selected: null,\n        options: ['foo','bar','baz']\n      }\n    }\n  }\n&#x3C;/script&#x3E;</v-code>\n</pre>"},function(e,a){e.exports='<div class="dropdown v-select" :class=dropdownClasses> <div v-el:toggle @mousedown.prevent=toggleDropdown class="dropdown-toggle clearfix" type=button> <span class=form-control v-if="!searchable && isValueEmpty"> {{ placeholder }} </span> <span class=selected-tag v-for="option in valueAsArray" track-by=$index> {{ getOptionLabel(option) }} <button v-if=multiple @click=select(option) type=button class=close> <span aria-hidden=true>&times;</span> </button> </span> <input v-el:search :debounce=debounce v-model=search v-show=searchable @keydown.delete=maybeDeleteValue @keyup.esc=onEscape @keydown.up.prevent=typeAheadUp @keydown.down.prevent=typeAheadDown @keyup.enter.prevent=typeAheadSelect @blur="open = false" @focus="open = true" type=search class=form-control :placeholder=searchPlaceholder :style="{ width: isValueEmpty ? \'100%\' : \'auto\' }"> <i v-el:open-indicator role=presentation class=open-indicator></i> <slot name=spinner> <div class=spinner v-show="onSearch && loading">Loading...</div> </slot> </div> <ul v-el:dropdown-menu v-show=open :transition=transition class=dropdown-menu :style="{ \'max-height\': maxHeight }"> <li v-for="option in filteredOptions" track-by=$index :class="{ active: isOptionSelected(option), highlight: $index === typeAheadPointer }" @mouseover="typeAheadPointer = $index"> <a @mousedown.prevent=select(option)> {{ getOptionLabel(option) }} </a> </li> <li transition=fade v-if=!filteredOptions.length class=divider></li> <li transition=fade v-if=!filteredOptions.length class=text-center> <slot name=no-options>Sorry, no matching options.</slot> </li> </ul> </div>'},function(e,a,l){var t,n;l(101),t=l(49),n=l(106),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,a,l){var t,n;t=l(51),n=l(108),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,a,l){var t,n;l(102),t=l(52),n=l(109),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,a,l){var t,n;t=l(53),n=l(110),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,a,l){var t,n;t=l(54),n=l(111),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,a,l){var t,n;t=l(56),n=l(113),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,a,l){var t,n;t=l(57),n=l(114),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,a,l){var t,n;t=l(58),n=l(115),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}]);
//# sourceMappingURL=app.98cf3c874fa8ea9ff27e.js.map