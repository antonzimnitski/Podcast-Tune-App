import Constants from 'expo-constants';
const { manifest } = Constants;

export const ENDPOINT = `http://${manifest.debuggerHost
  .split(':')
  .shift()}:4444`;
