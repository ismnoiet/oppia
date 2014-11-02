// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Clearing-house for widget utilities for protractor tests.
 *
 * @author Jacob Davis (jacobdavis11@gmail.com)
 */

var interactive = {
  Continue: require(
    '../../../extensions/widgets/interactive/Continue/protractor.js'),
  MultipleChoiceInput: require(
    '../../../extensions/widgets/interactive/MultipleChoiceInput/protractor.js'),
  NumericInput: require(
    '../../../extensions/widgets/interactive/NumericInput/protractor.js'),
  TextInput: require(
    '../../../extensions/widgets/interactive/TextInput/protractor.js')
};

var noninteractive = {
  Collapsible: require(
    '../../../extensions/widgets/noninteractive/Collapsible/protractor.js'),
  Image: require(
    '../../../extensions/widgets/noninteractive/Image/protractor.js'),
  Link: require(
    '../../../extensions/widgets/noninteractive/Link/protractor.js'),
  Math: require(
    '../../../extensions/widgets/noninteractive/Math/protractor.js'),
  Tabs: require(
    '../../../extensions/widgets/noninteractive/Tabs/protractor.js'),
  Video: require(
    '../../../extensions/widgets/noninteractive/Video/protractor.js')
};

var getInteractive = function(widgetName) {
  if (interactive.hasOwnProperty(widgetName)) {
    return interactive[widgetName];
  } else {
    throw Error('Unknow interactive widget: ' + widgetName);
  }
};

var getNoninteractive = function(widgetName) {
  if (noninteractive.hasOwnProperty(widgetName)) {
    return noninteractive[widgetName];
  } else {
    throw Error('Unknow non-interactive widget: ' + widgetName);
  }
};

exports.getInteractive = getInteractive;
exports.getNoninteractive = getNoninteractive;