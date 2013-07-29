class TwitterUser < ActiveRecord::Base
  has_many :tweets

  def fetch_tweets!
    Twitter.user_timeline(username, count: 10).each { |tweet| tweets.find_or_create_by_text(tweet.text) }
  end

  def tweets_stale?
      Time.now - tweets.last.created_at > 900
  end

end
