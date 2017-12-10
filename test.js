// const x = {
//     map: <U>(callbackfn: () => U): U[] => [callbackfn()]
// };
// let a: FolderContentItem = x.map(() => ({ type: 'folder' }));
// let c: [number, number][] = [[1, 2], [3, 4]].map(v => [1, 2]);
var a = [1, 2, 3, 4, 5].map(function (v) { return ({ type: 'folder' }); });
// a[0].type = 'iphone';
