class Api::V1::UsersController < ApplicationController

  def index
    @users = User.select{|user| user.username == params[:username]}
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
    params.require(:user).permit(:name, :username)
  end

end
