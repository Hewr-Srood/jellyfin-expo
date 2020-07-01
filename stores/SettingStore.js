/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { action, observable } from 'mobx';

/**
 * Data store for application settings
 */
export default class SettingStore {
  @observable
  activeServer = 0

  @action
  reset() {
    this.activeServer = 0;
  }
}
