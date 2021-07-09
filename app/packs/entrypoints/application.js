// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()



function importAll(r) {
  r.keys().forEach(r);
}
// Add relevant file extensions as needed below.
// I'm sure there is a better way :shrug:
//
// This is needed, otherwise Webpacker throws:
// Webpacker can't find media/images/logo.svg in /home/foton/workspace/webpacker_6/public/packs/manifest.json. Possible causes:
importAll(require.context('../media/images/', true, /\.(svg|jpg|gif)$/));


console.log('Hello from Webpacker!')

