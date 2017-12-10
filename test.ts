interface FolderContentItem {
    type: 'folder' | 'file';
}

// const x = {
//     map: <U>(callbackfn: () => U): U[] => [callbackfn()]
// };

// let a: FolderContentItem = x.map(() => ({ type: 'folder' }));

// let c: [number, number][] = [[1, 2], [3, 4]].map<[numbrt, numbrer]>(v => [1, 2] as [number,number]);

let a: FolderContentItem[] = [1, 2, 3, 4, 5].map(v => ({ type: 'folder' }));
// a[0].type = 'iphone';
