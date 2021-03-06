/* tslint:disable */

// Angular
import '@angular/common';
import '@angular/core';
import '@angular/http';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/router';

// RxJS
import 'rxjs';

// hammerjs
import 'hammerjs';

// Alfresco
import 'alfresco-js-api';
import 'ng2-alfresco-core';
import 'ng2-alfresco-datatable';
import 'ng2-alfresco-documentlist';
import 'ng2-alfresco-login';
import 'ng2-alfresco-search';
import 'ng2-alfresco-upload';
import 'ng2-alfresco-userinfo';
import 'ng2-alfresco-viewer';

// Polyfill(s) for dialogs
require('script-loader!dialog-polyfill/dialog-polyfill');
import 'dialog-polyfill/dialog-polyfill.css';

// Load the Angular Material 2 stylesheet
import '@angular/material/prebuilt-themes/indigo-pink.css';

// Google Material Design Lite
import 'material-design-icons/iconfont/material-icons.css';
import 'material-design-lite/dist/material.orange-blue.min.css';
import 'material-design-lite/material.js';

import '../public/css/app.css';
import '../public/css/muli-font.css';

import 'chart.js';
import 'ng2-charts';
require('script-loader!raphael/raphael.min.js');

require('script-loader!moment/min/moment.min.js');

require('script-loader!md-date-time-picker/dist/js/draggabilly.pkgd.min.js');

require('pdfjs-dist/web/compatibility.js');

// Setting worker path to worker bundle.
let pdfjsLib = require('pdfjs-dist');
if (process.env.ENV === 'production') {
    pdfjsLib.PDFJS.workerSrc = './pdf.worker.js';
} else {
    pdfjsLib.PDFJS.workerSrc = '../../node_modules/pdfjs-dist/build/pdf.worker.js';
}

require('pdfjs-dist/web/pdf_viewer.js');
require('three/build/three.min.js');
