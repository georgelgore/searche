class Api::V1::TopicsController < ApplicationController

  def index
    if params[:title]
      @topic = Topic.select{|topic| topic.title == params[:title]}
      render json: @topic
      return
    end

    @topics = Topic.all
    render json: @topics
  end

  def show
    @topic = Topic.find(params[:id])
    render json: @topic
  end

  def create
    @topic = Topic.new(topic_params)
    if @topic.save
      render json: @topic
    else
      render json: {errors: @topic.errors.full_messages}, status: 422
    end
  end

  def destroy
    @topic = Topic.find(params[:id])
    @topic.destroy
  end

  private

  def topic_params
    params.require(:topic).permit(:user_id, :title)
  end

end
