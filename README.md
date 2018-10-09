# waves

Aims:
- async render component
- manipulation with webpack config
- rewrite Register, Add Product to modal window
- test for Backend
- refactor Frontend


NOT DONE: need controller refactor.
NOT DONE: 123 Show products in Cart, Billing, Emailer, Notifications,


## Ecomerce solution for selling Guitars


### Services
www.cloudinary.com -- storing images/video remotely
www.mlab.com -- cloud MongoDB


### Render index.html

```javascript
app.use(express.static('client/build'));

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.get('/*', (req, res) => {
    res.sendfile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}
```


### Heroku


> heroku login

`
"engines": {
    "node": "8.9.4"
  }
`
> heroku create

> git push heroku

> heroku > settings > Config vars | or: $heroku config:set API_KEY=smth


--

###Attention

##### without double reFetch
```javascript
class AuthHOC extends Component {
    componentDidMount() {
      if (!this.props.user.isAuth && !this.props.loading) {
        this.props.doAuth();
      }
    }

```









