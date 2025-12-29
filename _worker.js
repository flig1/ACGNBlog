// Cloudflare Workers 入口点
// 用于处理静态网站的请求

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // 从请求中获取路径
  const url = new URL(request.url);
  let path = url.pathname;
  
  // 静态资源处理逻辑
  // 如果是目录请求，尝试返回 index.html
  if (path.endsWith('/')) {
    path += 'index.html';
  }
  
  // 如果没有文件扩展名，尝试添加 .html
  if (!path.includes('.')) {
    path += '.html';
  }
  
  try {
    // 尝试从资产中获取文件
    const asset = await ASSETS.fetch(new Request(`https://${url.host}${path}`, request));
    
    // 如果找到了文件，返回它
    if (asset.status === 200) {
      return asset;
    }
    
    // 如果没找到，尝试返回 404.html
    const notFoundAsset = await ASSETS.fetch(new Request(`https://${url.host}/404.html`, request));
    return new Response(notFoundAsset.body, {
      status: 404,
      headers: notFoundAsset.headers
    });
  } catch (error) {
    // 处理任何错误
    return new Response('Internal Server Error', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }
}
