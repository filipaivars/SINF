class SessionController < ApplicationController
  after_filter :short_session
  def index
    if (session[:user_id])
      render json: User.includes(:groups).find_by_id(session[:user_id])
    else
      render nothing: true, status: :no_content
    end
  end

  def create
    user = authenticate(session_params[:email], session_params[:password])

    if !user[:error]
      session[:user_id] = user.id
      render json: user.as_json(only_user: 1), status: :created #, location: @user
    else
      session[:user_id] = nil # just in case there exists an old session
      render json: user, status: :unprocessable_entity
    end
  end

  def delete
    session[:user_id] = nil
    render json: {success: 'Session deleted with success'}
  end
  def short_session
    # request.session_options = request.session_options.dup
    # request.session_options[:expire_after] = 1.minute
    # request.session_options.freeze
  end


  private
  def session_params
    params.require(:email)
    params.require(:password)
    params
  end
end
