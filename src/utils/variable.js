export const homePageUrl =
  process.env.NODE_ENV === 'development' ? "http://localhost/output/index.html" : "/output/index.html"

export const homePath =
  process.env.NODE_ENV === 'development' ? "http://localhost/voutput" : "/voutput"

export const userPageUrl =
  process.env.NODE_ENV === 'development' ? "http://localhost/voutput/user.html" : "/voutput/user.html"

export const baseUrl =
  process.env.NODE_ENV === 'development' ? "http://localhost/" : ""

export const pageServicePath =
  process.env.NODE_ENV === 'development' ? "http://localhost:8088" : ""

export const isDev =
  process.env.NODE_ENV === 'development' ? true : false;

export const isMultiPage = false;


