export interface BooksInterface {
    volumeInfo: BooksDetailsInterface;
}

export interface BooksDetailsInterface {
    title: string;
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    }
    authors: string[];
}
