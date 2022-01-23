const fetchApi = async (query: string, { variables }: any = {}) => {
  const ApiUrl = String(process.env.NEXT_PUBLIC_WP_GQL);
  const getHeaders = () => {
    const headers = new Headers();
    if (!headers.get('content-type')) {
      headers.append('content-type', 'application/json');
    }
    return headers;
  };

  // if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
  //   headers[
  //     'Authorization'
  //   ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  // }

  const res = await fetch(ApiUrl, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      query,
      variables: variables || {},
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
};

export default fetchApi;
