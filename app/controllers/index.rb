get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/user/get_username' do
  p params
  @username = params[:username]
  redirect "/user/#{@username}"
end

get '/user/:username' do

  @user = TwitterUser.find_or_create_by_username(params[:username])
  if @user.tweets.empty?
    @user.fetch_tweets!
  elsif @user.tweets_stale?
    @user.fetch_tweets!
  end

  @tweets = @user.tweets.limit(10)

  if request.xhr?
    erb :_show_tweets, layout: false
  else
    erb :show_tweets
  end
end
