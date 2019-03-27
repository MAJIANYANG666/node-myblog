module.exports = function (app) {
  // app有get和use，use是使用中间件，这里是使用router,然后交由router的get,post处理
  app.get('/', function (req, res) {
    res.redirect('/posts')
  })
  app.use('/signup', require('./signup'))
  app.use('/signin', require('./signin'))
  app.use('/signout', require('./signout'))
  app.use('/posts', require('./posts'))
  app.use('/comments', require('./comments'))
  /// 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404).render('404')
    }
  })
}
