#Base Jekyll Install

##Instructions
1. clone repo
2. bundle install
3. pip install -r requirements.txt
4. npm install
5. bower install
6. fun and $$$

## About
The purpose of this is just to have a base [Jekyll](http://jekyllrb.com) install that you can clone and start using relatively quickly to build a static site, with most of the things you need already included and ready to go, so you can focus on the content and code instead of just getting everything set up.

## Folder Structure
Your pages, posts, and images are the same as with any jekyll project.
Your css goes in 'sass/'.
Your javascript goes in 'src/'.
Your javascript tests go in 'test/'.

You could, but you probably shouldn't put anything in 'js/' and 'css/'. If they're named the same as another file, they'll get blown away each time the grunt tasks run.

### Folders you don't need to pay attention to
These are all included in the .gitignore file and excluded in _config.yml because they get generated when you run the install and grunt commands:
- bower_components/
- lib/
- node_modules

## Bower Packages
- [jQuery](http://jquery.com)
- [Modernizr](http://modernizr.com)
- [Twitter Bootstrap](http://getbootstrap.com/)

## Grunt Tasks
There are several grunt tasks built in:
### 'grunt' - prepare files for deployment
- compiles everything in your '/sass' into '/css'
- runs jshint on your js,
- runs your jasmine tests in 'test/' in 5 different browsers using karma
- concatenates and minifies your js from '/src' into '/js'
- concatenates and minifies your bower frontend dependencies into '/js/vendor/vendor.js' and '/css/vendor/vendor.css'.
- copies bootstrap fonticons into 'css/fonts'

### 'grunt test' - test your javascript
Runs jshint and all jasmine tests in 'test/'

### 'grunt dev' - prepare files while in development
- compiles everything in '/sass' into '/css'
- runs jshint on your js,
- runs your jasmine tests in 5 different browsers using karma
- copies your js into 'js/main.js'
- concatenates jQuery and bootstrap.js into 'js/vendor/vendor.js'
- copies modernizr into 'js/vendor/modernizr.js'

You can add and remove tasks as you like (just check the [grunt docs](http://gruntjs.com/getting-started)), as well as have [bower](http://bower.io) install additional dependencies. Just make sure you modify the tasks to copy/concat/minify the appropriate files from those packages

## Deployment
You can easily deploy your site to S3 using [d3ploy](https://github.com/dryan/d3ploy) (thanks [dryan](http://dryan.com/)!) by copying the .aws-sample file to .aws and adding your AWS credentials. Check the d3ploy docs for more info.