const getBaseUrl =( )=>
    process.env.NOde_ENV === "development" ? "http://localhsot:3000": process.env.VERCE_URL; export default getBaseUrl;
