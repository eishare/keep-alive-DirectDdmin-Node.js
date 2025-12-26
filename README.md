# Vless ws tls节点 DirectAdmin保活说明

* 1.Cloudflare新建workers，使用hello world模板，替换为本项目vless-alive.js代码

* 2.将第四行 "https://your-domain.com/uuid" 替换成实际域名/uuid
  
* 3.进入设置，添加触发事件，时间可设置为每5~30分钟执行一次（建议不要低于1分钟，避免风控）
