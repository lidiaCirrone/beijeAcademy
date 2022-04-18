const routes = {
   HOME: '/',
   SIGNUP: '/signup',
   LOGIN: '/login',
   NEWS: '/news',
   DETAIL: 'detail/:id'
}

const path = {
   detail: function (params) {
      return `detail/${params}`;
   }
}

export {
   routes,
   path
}