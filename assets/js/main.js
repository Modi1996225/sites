// 站点运行时小脚本：填充年份与当前访问域名。
(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var domainEl = document.getElementById('meta-domain');
  if (domainEl) domainEl.textContent = location.host || 'localhost';
})();
