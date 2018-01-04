class Api::V1::ArticlesController < ApplicationController

  def index
    puts params
    if params[:url] && params[:topic_id]
      # byebug
      @article = Article.select{|article| article.url == params[:url] && article.topic_id == params[:topic_id].to_i}
      render json: @article
      return
    end

    @articles = Article.all
    render json: @articles
  end

  def show
    @article = Article.find(params[:id])
    render json: @article
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      render json: @article
    else
      render json: {errors: @article.errors.full_messages}, status: 422
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
  end

  private

  def article_params
    params.require(:article).permit(:topic_id, :title, :description, :url)
  end

end
