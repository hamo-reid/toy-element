import { each, isFunction } from 'lodash-es';
import shell from 'shelljs';

export default function hooksPlugin({
  rmFiles = [],
  beforeBuild,
  afterBuild,
}: {
  rmFiles?: string[];
  beforeBuild?: Function;
  afterBuild?: Function;
}) {
  return {
    name: 'hooksPlugin',
    buildStart() {
      each(rmFiles, (fName) => {
        shell.rm('-rf', fName);
      });
      isFunction(beforeBuild) && beforeBuild();
    },
    buildEnd(err?: Error) {
      !err && isFunction(afterBuild) && afterBuild();
      
    }
  }
}
