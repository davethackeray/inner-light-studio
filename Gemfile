source "https://rubygems.org"

ruby "~> 3.3.0"

# Jekyll and plugins
gem "jekyll", "~> 4.3.0"
gem "webrick", "~> 1.8"
gem "jekyll-sass-converter", "~> 3.1.0"

group :jekyll_plugins do
  # gem "jekyll-feed", "~> 0.17"  # Temporarily disabled - not using blog posts
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
  # Temporarily disable postcss until configured
  # gem "jekyll-postcss", "~> 0.5.0"
end

# Windows and JRuby support
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
