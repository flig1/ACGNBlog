// Cloudflare Workers 入口点 - 简化版本
// 仅用于处理静态网站的基本请求

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    // 直接使用默认的资产获取逻辑，让 Pages 自动处理路由
    // Cloudflare Pages 会自动处理静态资产和路由
    const response = await fetch(request);
    
    // 如果响应是 404，尝试返回根目录的 index.html
    if (response.status === 404) {
      const url = new URL(request.url);
      const rootIndexRequest = new Request(`${url.origin}/index.html`, request);
      const rootIndexResponse = await fetch(rootIndexRequest);
      
      if (rootIndexResponse.status === 200) {
        return rootIndexResponse;
      }
    }
    
    return response;
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
