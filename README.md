# react-router-v4-maizuo

### React Router V4 正式版发布，该版本相较于前面三个版本有根本性变化，遵循 Just Component 的 API 设计理念。此项目是正是基于react router-v4.0的最佳实践



# 说明 

>  这个项目是关于 react+react-router-4.0版本+ES6+webapck 单页面应用实战

>  webpack-dev-server的反向代理配置,解决前端跨域问题.

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会继续开源项目

>  如有问题请在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍


# 项目运行（nodejs 6.0+）

``` bash
# 1. git clone git@github.com:liupeijun/react-router-v4-maizuo.git

# 2. 进入 目录, 安装依赖, 启动webpack dev server

cd react-router-v4-maizuo 

cnpm install(******因为使用了sass，为了顺利完成安装，最好使用cnpm install******)

npm run dev  (开发环境)

```

# 效果演示
<p>
  <img src="https://github.com/liupeijun/react-router-v4-maizuo/blob/master/screenshot/1.png" width="200" float="left"/>
  <img src="https://github.com/liupeijun/react-router-v4-maizuo/blob/master/screenshot/2.png" width="200" float="left"/>
  <img src="https://github.com/liupeijun/react-router-v4-maizuo/blob/master/screenshot/3.png" width="200" float="left"/>
  <img src="https://github.com/liupeijun/react-router-v4-maizuo/blob/master/screenshot/4.png" width="200" float="left"/>
</p>


# 路由配置
``` bash
    const router = (
      <Router>
        <App>
          <Switch> {/*Renders the first child <Route> or <Redirect> that matches the location.*/}
          <Route path="/home" component={Home} />
          <Route path="/film" render={()=>
            <Film>
              <Switch>{/*Renders the first child <Route> or <Redirect> that matches the location.*/}
                 <Route path="/film/now-playing" component={NowPlaying}/>
                 <Route path="/film/coming-soon" component={ComingSoon}/>
                 <Redirect from="/film" to="/film/now-playing"/> {/*重定向*/}
              </Switch>
            </Film>
          }>
          </Route>
          <Route path="/cinema" component={Cinema}>
          </Route>
          <Route path="/me" component={Me}>
          </Route>
          <Route path="/card" component={Card} >
          </Route>
          <Route path="/detail/:kerwinId" render={props=>
              <Detail {...props}/>
          }>
          </Route>
          <Redirect from="/" to="/home"/> {/*重定向*/}
          </Switch>
        </App>
      </Router>
    )

```

# 待办事项

>  其他页面完善
>  引入redux管理状态

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, Kerwin Liu

