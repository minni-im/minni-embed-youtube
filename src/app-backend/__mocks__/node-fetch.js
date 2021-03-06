const mappings = {
  "http://www.youtube.com/oembed?url=https://youtube.com/watch?v=4SbiiyRSIwo&format=json":
    "youtube",
};

function fake(url, options = {}) {
  if (!(url in mappings)) {
    return Promise.resolve({
      ok: true,
      status: 404,
    });
  }
  const filename = `./${mappings[url]}`;
  return Promise.resolve(require.requireActual(filename).default);
}

export default jest.genMockFunction().mockImplementation(fake);
