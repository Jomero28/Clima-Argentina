export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Oscar Hernández - Josué Romero';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'SIG - Proyecto 2:\nCiudades con el mejor clima de Argentina';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Profesor: Armando Arce Orozco';

  return {
    name,
    blogTitle,
    footerText,
  };
};
