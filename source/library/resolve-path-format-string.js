import {sep as separator} from 'path';
import sprintf from 'sprintf';

export default (resolveString, patternId, outputName, extension) => {
	return sprintf(resolveString, {
		patternId, outputName, extension
	}).split('/').join(separator);
};
