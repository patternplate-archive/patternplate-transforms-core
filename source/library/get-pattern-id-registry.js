export default dependencies => {
	return Object.entries(dependencies).reduce((registry, dependencyEntry) => {
		const [dependencyName, dependency] = dependencyEntry;
		const {id, path} = dependency.pattern;
		return {...registry, [dependencyName]: {id, path}};
	}, {});
};
