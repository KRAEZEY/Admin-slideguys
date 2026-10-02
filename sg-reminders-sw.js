// Notifications only: this worker does not cache pages, logins, or booking data.
self.addEventListener('push',event=>{
 let data={};try{data=event.data?.json()||{};}catch{}
 event.waitUntil(self.registration.showNotification(data.title||'Slide Guys booking reminder',{
  body:data.body||'Open the dashboard to see upcoming bookings.',tag:data.tag||'sg-bookings',
  data:{url:new URL('dashboard.html?bookings=1',self.registration.scope).href}
 }));
});
self.addEventListener('notificationclick',event=>{
 event.notification.close();const url=new URL('dashboard.html?bookings=1',self.registration.scope).href;
 event.waitUntil((async()=>{
  const windows=await clients.matchAll({type:'window',includeUncontrolled:true});
  for(const window of windows){if(new URL(window.url).pathname===new URL(url).pathname){await window.navigate(url);return window.focus();}}
  return clients.openWindow(url);
 })());
});
