import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://henriqueportfolio.cdn.prismic.io/api/v2';
//export const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_API;

export const client = (req = null) => {
    const options = req ? { req } : null;

    return Prismic.client(apiEndpoint, options);
}