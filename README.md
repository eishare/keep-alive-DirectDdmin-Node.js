# Vless ws tls节点 DirectAdmin保活说明

* 1.Cloudflare新建workers，使用hello world模板

* 2.替换为vless-alive代码，编辑第四行const targetUrl = "https://your-domain.com/uuid";
  
                 https://your-domain.com/uuid  请替换成您的实际部署的domain/uuid
  
* 3.进入设置，添加触发事件，时间可设置为每5~30分钟执行一次（建议不要低于1分钟，避免风控）
     
