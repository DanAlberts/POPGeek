class Api::V1::BoardsController < ApiController

  def index
    render json: Board.all
  end

  def show
    render json: Board.first
  end
end