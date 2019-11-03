const SourceFactory = {
  makeSource: (source = {}) => {
    const { id, name } = source;
    return ({
      id: id || '',
      name: name || '¯\\_(ツ)_/¯',
    });
  },
};

export default SourceFactory;
