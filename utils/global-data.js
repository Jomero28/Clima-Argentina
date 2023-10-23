export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Oscar Hernández - Josué Romero';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'SIG - Proyecto 2';
  const blogTitle2 = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Ciudades con el mejor clima de Argentina';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Ciudades con el mejor clima de Argentina';

  return {
    name,
    blogTitle,
    blogTitle2,
    footerText,
  };
};
