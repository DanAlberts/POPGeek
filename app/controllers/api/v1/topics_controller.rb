class Api::V1::TopicsController < ApiController

  def index
    render json: Topic.all
  end

  def show

  end

  def create

  end
end