export default {
  // 定义定时任务处理器
  async scheduled(event, env, ctx) {
    const targetUrl = "https://your-render-domain.com/uuid"; // <-- 替换成实际部署的domain/uuid

    // HEAD
    try {
      await fetch(targetUrl, {
        method: 'HEAD',
        headers: {
          // User-Agent
          'User-Agent': 'Mozilla/5.0 (RenderKeepAlive/1.0)',
        },
      });
      console.log(`Successfully pinged ${targetUrl}`);
    } catch (e) {
      console.error(`Failed to ping ${targetUrl}: ${e.message}`);
    }
  },
};
