class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  # GET /user
  def index
    users = User.all
    render json: users
  end

  # GET /users/1
  def show
    current_user = User.find(session[:user_id])
    render json: current_user
  end

  # POST /users
  def create
    user = User.create!(user_params)
    render json: user
  end

  

  private

    def set_user
      user = User.find(params[:id])
    end


    def user_params
      params.permit(:username, :password, :avatar)
    end

    def render_unprocessable_entity
      render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end

end
