class Api::V1::UsersController < ApplicationController

  def index
    @user = User.select{|user| user.username == params[:username]}
    render json: @user
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
