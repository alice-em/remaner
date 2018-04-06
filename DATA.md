state: {
  items: [
    {
      origin: {
        path: '/path/to/file.txt',
        base: 'file.txt',
        ext: 'txt',
        dirname: '/path/to/',
      },
      rename: {
        path: '/path/to/newFILE.txt',
        base: 'newFILE.txt'
        ext: 'txt',
        dirname: '/path/to/',
      },
      regex: '/abc/',
      isSelected: true,
      isDirectory: 'false',
      isDuplicate: false
    }, {
      origin: {
        path: '/path/to/folder',
        base: 'folder',
        ext: '',
        dirname: '/path/to/',
      },
      rename: {
        path: '/path/to/newFolder',
        base: 'newFolder'
        ext: '',
        dirname: '/path/to/',
      },
      regex: '/abc/',
      isSelected: false,
      isDirectory: 'true',
      isDuplicate: false
    }
  ],
  copy: [1, 2],
}

{
  titleBar: 'onClickFunction'
}
