#riot

## Usage

``` js
const setupDatabase = requiere('riot-db')

setupDatabase(config).then(db => {
  const {Agent, Metric} = db

}).catch(err=> console.error(err))
```
