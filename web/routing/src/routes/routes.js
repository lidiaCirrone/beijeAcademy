const routes = {
   HOME: '/',
   DETAIL: 'detail/:id',
   CONTACT: 'contact',
   CLASSSCREEN: 'classScreen',
   CMS: 'cms',
   PROFILE: 'profile',
   ORDERS: 'orders/:id/:name'
}

const path = () => {
   function detail() {
      return `detail/${params}`
   }
}

export {
   routes,
   path
}