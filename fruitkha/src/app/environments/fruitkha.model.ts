export interface productList {
    prodImage: string;
    prodName: string;
    prodPrice: string;
}
export interface logoBox{
    img: string,
    src: string
    }
export interface newsList{
    newsImg: string,
    newsTopic: string,
    newsAuthor: string,
    newsDate: string,
    newsContent: string,
    }
export interface contentlist{
    image:string,
    name: string,
    work: string,
    content: string
}
export interface links{
    home: Promise<boolean>,
    about:Promise<boolean>,
    news: Promise<boolean>,
    contact:Promise<boolean>,
    shop:Promise<boolean>,
    cart: Promise<boolean>
}
