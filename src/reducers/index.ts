import { combineReducers } from 'redux';

import comparison from './comparison';
import arraySettings from './arraySettings'
import codeSettings from './codeSettings';

export default combineReducers({
    arraySettings,
    comparison,
    codeSettings
});