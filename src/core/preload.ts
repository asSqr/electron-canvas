import { contextBridge } from 'electron';
import console from 'console';

contextBridge.exposeInMainWorld(
  'console',
  new console.Console(process.stdout, process.stderr),
);
