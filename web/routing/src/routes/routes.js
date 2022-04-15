const routes = {
   HOME: '/',
   DETAIL: 'detail/:id',
   CONTACT: 'contact',
   CLASSSCREEN: 'classScreen',
   CMS: 'cms',
   PROFILE: 'profile',
   ORDERS: 'orders/:id/:name'
}

const path = {
   detail: function (params) {
      return `detail/${params}`
   }
}

export {
   routes,
   path
}