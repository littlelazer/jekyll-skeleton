Base Jekyll Install
===================

Instructions
------------

1. clone repo
2. bundle install
3. pip install -r requirements.txt
4. npm install
5. bower install
6. fun and $$$

About
-----

The purpose of this is just to have a base jekyll install that you can clone and start using to build a static site, with most of the things you need already included and ready to go.

There are several grunt tasks built in. The default will run jshint, run js tests using karma, compile your sass, concatenate and minify your js, and copy your bower front end dependencies into the folders that jekyll will use. You can add and remove tasks as you like, as well as add more dependencies to be installed through bower. You can also deploy your site to S3 using [d3ploy](https://github.com/dryan/d3ploy) (thanks [dryan](http://dryan.com/)!) by having a .aws file in your directory with your AWS credentials.


Dependencies
------------
- ruby/bundler
- python/pip
- node/npm
