import {dirname, relative, sep} from 'path';

export default function pathToId(base, path) {
	return relative(base, dirname(path)).split(sep).join('/');
}
