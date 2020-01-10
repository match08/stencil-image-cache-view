export declare class CachedImage {
    private cache;
    private readonly id;
    constructor();
    src: string;
    placeHolder: string;
    errorHolder: string;
    element: HTMLElement;
    srcChanged(): void;
    render(): JSX.Element;
    private loadImage;
    componentWillUpdate(): void;
    componentDidLoad(): void;
}
