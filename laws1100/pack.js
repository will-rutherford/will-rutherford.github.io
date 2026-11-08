// Opens every <details> before printing so hidden answers/notes appear on paper.
window.addEventListener('beforeprint',function(){document.querySelectorAll('details').forEach(function(d){d.dataset.wasOpen=d.open;d.open=true;});});
window.addEventListener('afterprint',function(){document.querySelectorAll('details').forEach(function(d){d.open=d.dataset.wasOpen==='true';});});
