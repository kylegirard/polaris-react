import * as React from 'react';
import {DropZoneContext} from '../../types';

const {Provider, Consumer} = React.createContext<DropZoneContext>({
  width: 'extraLarge',
  type: 'file',
});

export {Provider, Consumer};
