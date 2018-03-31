state: {
  items: [
    {
      origin: {
        path: '/path/to/file.txt',
        name: 'file.txt',
        ext: 'txt',
        directory: false
      },
      rename: {
        path: '/path/to/newFILE.txt',
        name: 'newFILE.txt'
        ext: 'txt',
        directory: false
      },
      regex: '/abc/',
      isSelected: true
    }, {
      origin: {
        path: '/path/to/folder',
        name: 'folder',
        ext: '',
        directory: true
      },
      rename: {
        path: '/path/to/newFolder',
        name: 'newFolder'
        ext: '',
        directory: true
      },
      regex: '/abc/',
      isSelected: false
    }
  ]
}
