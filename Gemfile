source "https://rubygems.org"

# Jekyll and plugins
gem "jekyll", "~> 4.3.2"
gem "jekyll-feed"
gem "jekyll-seo-tag"
gem "webrick"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Required for Ruby 3
gem "base64"
gem "csv"
