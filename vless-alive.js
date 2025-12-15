export default {
  // 定义定时任务处理器
  async scheduled(event, env, ctx) {
    const targetUrl = "https://your-render-domain.com/uuid"; // <-- 请替换成您实际部署的domain/uuid

    // 使用 HEAD 方法发送请求，只获取标头，不下载内容，资源消耗最低
    try {
      await fetch(targetUrl, {
        method: 'HEAD',
        headers: {
          // 伪装一个User-Agent，提高通过率
          'User-Agent': 'Mozilla/5.0 (RenderKeepAlive/1.0)',
        },
      });
      console.log(`Successfully pinged ${targetUrl}`);
    } catch (e) {
      console.error(`Failed to ping ${targetUrl}: ${e.message}`);
    }
  },
};
