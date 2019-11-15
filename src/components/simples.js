import React from 'react';
import {Text} from 'react-native';

import styleApp from '../styles/styleApp';

//export default function(props) {
//return <Text>{props.texto}</Text>;
//}

export default props => <Text style={styleApp.exec}>{props.texto}</Text>;
