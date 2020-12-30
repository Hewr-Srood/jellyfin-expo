/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { DarkTheme } from '@react-navigation/native';

import Colors from '../../constants/Colors';

export default {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		primary: Colors.tintColor,
		background: Colors.backgroundColor,
		card: Colors.headerBackgroundColor,
		text: Colors.textColor,
		border: 'transparent'
	}
};
