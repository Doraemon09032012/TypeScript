interface FolderContentItem {
    type: 'folder' | 'file';
}

// function f(numbers: number[]): FolderContentItem[] {
//     return numbers.map(v => ({ type: 'folder' } as { type: 'folder' }));
// }

let a: FolderContentItem[] = [1, 2, 3, 4, 5].map(v => ({ type: 'folder' } as { type: 'folder' }));
