import './layer.less';
import tpl from './layer.ejs';

function Layer() {
	return {
		name: 'layer',
		tpl: tpl
	};
}

export default Layer;