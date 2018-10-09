# waves

## Ecomerce solution for selling Guitars

### Functionality
Image and Video CDN: https://cloudinary.com/


#BackEnd
* User
* Product
* Brand & Wood belongs to product

* auth with email/password. 

>Note:  example this feature is available ....<br>
Use the backtick to refer to a `function()`.
 
There is a literal ``backtick (`)`` here.



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









