function auth(r) {
    const authHeader = r.headersIn['Authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        r.return(401, "Missing or invalid Authorization header");
        return;
    }

    const token = authHeader.split(' ')[1];
    r.return(200, `Token received: ${token}`);
}

export default { auth };
