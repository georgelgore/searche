class Api::V1::UsersController < ApplicationController

  def index
    if params[:username]
      @user = User.select{|user| user.username == params[:username]}
      render json: @user
      return
    end
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create(user_params)
    render json: @user
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end

end
