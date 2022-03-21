'use babel';

import InkdropJsonToGo from './inkdrop-json-to-go-parser';
import { markdownRenderer } from 'inkdrop'

module.exports = {
  activate() {
    inkdrop.components.registerClass(InkdropJsonToGo); 
    if (markdownRenderer) {
      markdownRenderer.remarkCodeComponents['goStruct'] = InkdropJsonToGo
    }
  },

  deactivate() {  
    inkdrop.components.deleteClass(InkdropJsonToGo);
    if (markdownRenderer) {
      markdownRenderer.remarkCodeComponents['goStruct'] = null
    }
  }
};
