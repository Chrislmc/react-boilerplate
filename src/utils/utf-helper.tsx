export const decodeUtf = (encodedText: string) => {
    return decodeURIComponent(escape(encodedText));
};
